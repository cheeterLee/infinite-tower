import { useLogs } from "@usedapp/core"
import { useMemo } from "react"
import { contract } from "../utils/config"
import { convertHexToString } from "../utils/helper"
import { FloorItem } from "../utils/type"

export const useFloorInfo = () => {
    const logs = useLogs({
        contract,
        event: "NewFloor",
        args: [null],
    })

    const floors = useMemo(() => {
        return (
            logs?.value?.map((log) => {
                const floor: FloorItem = {
                    ownerName: log.data.ownerName,
                    message: log.data.message,
                    link: log.data.link,
                    color: convertHexToString(log.data.color._hex),
                    windowsTint: convertHexToString(log.data.windowsTint._hex)
                }
                return floor
            }) || []
        )
    }, [logs?.value])

    return { floors }
}