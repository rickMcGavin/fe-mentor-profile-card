import Head from "next/head";
import BgPatternTop from "../src/components/svg/BgPatternTop";
import BgPatternBottom from "../src/components/svg/BgPatternBottom";
import CardContainer from "../src/components/CardContainer";
import Card from '../src/components/Card';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Profile Card Component</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main>
        <CardContainer>
          <Card />
        </CardContainer>
      </main>
    </div>
  );
}
