import { Helmet } from "react-helmet-async";
import Header from "../../layout/Header";
import WelcomeSection from "../../components/WelcomeSection";
import Testimonials from "../../components/Testimonials";
import OurServices from "../../components/OurServices";
import OurMenu from "../../components/OurMenu";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <Header/>
      <WelcomeSection/>
      <Testimonials/>
      <OurServices/>
      <OurMenu/>
    </>
  );
};

export default Home;
