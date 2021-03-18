import Head from "next/head";
import CardContainer from "../src/components/CardContainer";
import Card from '../src/components/Card';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Profile Card Component</title>
      </Head>

      <main>
        <CardContainer>
          <Card />
        </CardContainer>
      </main>
    </div>
  );
}
