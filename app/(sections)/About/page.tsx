"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { ParentSkillsCards } from "@/app/components/ParentSkillsCards";
import { useEffect, useRef } from "react";
import { itemsVariants, containerVariants } from "@/app/animations/variants";
import { FrontEndskills, DesignSkills } from "@/app/data/dataCards";



const AboutPage = () => {

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  const mainControls = useAnimation();

  const spanRef = useRef<HTMLSpanElement | null>(null);
  const isSpanInView = useInView(spanRef, { once: true });

  useEffect(()=>{
    if(isInView){
      mainControls.start("visible");
    }
    if(isSpanInView){
      mainControls.start("visible");
    }
  }, [isInView, mainControls, isSpanInView])

  return (
    <motion.div
      className="flex flex-col items-center justify-center mt-11"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 className="text-4xl mb-4" variants={itemsVariants}>
        About <span className="text-primary">Nu7as Tech</span>
      </motion.h1>
      <motion.hr variants={itemsVariants} className="h-[2px] w-[400px] bg-primary mb-5"/>
      <motion.div variants={itemsVariants} className="flex items-end w-[700px]">
        <motion.p variants={itemsVariants} className="text-2xl mt-5 mb-6 leading-loose">
          <span className="text-primary">Nu7as Tech </span> 
          is a skilled web development team with two years of
          experience, mastering 11 cutting-edge technologies to deliver
          high-quality digital solutions. With a team of six dedicated
          professionals, they specialize in building modern, responsive, and
          efficient web applications tailored to clients{"'"} needs. Their expertise
          ensures innovative and scalable projects that meet industry standards.
        </motion.p>
      </motion.div>
      <motion.h1 className="text-4xl mb-4">Skills <span className="text-primary">& Abilities</span></motion.h1>
      <motion.hr variants={itemsVariants} className={`h-[2px] w-[400px] bg-primary mb-5`}/>
      <motion.div className="grid grid-cols-2 items-center justify-evenly">
        <motion.div ref={containerRef} animate={mainControls} initial="hidden" variants={{
          hidden: {opacity: 0, y: 75},
          visible: {opacity: 1, y: 0}
        }}
        transition={{delay: 0.3}}
        >
          <ParentSkillsCards heading="Frontend Skills" listOfItems={FrontEndskills}/>
        </motion.div>
        <motion.div animate={mainControls} initial="hidden" variants={{
          hidden: {opacity: 0, y: 75},
          visible: {opacity: 1, y: 0}
        }} ref={containerRef}>
          <ParentSkillsCards heading="Design Skills" listOfItems={DesignSkills}/>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default AboutPage;
