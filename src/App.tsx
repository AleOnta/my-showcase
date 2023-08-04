import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import { NavbarComponent } from "./components/navbar/NavbarComponent";
import { HomepageComponent } from "./components/homepage/HomepageComponent";
import { FooterComponent } from "./components/footer/FooterComponent";
import { ResumePageComponent } from "./components/my_resume_page/ResumePageComponent";
import { RedirectComponent } from "./components/redirect/RedirectComponent";
import data from "./assets/content/Placeholder.json";
import { useState, useEffect } from "react";
import { PrivateAreaComponent } from "./components/private_area/PrivateAreaComponent";
import detectEthereumProvider from "@metamask/detect-provider";
import { formatBalance } from "./utils";
import { WhileConnectingInterface } from "./assets/interfaces/WhileConnectingInterface";
import { WalletInterface } from "./assets/interfaces/WalletInterface";

function App() {
  const initialState = { accounts: [], balance: "", chainId: "" };
  const [wallet, setWallet] = useState<WalletInterface>(initialState);
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [hasProvider, setHasProvider] = useState<boolean | null>(null);
  const [whileConnecting, setWhileConnecting] =
    useState<WhileConnectingInterface>({
      isConnecting: false,
      error: false,
      errorMessage: "",
    });

  const handleWallet = async (accounts: any) => {
    const balance = formatBalance(
      await window.ethereum!.request({
        method: "eth_getBalance",
        params: [accounts[0], "latest"],
      })
    );
    const chainId = await window.ethereum!.request({
      method: "eth_chainId",
    });
    setWallet({ accounts, balance, chainId });
  };

  useEffect(() => {
    if (wallet.accounts.length > 0) {
      setLoggedIn(true);
    }
  }, [wallet]);

  useEffect(() => {
    sessionStorage.setItem("about_me", JSON.stringify(data.about_me));
    sessionStorage.setItem("info_contacts", JSON.stringify(data.info_contacts));
    sessionStorage.setItem("educations", JSON.stringify(data.educations));
    sessionStorage.setItem("experiences", JSON.stringify(data.experiences));

    const refreshAccounts = (accounts: any) => {
      if (accounts.length > 0) {
        handleWallet(accounts);
      } else {
        setWallet(initialState);
      }
    };

    const refreshChain = (chainId: any) => {
      setWallet((wallet) => ({ ...wallet, chainId: chainId }));
    };

    const getProvider = async () => {
      const provider = await detectEthereumProvider({ silent: true });
      setHasProvider(Boolean(provider));

      if (provider) {
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });
        refreshAccounts(accounts);
        window.ethereum.on("accountsChanged", refreshAccounts);
        window.ethereum.on("chainChanged", refreshChain);
      }
    };

    getProvider();

    return () => {
      if (hasProvider) {
        window.ethereum.removeListener("accountsChanged", refreshAccounts);
        window.ethereum.removeListener("chainChanged", refreshChain);
      }
    };
  }, []);

  return (
    <Container fluid className="p-0 h-100">
      {/*Navbar Component*/}
      <NavbarComponent
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
        hasProvider={hasProvider}
        wallet={wallet}
        setWallet={setWallet}
        handleWallet={handleWallet}
        whileConnecting={whileConnecting}
        setWhileConnecting={setWhileConnecting}
      />
      <Container className="body-container">
        <Routes>
          {/*Various Routes*/}
          <Route path="/" element={<RedirectComponent />} />
          <Route path="/homepage" element={<HomepageComponent />} />
          <Route path="/my-resume" element={<ResumePageComponent />} />
          <Route
            path="/private-area"
            element={
              <PrivateAreaComponent loggedIn={loggedIn} wallet={wallet} />
            }
          />
        </Routes>
      </Container>
      <FooterComponent />
    </Container>
  );
}

export default App;
