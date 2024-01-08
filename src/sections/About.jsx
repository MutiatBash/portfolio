import { Button } from "../components/Button";
import { Skills, Socials } from "../components/Skills";

const About = () => {
  return (
    <section>
      <div className="flex lg:flex-row md:flex-col mt-10 justify-between w-full items-center py-4 px-4 md:px-16">
        <div className=" flex flex-col gap-3">
          <h3 className="text-2xl lg:text-4xl mb-4 w-[65%] font-semibold lg:leading-[3.8rem]">
            About me
          </h3>
          <div className="flex flex-col gap-7">
            <p className="lg:w-[47%]">
              I'm a frontend web & mobile application developer passionate about
              building user-friendly and appealing digital products. I believe
              in making the digital space accessible to all. With a year of
              experience as a frontend developer, I've had the privilege of
              working on a wide range of projects, from e-commerce websites, to
              decentralized apps.
            </p>
            <p className="lg:w-[47%] self-end">
              My journey into web development began as a result of my curiosity
              to learn and take up new challenges. While studying psychology in
              school, I started to notice how technology played a significant
              role in understanding human behaviour and experiences.And the best
              part? I fell in love with coding.
            </p>
            <p className="lg:w-[48%]">
              The process of creating something from scratch and solving
              real-world problems using technology became my passion. There's a
              unique joy that comes from taking an idea and turning it into a
              tangible product that can potentially change lives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
