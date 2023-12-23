import { Component, ReactNode } from "react";
// import QrCode from "./Components/qr-code-components";
import { Container } from "./Components/qr-code-components";
import QrCodeCard2 from './Components/QrCodeCard2';
export default class App extends Component {
  render(): ReactNode {
    return (
      <div>
        <Container>
        <QrCodeCard2 /> 
        </Container>
      </div>
    );
  }
}