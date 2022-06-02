import { useEffect, useState } from 'react'
import { useConnect, useDisconnect, useAccount } from 'wagmi'
import { useModalContext } from '../../lib/modalContext'

export default function Buttons() {

const [modalOpen, setModalOpen] = useModalContext()
const [connectError, setConnectError] = useState(null)
const { data, isLoading } = useAccount()
const [mounted, setMounted] = useState(false)

const { disconnect } = useDisconnect()

  const {
    activeConnector,
    connect,
    connectors,
    error,
    isConnecting,
    pendingConnector,
  } = useConnect()

  useEffect(() => {
    if(activeConnector) {
        setModalOpen(false)
    }
  }, [activeConnector])

  useEffect(() => {
    setMounted(true)
  }, [])

  async function handleConnect(x) {  
    try {
        connect(x)
    }
    catch (err) {
        console.log(err)
    }
  }

  if (!mounted) return <h1>Loading...</h1>

  if (activeConnector) return (
  <div className="text-white flex flex-col justify-center gap-y-6">
  <div className="text-xl font-bold tracking-widest text-center overflow-auto">{data.address}</div>
  <button className="border-2 bg-gray-900 border-gray-900 rounded-lg px-4 py-2 transition-all hover:bg-opacity-50" onClick={() => disconnect()}>Disconnect</button>
  </div>
  )


  return (
    <div className="flex flex-col gap-y-4 text-white">
      {connectors.map((x, i) => (
        <ConnectorButton x={x} handleError={setConnectError} key={i} />
      ))}

      {connectError && <div className="border border-red-400/10 py-2 px-4 rounded-lg text-center bg-red-200 text-red-600">{connectError.message}</div>}
    </div>
  )
}

const ConnectorButton = ({ x, handleError }) => {
  
  async function handleConnect(x) {  
    try {
        connect(x)
    }
    catch (err) {
        console.log(err)
    }
  }

  const {
    activeConnector,
    connect,
    connectors,
    error,
    isConnecting,
    pendingConnector,
  } = useConnect()

  const renamedConnectors = {
    "Injected": {
      name: "Browser wallets",
      icons: ["metamask.svg", "coinbase-wallet.svg", "brave.svg"]
    },
    "WalletConnect": {
      name: "WalletConnect",
      icons: ["walletconnect.svg"]
    },
    "Coinbase Wallet": {
      name: "Coinbase Wallet",
      icons: ["coinbase-wallet.svg"]
    }
  }

  useEffect(() => {
    if(error) {
      handleError(error)
    }
  }, [error])
  
  return(
    <>
    {x.ready && 
      <button className="text-sm tracking-wide border-2 bg-gray-900 border-gray-900 rounded-lg px-4 py-2 transition-all hover:bg-opacity-50 flex items-center justify-between" onClick={() => handleConnect(x)}>
        {renamedConnectors[x.name].name}
        {isConnecting && pendingConnector?.id === x.id && <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>}
        <div className="flex items-center gap-x-3">
        {renamedConnectors[x.name].icons.map((icon,i) => {
            return <img alt="" key={i} src={"/icons/"+icon} className="h-6 w-6" />
        })}
        </div>
        
      </button>
      }
      </>
  )
  
}