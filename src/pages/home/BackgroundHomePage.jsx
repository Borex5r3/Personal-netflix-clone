import BG_HOMEPAGE from "/src/assets/bg-homepage.jpeg";
import Footer from "./Footer";
import FrequentQuestions from "./FrequentQuestions";
import MembershipSignup from "./MembershipSignup";
import NavBar from "./NavBar";

const BackgroundHomePage = () => {
  const gradientEffect =
    "bg-gradient-to-top from-black via-transparent to-black";

  return (
    <div className="relative w-full min-w-[280px] h-full flex">
      <img src={BG_HOMEPAGE} alt="" className="object-cover h-full w-full" />
      <div className="absolute w-full h-full bg-black bg-opacity-40"></div>
      <div
        className={`absolute w-full h-full`}
        style={{
          backgroundImage:
            "linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%)",
        }}
      ></div>
    </div>
  );
};

export default BackgroundHomePage;
