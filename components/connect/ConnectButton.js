import { useConnect, useAccount } from "wagmi";
import { useModalContext } from "../../lib/modalContext";

export default function ConnectButton() {
  const [modalOpen, setModalOpen] = useModalContext();

  const { data, isError, loading } = useAccount();

  const {
    activeConnector,
    connect,
    connectors,
    error,
    isConnecting,
    pendingConnector,
  } = useConnect();

  return (
    <button onClick={() => setModalOpen(true)} className="flex items-center font-bold tracking-widest bg-white text-black rounded-full px-5 py-2 border-2 border-black transition-all hover:opacity-50">
      <img alt="" src="/icons/wallet.svg" className="h-5 mr-2"/> 
      {activeConnector
        ? data.address.slice(0, 4) +
          "..." +
          data.address.slice(data.address.length - 4, data.address.length)
        : "Connect"}
    </button>
  );
}
