import { FaChartPie, FaChartBar, FaProjectDiagram } from "react-icons/fa";
import Card2 from "./Card2";

export default function OurValue() {
  return (
    <section className="relative text-white pt-10">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center h-95"
        style={{ backgroundImage: "url('/anotherimage.png')" }}
      ></div>

      {/* Content */}
      <div className="relative z-10 mx-auto px-4 text-center">
        <h3 className=" uppercase text-2xl font-bold tracking-wider text-white mb-2">
          Our Value
        </h3>
        <h2 className="text-2xl  font-bold mb-4">
          Join now to maximize profits and balancing risks.
        </h2>
        <p className="text-white max-w-2xl mx-auto mb-12">
          In today's fast-paced world, making smart financial decisions is more
          important than ever.
        </p>

        {/* Cards */}
        <div className="lg:flex justify-center lg:p-20 p-10    gap-10  ">
          {/* Vision */}
          <Card2
            Icon={FaChartPie}
            title="Our Vision"
            description="Our vision is to empower individuals and businesses to make confident, strategic investments that lead to growth."
          />
          {/* Mission */}
          <Card2
            Icon={FaChartBar}
            title=" Our Mission"
            description=" Our mission is to provide reliable, insightful, and
              growth-oriented investment solutions."
          />
          {/* Motto */}
          <Card2
            Icon={FaProjectDiagram}
            title="Our Motto"
            description=" Our motto is simple yet powerful: “Invest with Purpose, Grow with
              Confidence."
          />
        </div>
      </div>
    </section>
  );
}
