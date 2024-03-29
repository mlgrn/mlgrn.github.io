import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import { Skill as SkillType } from "../typings";

type Props = {
  skills: SkillType[];
};

function Skills({ skills }: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        x: 0,
        opacity: 1,
      }}
      transition={{ duration: 1 }}
      className="h-screen flex relative flex-col text-center md:text-left 
    xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-20 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Tech Skills
      </h3>

      <div className="grid grid-cols-4 md:grid-cols-5 gap-5 p-2 pt-12 ">
        {skills?.slice(0, skills.length / 2).map((skill) => (
          <Skill key={skill._id} skill={skill} />
        ))}

        {skills?.slice(skills.length / 2, skills.length).map((skill) => (
          <Skill key={skill._id} skill={skill} directionLeft />
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;
