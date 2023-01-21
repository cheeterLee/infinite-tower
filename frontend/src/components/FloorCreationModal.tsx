import React, { FormEvent } from "react"
import { Modal, Form, Input, Button } from "antd"

export interface IFloorCreationModalProps {
	isOpen: boolean
	handleModalClose: () => void
}

const FloorCreationModal: React.FunctionComponent<IFloorCreationModalProps> = ({
	isOpen,
	handleModalClose,
}) => {
	const [form] = Form.useForm()

	const layout = {
		labelCol: { span: 6 },
		wrapperCol: { span: 24 },
	}

	const onFinish = (values: any) => {
		console.log(values)
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
                initialValues={{ color: '#ffe7ba', windowTint: '#ffe7ba' }}
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
					name="windowTint"
					label="Window Tinit"
					rules={[{ required: true }]}
				>
					<Input type="color" />
				</Form.Item>
				<Form.Item>
					<Button block htmlType="submit">
						Submit
					</Button>
				</Form.Item>
			</Form>
		</Modal>
	)
}

export default FloorCreationModal
