import React from "react";
import EducationCard from "../components/education/EducationCard";

const Education = () => (
  <section className="bg-black text-white flex flex-col justify-center items-center min-h-screen mt-20 ">
    {/* <h2 className="text-4xl font-bold m-12">EDUCATION</h2> */}
    <div className="space-y-4 py-4 justify-center flex flex-col gap-">
      
        <EducationCard />
      
    </div>
  </section>
);

export default Education;