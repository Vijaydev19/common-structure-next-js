import { FC } from "react";

import { Container, FallBackImage, Paragraph, Title } from "@/src/components/common";

const Home: FC = () => (
  <Container backgroundClassName="bg-black" className="p-10 text-white">
    <Container className="px-10">
      <div className="flex flex-wrap gap-5 items-center justify-between">
        <Title className="" level={1} title="h1" />
        <Title className="" level={2} title="h2" />
        <Title className="" level={3} title="h3" />
        <Title className="" level={4} title="h4" />
        <Title className="" level={5} title="h5" />
        <Title className="" level={6} title="h6" />
      </div>
    </Container>
    <Container className="bg-white flex justify-center p-10 gap-10">
      <FallBackImage
        alt="Fallback Image"
        fetchPriority="high"
        height={500}
        src="/next.svg"
        width={500}
      />
      <FallBackImage
        alt="Fallback Image"
        fetchPriority="high"
        height={500}
        src="/xyz.png"
        width={500}
      />
    </Container>
    <Container className="flex justify-center p-10 gap-10">
      <Paragraph description="Large Font Size Paragraph" variant="large" />
      <Paragraph description="Medium Font Size Paragraph" variant="medium" />
      <Paragraph description="Small Font Size Paragraph" variant="small" />
      <Paragraph>
        <span className="text-blue-800">Paragraph With Children</span>{" "}
        <span className="text-emerald-400">Paragraph With Children</span>
      </Paragraph>
    </Container>
    <Container className="flex flex-wrap gap-5 items-center px-10">
      <Container as="section">Container By Default Section Tag</Container>
      <Container as="div">Container As Div Tag</Container>
      <Container as="footer">Container As Footer Tag</Container>
      <Container as="header">Container As Header Tag</Container>
    </Container>
  </Container>
);

export default Home;
