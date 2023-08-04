import { Button, Col, Container, Row } from "react-bootstrap";
import Logo from "./../../assets/images/showcase_logo.svg";
import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Link } from "react-router-dom";
import { formatChainAsNum } from "../../utils/index";
import { SiEthereum, SiHiveBlockchain } from "react-icons/si";
import { WhileConnectingInterface } from "../../assets/interfaces/WhileConnectingInterface";
import { WalletInterface } from "../../assets/interfaces/WalletInterface";

interface NavbarProps {
  loggedIn: boolean;
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  hasProvider: boolean | null;
  wallet: WalletInterface;
  setWallet: React.Dispatch<React.SetStateAction<WalletInterface>>;
  handleWallet: (accounts: any) => Promise<void>;
  whileConnecting: WhileConnectingInterface;
  setWhileConnecting: React.Dispatch<
    React.SetStateAction<WhileConnectingInterface>
  >;
}

export const NavbarComponent = ({
  loggedIn,
  setLoggedIn,
  hasProvider,
  wallet,
  setWallet,
  handleWallet,
  whileConnecting,
  setWhileConnecting,
}: NavbarProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const initialState = { accounts: [], balance: "", chainId: "" };
  const itemVariants: Variants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  };

  const walletConnection = async () => {
    setWhileConnecting({
      ...whileConnecting,
      isConnecting: true,
    });
    await window.ethereum
      .request({
        method: "eth_requestAccounts",
      })
      .then((accounts: []) => {
        setWhileConnecting({
          ...whileConnecting,
          error: false,
        });
        handleWallet(accounts);
      })
      .catch((error: any) => {
        setWhileConnecting({
          ...whileConnecting,
          error: true,
          errorMessage: error.message,
        });
        setWhileConnecting({
          ...whileConnecting,
          isConnecting: false,
        });
      });
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setWallet(initialState);
    setWhileConnecting({
      isConnecting: false,
      error: false,
      errorMessage: "",
    });
  };

  return (
    <Container fluid className="p-0 navbar-custom">
      <Row className="m-0">
        <Col xs={12} className="bg-dark py-3 px-0">
          <Row className="m-0 d-flex justify-content-between">
            <Col
              xs={4}
              className="d-flex align-items-center pe-0 nav-logo-column"
            >
              <Link to="/homepage">
                <img src={Logo} alt="Custom Logo Ale Onta" />
              </Link>
            </Col>
            <Col className="d-flex align-items-center justify-content-end ms-4">
              <ul className="d-flex align-items-center justify-content-around justify-content-md-end text-light list-unstyled m-0 nav-link-list">
                <li className="me-md-5 text-uppercase">
                  <Link className="nav-link" to="/homepage">
                    Home
                  </Link>
                </li>
                <li className="me-md-5 text-uppercase">
                  <Link className="nav-link" to="/my-resume">
                    My CV
                  </Link>
                </li>
                {!loggedIn ? (
                  <li className="me-md-5 position-relative login-btn-container">
                    <Button
                      className="login-btn rounded-pill text-uppercase px-2 py-1 px-md-3"
                      disabled={hasProvider ? !hasProvider : true}
                      onClick={walletConnection}
                    >
                      Connect
                    </Button>
                    {!hasProvider && (
                      <span className="position-absolute rounded mt-2 px-3 py-2 login-alert">
                        {`No wallet detected...\n
                          Please install MetaMask Chrome's extension to correctly proceed with the login.`}
                      </span>
                    )}
                  </li>
                ) : (
                  <motion.li
                    className="me-md-5 text-dark position-relative logged-in-list-item"
                    initial={false}
                    animate={isOpen ? "open" : "closed"}
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <motion.div
                      className="logged-in-btn position-relative"
                      whileTap={{ scale: 0.9, transition: { duration: 0.1 } }}
                    >
                      <span className="position-absolute logged-in-char">
                        A
                      </span>
                    </motion.div>
                    <motion.ul
                      className="position-absolute list-unstyled user-list bg-dark text-light px-3 py-2 "
                      variants={{
                        open: {
                          clipPath: "inset(0% 0% 0% 0% round 10px)",
                          transition: {
                            type: "spring",
                            bounce: 0,
                            duration: 0.7,
                            delayChildren: 0.3,
                            staggerChildren: 0.05,
                          },
                        },
                        closed: {
                          clipPath: "inset(10% 50% 90% 50% round 10px)",
                          transition: {
                            type: "spring",
                            bounce: 0,
                            duration: 0.3,
                          },
                        },
                      }}
                      style={{ pointerEvents: isOpen ? "auto" : "none" }}
                    >
                      <motion.li
                        className="rounded mt-2 p-2 text-uppercase d-flex align-items-center"
                        variants={itemVariants}
                      >
                        <h6 className="p-0 m-0 li-title me-2">Address:</h6>
                        <span className="wallet-value address">
                          {wallet.accounts[0]}
                        </span>
                      </motion.li>

                      <motion.li
                        className="rounded mt-2 p-2 text-uppercase d-flex align-items-center"
                        variants={itemVariants}
                      >
                        <h6 className="p-0 m-0 li-title">
                          <SiEthereum className="eth-icon me-2" />
                        </h6>
                        <span className="wallet-value">
                          {wallet.balance} ETH
                        </span>
                      </motion.li>

                      <motion.li
                        className="rounded mt-2 p-2 text-uppercase d-flex align-items-center"
                        variants={itemVariants}
                      >
                        <h6 className="p-0 m-0 li-title">
                          <SiHiveBlockchain className="eth-icon me-2" />
                        </h6>
                        <span className="wallet-value">
                          {formatChainAsNum(wallet.chainId)}
                        </span>
                      </motion.li>

                      <motion.li
                        className="rounded mt-2 p-2 text-uppercase d-flex align-items-center"
                        variants={itemVariants}
                      >
                        <h6 className="p-0 m-0 li-title">
                          <Link className="nav-link" to="/private-area">
                            Private Area
                          </Link>
                        </h6>
                      </motion.li>

                      <motion.li
                        className="mt-0 p-0 pb-2 text-uppercase li-btn-logout"
                        variants={itemVariants}
                      >
                        <Button
                          className="logout-btn mt-2"
                          onClick={() => handleLogout()}
                        >
                          Logout
                        </Button>
                      </motion.li>
                    </motion.ul>
                  </motion.li>
                )}
              </ul>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
