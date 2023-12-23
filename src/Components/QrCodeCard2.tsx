import { Component, ReactNode } from "react";
import { ImageQR, CardQR, ContentBox, QrBox } from "./qr-code-components";
import styled from "styled-components";
import ovalImg from "../img/OvalImage.png";
import qrUrl from "../img/qr-code.png";
import { data } from "../Data/data";
const CardQR2 = styled(CardQR)`
  position: relative;
  margin: auto 0;
`;

const QrBox2 = styled(QrBox)`
  background-image: url(${ovalImg});
  background-size: cover;
`;
interface ContentBoxProps {
  topic: string;
  content: string;
}

class ContentBox2 extends Component<ContentBoxProps> {
  render(): ReactNode {
    const { topic, content } = this.props;
    return (
      <ContentBox>
        <h1>{topic}</h1>
        <p>{content}</p>
      </ContentBox>
    );
  }
}

export default class QrCodeCard2 extends Component {
  render(): ReactNode {
    return (
      <div>
        <CardQR2>
          <QrBox2>
            <ImageQR imgUrl={qrUrl} />
          </QrBox2>
          <ContentBox2 topic={data.topic} content={data.content} />
        </CardQR2>
      </div>
    );
  }
}
