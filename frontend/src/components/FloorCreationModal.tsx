import React, { FormEvent, useEffect } from "react"
import { Modal, Form, Input, Button } from "antd"
import { useCreateFloor } from "../hooks/useCreateFloor"
import { convertStringToHex } from "../utils/helper"
import { toast } from "react-hot-toast"

export interface IFloorCreationModalProps {
	isOpen: boolean
	handleModalClose: () => void
}

const FloorCreationModal: React.FunctionComponent<IFloorCreationModalProps> = ({
	isOpen,
	handleModalClose,
}) => {
	const [form] = Form.useForm()
	const { send, loading, error, success } = useCreateFloor()

	const layout = {
		labelCol: { span: 6 },
		wrapperCol: { span: 24 },
	}

	const onFinish = async (values: any) => {
		console.log(values)
		try {
			await send(
				values.ownerName,
				values.message,
				values.link,
				convertStringToHex(values.color),
				convertStringToHex(values.windowsTint)
			)
			toast.success("Successfully minted! Refresh to see :)")
		} catch (error) {
			console.log(error)
			toast.error("An error occurred :(")
		}
		handleModalClose()
	}

	return (
		<Modal
			title="Mint a new floor"
			open={isOpen}
			onCancel={handleModalClose}
			footer={[]}
			style={{ textAlign: "center", padding: "2rem 1rem" }}
		>
			<Form
				{...layout}
				form={form}
				style={{ margin: "1.5rem" }}
				onFinish={onFinish}
                initialValues={{ ownerName: '', message: '', link: '', color: '#ffe7ba', windowTint: '#ffe7ba' }}
			>
				<Form.Item
					name="ownerName"
					label="Owner Name"
					rules={[{ required: true }]}
				>
					<Input />
				</Form.Item>
				<Form.Item name="message" label="Message">
					<Input />
				</Form.Item>
				<Form.Item name="link" label="Link">
					<Input />
				</Form.Item>
				<Form.Item
					name="color"
					label="Color"
					rules={[{ required: true }]}
				>
					<Input type="color" />
				</Form.Item>
				<Form.Item
					name="windowsTint"
					label="Window Tinit"
					rules={[{ required: true }]}
				>
					<Input type="color" />
				</Form.Item>
				<Form.Item>
					<Button block htmlType="submit" loading={loading} >
						Submit
					</Button>
				</Form.Item>
			</Form>
		</Modal>
	)
}

export default FloorCreationModal
