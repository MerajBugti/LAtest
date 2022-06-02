import Buttons from "./Buttons";
import { useAccount, useConnect } from "wagmi";
import { useModalContext } from "../../lib/modalContext";

export default function Modal() {
  const [modalOpen, setModalOpen] = useModalContext();
  const { data, error, isLoading } = useAccount();
  const { activeConnector } = useConnect();

  return (
    <div
      onClick={() => setModalOpen(false)}
      className={`cursor-pointer z-50 fixed left-0 top-0 bg-background/30 h-screen w-screen flex items-center justify-center transition-all px-4 ${
        modalOpen ? "backdrop-blur-lg visible" : "backdrop-blur-none invisible"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`transition-all cursor-default relative w-full bg-background border-4 border-gray-900 rounded-lg p-6 pb-6 ${
          modalOpen ? "translate-y-0 opacity-100" : "-translate-y-6 opacity-0"
        }`}
        style={{ maxWidth: "400px" }}
      >
        <div className="flex justify-between items-center pb-6">
          <h2 className="font-bold text-xl text-gray-900 tracking-wide">
            {activeConnector ? "Connected as" : "Connect your wallet"}
          </h2>
          <button
            onClick={() => setModalOpen(!modalOpen)}
            className="p-2 rounded-lg bg-gray-900/40 text-white/50 transition-all hover:bg-gray-900 hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <Buttons />
      </div>
    </div>
  );
}
