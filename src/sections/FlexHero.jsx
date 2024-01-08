import { Button } from "../components/Button";
import { Skills, Socials } from "../components/Skills";

const FlexHero = () => {
  return (
    <section>
      <div className="flex lg:flex-row md:flex-col mt-10 justify-between w-full items-center py-4 px-4 md:px-16">
        <div className=" w-[60%] flex flex-col gap-3">
          <h1 className="lg:text-6xl mb-4 w-[65%] font-semibold lg:leading-[3.8rem]">
            Hi, I'm Mutiat. A frontend web / mobile applications developer
          </h1>
          <p className="mb-4 w-[70%]">
            I'm Mutiat, a frontend web / mobile applications developer
            passionate about building user-friendly and appealing digital
            products.I'm not just a developer - I'm a designer. I believe that
            good design is key to creating websites that not only work
            seamlessly but look appealing.
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

export default FlexHero;
