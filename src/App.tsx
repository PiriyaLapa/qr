import { Component, ReactNode } from "react";
import { Container } from "./Components/qr-code-components";
import QrCodeCard2 from "./Components/QrCodeCard2";

export default class App extends Component {
  render(): ReactNode {
    return (
      <div>
        <Container>
          <QrCodeCard2 />
             {/* <p>Chalence by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">FrontendMentor</a> Coded by <a href="https://www.frontendmentor.io/profile/PiriyaLapa">WhoAmI</a></p> */}
        </Container>
      </div>
    );
  }
}
