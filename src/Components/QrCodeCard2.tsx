import { Component, ReactNode } from "react";
import {ImageQR, CardQR, ContentBox, QrBox } from "./qr-code-components";
import styled from "styled-components";
import ovalImg from "../img/OvalImage.png";
import qrUrl from '../img/qr-code.png';
const CardQR2 = styled(CardQR)`
  position: relative;
  margin: auto 0;
`;

const QrBox2 = styled(QrBox)`
    background-image:url(${ovalImg});
    background-size:cover;
`

export default class QrCodeCard2 extends Component {
  render(): ReactNode {
    return (
      <div>
        <CardQR2>
        <QrBox2>
            <ImageQR imgUrl={qrUrl} />
        </QrBox2>
        </CardQR2>
      </div>
    );
  }
}
