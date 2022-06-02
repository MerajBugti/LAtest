import { useNetwork, useDisconnect } from 'wagmi'
import { useModalContext } from '../lib/modalContext'

export default function Navbar() {

    const [modalOpen, setModalOpen] = useModalContext()
    const {disconnect} = useDisconnect()
    const correctChainId = 80001

    const {
        activeChain,
        chains,
        error,
        isLoading,
        pendingChainId,
        switchNetwork,
      } = useNetwork()

    if(!activeChain) return <button onClick={() => setModalOpen(true)}>Connect wallet</button>

    return(
        <div>
            <>
                {activeChain && <div>Connected to {activeChain.id}</div>}
                {activeChain.id != correctChainId && <button onClick={() => switchNetwork(correctChainId)}>Switch network</button>}
                {isLoading && pendingChainId === correctChainId && ' (confirm switching network in wallet)'}
                <button onClick={() => disconnect()}>Disconnect</button>
            </>
        </div>
    )
}