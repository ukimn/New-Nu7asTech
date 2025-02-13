"use client";

import HomeSkills from "./HomeSkills";
import Icons from "./Icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { itemsVariants, containerVariants } from "../animations/variants";
import { HomeSkillsList } from "../data/Data";
import { FaInstagram, FaGithub, FaDiscord } from "react-icons/fa";

export default function Home() {
  const IconsImg = [
    { id: 1, icon: <FaInstagram /> },
    { id: 2, icon: <FaGithub /> },
    { id: 3, icon: <FaDiscord /> },
  ];

  return (
    <motion.div
      className="flex flex-col md:flex-row justify-between my-14 items-center max-w-[800px] mx-auto px-4 text-center md:text-left"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div>
        <motion.p variants={itemsVariants} className="opacity-65">
          Tech Team
        </motion.p>
        <motion.h1 variants={itemsVariants} className="text-4xl">
          Hello, We{"'"}re
          <br />
          <span className="text-primary tracking-widest leading-10 mx-4 uppercase">
            Nu7as Tech
          </span>
        </motion.h1>
        <motion.p variants={itemsVariants} className="mt-4 opacity-50">
          We are a premier web design and development company, <br />
          specializing in delivering innovative,
          <br /> customized digital solutions tailored to our clients{"'"}{" "}
          unique needs.
        </motion.p>
        <motion.div
          variants={itemsVariants}
          className="flex flex-wrap justify-center md:justify-start my-5 py-3"
        >
          {IconsImg.map((item) => (
            <Icons icons={item.icon} key={item.id} />
          ))}
          <Link
            href="/About"
            className="rounded-lg border-primary border-[1px] duration-300 hover:bg-[#48b081] transition-colors p-2 mx-3 cursor-pointer flex items-center"
          >
            Learn More
          </Link>
        </motion.div>
        <motion.div
          variants={itemsVariants}
          className="mt-9 flex flex-wrap justify-center md:justify-start"
        >
          {HomeSkillsList.map((item) => (
            <HomeSkills number={item.number} key={item.number}>
              {item.children}
            </HomeSkills>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
