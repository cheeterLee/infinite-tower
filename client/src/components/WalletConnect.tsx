import { Button } from '@mantine/core'
import { useEthers } from '@usedapp/core'
import React from 'react'

export interface IWalletConnectProps {}

const WalletConnect: React.FunctionComponent<IWalletConnectProps> = props => {
    const { activateBrowserWallet, account, deactivate } = useEthers()
    if (account) {
        return <Button onClick={deactivate}>Disconnect</Button>
    } else {
        return <Button onClick={activateBrowserWallet}>Connect Wallet</Button>
    }

    return <Button>Connect Wallet</Button>
}

export default WalletConnect