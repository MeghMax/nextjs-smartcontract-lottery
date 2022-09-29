import { ConnectButton } from "web3uikit"

const Header = () => {
    return (
        <div>
            Decentralised Lottery
            <ConnectButton moralisAuth={false} />
        </div>
    )
}

export default Header
