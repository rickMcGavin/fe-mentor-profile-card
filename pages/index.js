import Head from 'next/head'
import BgPattern from '../src/components/svg/BgPattern';
import BgPatternTop from '../src/components/svg/BgPatternTop';
import BgPatternBottom from '../src/components/svg/BgPatternBottom';
import { USER } from '../src/constants';
const { name, age, city, social, image } = USER;

export default function Home() {
  return (
    <div>
      <Head>
        <title>Profile Card Component</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap" rel="stylesheet"/ >
      </Head>

      <main>
        <BgPatternTop />
        <div className="container">
          <div className="card">
            <BgPattern className="bg-pattern" />
            <div className="image-container">
              <img src={image} alt="Profile picture"/>
            </div>
            <div className="info-container">
              <div>
                <span className="name">{name} </span>
                <span className="age">{age}</span>
              </div>
              <div className="city">{city}</div>
            </div>
            <div className="social">
            {social.map(({ label, count }) => (
              <div key={label} className="social__stat">
                <div className="social__num">{count}K</div>
                <div className="social__label">{label}</div>
              </div>
            ))}
            </div>
          </div>
        </div>
        <BgPatternBottom />
      </main>

    </div>
  )
}
