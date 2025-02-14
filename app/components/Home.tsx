"use client";

import HomeSkills from "./HomeSkills";
import Icons from "./Icons";
import { motion } from "framer-motion";
import { itemsVariants, containerVariants } from "../animations/variants";
import { HomeSkillsList } from "../data/Data";
import { FaInstagram, FaGithub, FaDiscord } from "react-icons/fa";
import Nu7asTech from "../../public/Nu7astech.png";
import Image from "next/image";

export default function Home() {
  const IconsImg = [
    { id: 1, icon: <FaInstagram />, ref: "https://www.instagram.com/n7.tech/" },
    { id: 2, icon: <FaGithub />, ref: "" },
    { id: 3, icon: <FaDiscord />, ref: "" },
  ];

  return (
    <motion.div className="flex items-center justify-center w-full px-4 sm:px-6 lg:px-8">
      <motion.div
        className="flex flex-col md:flex-row justify-between items-center my-14 max-w-[1200px] mx-auto text-center md:text-left"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Text and Icons Section - Positioned on the left */}
        <motion.div className="md:flex-1 md:pr-8">
          <motion.p
            variants={itemsVariants}
            className="opacity-65 text-sm md:text-base"
          >
            Tech Team
          </motion.p>
          <motion.h1 variants={itemsVariants} className="text-3xl md:text-4xl">
            Hello, We{"'"}re
            <br />
            <span className="text-primary tracking-widest leading-10 mx-4 uppercase">
              Nu7as Tech
            </span>
          </motion.h1>
          <motion.p
            variants={itemsVariants}
            className="mt-4 opacity-50 text-sm md:text-base"
          >
            We are a premier web design and development company, <br />
            specializing in delivering innovative,
            <br /> customized digital solutions tailored to our clients{
              "'"
            }{" "}
            unique needs.
          </motion.p>
          <motion.div
            variants={itemsVariants}
            className="flex flex-wrap justify-center md:justify-start my-5 py-3"
          >
            {IconsImg.map((item) => (
              <Icons icons={item.icon} key={item.id} ref={item.ref} />
            ))}
          </motion.div>
          <motion.div
            variants={itemsVariants}
            className="mt-9 flex w-auto justify-center md:justify-start flex-wrap"
          >
            {HomeSkillsList.map((item) => (
              <HomeSkills number={item.number} key={item.number}>
                {item.children}
              </HomeSkills>
            ))}
          </motion.div>
        </motion.div>
        
        {/* Image Section - Positioned on the right and aligned parallel to the content */}
        <motion.div className="md:flex-shrink-0 mt-8 md:mt-0">
          <Image
            src={Nu7asTech}
            alt="Nu7asTech"
            height={300}
            width={300}
            className="rounded-lg w-full max-w-[300px] md:max-w-none"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}