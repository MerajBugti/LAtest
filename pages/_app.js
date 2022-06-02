import "../styles/globals.css";
import "../styles/global.scss";
import { Provider, chain, createClient, defaultChains } from "wagmi";
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { InjectedConnector } from "wagmi/connectors/injected";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { AppWrapper } from "../lib/modalContext";
import Layout from "../components/Layout";
import Script from "next/script";


const chains = defaultChains;
const defaultChain = chain.mainnet;

const client = createClient({
  connectors({ chainId }) {
    const chain = chains.find((x) => x.id === chainId) ?? defaultChain;
    const rpcUrl = chain.rpcUrls.default;
    return [
      new InjectedConnector({ chains, options: { name: "Injected" } }),
      new WalletConnectConnector({
        chains,
        options: {
          qrcode: true,
          infuraId: "2f983a323d7947faaf56741f89083364",
        },
      }),
      new CoinbaseWalletConnector({
        chains,
        options: {
          appName: "Addled Clubhouse",
          infuraId: "2f983a323d7947faaf56741f89083364",
        },
      }),
    ];
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <Provider client={client}>
      <Script src="https://kit.fontawesome.com/741c31a8f2.js" crossOrigin="anonymous"></Script>
      <AppWrapper>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppWrapper>
    </Provider>
  );
}

export default MyApp;
