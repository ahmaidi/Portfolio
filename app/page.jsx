import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Socials from "@/components/Socials";
import Profile from "@/components/Profile";
import Stats from "@/components/Stats";
const Home = () => {
  const handleDownload = () => {
    window.open(
      "https://drive.google.com/uc?export=download&id=1qd_nRHika2_HsYCdAtqlHgzF-5xm-yag",
      "_blank"
    );
  };
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
        <div className="text-center xl:text-left order-2 xl:order-none">
          <span className="text-xl">
            Full Stack Developer
          </span>
          <h1 className="title">Hello I'm <br/><span className="text-accent">Ahmed Hmaidi</span> </h1>
          <p className="max-w-[500px] mb-9 text-white/80">I'm a passionate full stack developer who chose this field because I love it. I thrive on solving problems and find inspiration in coding. I believe in learning by doing, and every day brings new excitement as I continue to grow and improve. I've worked on numerous projects that showcase my skills and dedication, which you can explore on my GitHub.</p>
          <div className="flex flex-col xl:flex-row items-center gap-8">
            <Button variant="outline" size="lg" className="uppercase flex items-center gap-2"  onClick={handleDownload}>
              <span>
                Download CV
              </span>
              <FiDownload className="text-xl"/>
            </Button>
          
            <div className="mb-8 xl:mb-0">
            <Socials />
            </div>
          </div>
        </div>
        <div className="order-1 xl:order-none mb-8 xl:mb-0">
          <Profile />
        </div>
        </div>
      </div>
      <Stats/>
    </section>
  );
};

export default Home;
