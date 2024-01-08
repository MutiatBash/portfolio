import { Button } from "../components/Button";
import { Skills, Socials } from "../components/Skills";

const Hero = () => {
  return (
    <section>
      <div className="flex flex-col mt- justify-between w-full items-center py-4 px-4 md:px-16 lg:py-12">
        <div className=" flex flex-col items-center text-center gap-3">
          <p className="font-semibold text-[1.5rem]"> Hi, I'm Mutiat.</p>
          <h1 className="lg:text-6xl mb-4 w-[65%] font-semibold lg:leading-[3.8rem]">
            Frontend & Mobile App Developer
          </h1>
          <p className="mb-4 w-[65%]">
            I'm not just a developer - I'm a designer. I believe that good
            design is key to creating websites that not only work seamlessly but
            look appealing.
          </p>
          <div className="flex flex-row gap-8 items-center">
            <Socials />
            <Button text={"Get in touch"} className="text-white"></Button>
          </div>
        </div>
      </div>
      <Skills />
    </section>
  );
};

export default Hero;
