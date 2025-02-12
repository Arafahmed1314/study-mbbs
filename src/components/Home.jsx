import Navbar from "./Navbar";
import Hero from "./Hero";
import TopCountry from "./country/TopCountry";
import Benifits from "./Benefits";
import Process from "./step_for_applying/Process";
import Applying from "./callToAction/CallToAction";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Benifits />
      <TopCountry />
      <Process />
      <Applying />
    </>
  );
}
