import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";

function About() {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64" />
        <article>
          <SectionTitle text="Code and Coffee" />
          <p className="text-slate-600 mt-8 leading-loose">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi
            perferendis, nostrum quisquam dolorem aliquid impedit ipsum eveniet
            a nulla harum deserunt vero facere culpa voluptates aut quibusdam
            doloribus laborum quae.
          </p>
        </article>
      </div>
    </section>
  );
}

export default About;
