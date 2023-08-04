import { SiEthereum, SiHiveBlockchain } from "react-icons/si";
import { MdAccountBalanceWallet } from "react-icons/md";
import { Col, Row } from "react-bootstrap";
import { WalletInterface } from "../../../assets/interfaces/WalletInterface";

export const WalletItemComponent = ({
  accounts,
  balance,
  chainId,
}: WalletInterface) => {
  return (
    <Row className="m-0 d-flex align-items-center">
      <Col xs={12} md={7} className="p-0 wallet-info-col">
        <div className="mb-4 mb-xxl-5 mt-3 d-flex justify-content-start align-items-center">
          <MdAccountBalanceWallet className="fs-3 fs-lg-2 me-3" />
          <h6 className="mb-0">Address:</h6>
          <p
            className="mb-0 ms-2 address-p"
            onClick={() => {
              navigator.clipboard.writeText(accounts[0]);
            }}
          >
            {accounts[0]}
          </p>
        </div>
        <div className="mb-4 mb-xxl-5 mt-3 d-flex justify-content-start align-items-center">
          <SiEthereum className="fs-3 fs-lg-2 me-3" />
          <h6 className="mb-0">Balance:</h6>
          <p className="mb-0 ms-2">
            {balance} <strong>ETH</strong>
          </p>
        </div>
        <div className="mb-4 mb-xxl-5 mt-3 d-flex justify-content-start align-items-center">
          <SiHiveBlockchain className="fs-3 fs-lg-2 me-3" />
          <h6 className="mb-0">ChainID:</h6>
          <p className="mb-0 ms-2">{chainId}</p>
        </div>
      </Col>
      <Col className="d-none d-md-block" md={5}>
        <svg
          version="1.0"
          id="katman_1"
          xmlns="http://www.w3.org/2000/svg"
          width={"auto"}
          height={"auto"}
          x="0px"
          y="0px"
          viewBox="0 0 800 600"
          style={{ background: "new 0 0 800 600" }}
        >
          <path
            d="M276.3,265.2v-14.6c0-5.3-3.2-10-8.1-12.1l-90.5-37.3v8.1l80.7,33.3c2.8,1.1,2.8,5.1,0,6.2l-80.7,33.3v32.5l48.6-20.1
	l32,13.2c2.8,1.1,2.8,5.1,0,6.2l-80.6,33.3v51.5l90.5-37.3c4.9-2,8.1-6.8,8.1-12.1v-33.5c0-5.3-3.2-10-8.1-12.1l-32.1-13.2
	l32.1-13.2C273.1,275.3,276.3,270.5,276.3,265.2z"
            fill="#8b8f9e"
          />
          <g>
            <path
              d="M322.3,274.1l14.2,55.3l15.9-55.3h15.2l15,55.3l14.8-55.3h11.2l-19.1,66.7h-14.2l-15.7-57.5l-16.3,57.5h-14.4l-18.5-66.7
		H322.3z"
              fill="#8b8f9e"
            />
            <path
              d="M425.7,310.7c0.4,5.5,1,8.3,2.8,11.8c3.3,6.3,10.8,10.4,18.3,10.4c9.1,0,15-4.3,17.5-12.8h12.4
		c-3.1,14.4-14,22.4-30.1,22.4c-20.1,0-32.9-13.8-32.9-35.4c0-21.1,12.8-35.2,31.9-35.2c20.3,0,31.3,13.8,31.3,38.6h-51.2V310.7z
		 M461.5,290.3c-3.1-5.3-9.4-8.5-15.9-8.5c-11.2,0-18.3,7.1-19.7,19.9h38.8C464.1,295.8,463.3,293,461.5,290.3z"
              fill="#8b8f9e"
            />
            <path
              d="M488.1,248.7h11.4v35.4c4.7-7.9,11.2-11.6,20.7-11.6c16.5,0,28.3,14.4,28.3,35s-11.2,34.6-28.2,34.6
		c-9.3,0-15.4-3.7-21.3-12.4v11h-11V248.7z M499.7,307.2c0,14.6,8.3,25.4,19.1,25.4c10.4,0,17.3-9.8,17.3-25
		c0-15.9-6.9-25.8-17.7-25.8C507.6,281.8,499.7,292.2,499.7,307.2z"
              fill="#8b8f9e"
            />
            <path
              d="M569.2,312.7c-0.2,11.8,7.3,19.5,19.1,19.5c10.6,0,18.3-6.7,18.3-15.9c0-9.4-7.3-15.2-19.1-15.2c-1.2,0-2.2,0-3.9,0.2
		v-10.2c1.4,0,2.2,0,3,0c12.2,0,19.3-5.3,19.3-14.8c0-8.9-6.9-14.6-17.3-14.6c-11.2,0-17.7,6.7-18.1,18.5h-12.2
		c0.8-18.3,12-28.9,30.5-28.9c17.1,0,29.1,9.8,29.1,24c0,9.4-6.7,18.1-15.7,20.5c11,2.8,16.9,10.2,16.9,21.3
		c0,15-12.8,25.6-30.9,25.6c-18.9,0-31.7-12.2-31.5-29.9C556.6,312.7,569.2,312.7,569.2,312.7z"
              fill="#8b8f9e"
            />
          </g>
        </svg>
      </Col>
    </Row>
  );
};