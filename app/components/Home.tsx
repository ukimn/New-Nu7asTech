"use client";

import HomeSkills from "./HomeSkills";
import Icons from "./Icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { itemsVariants, containerVariants } from "../animations/variants";
import { HomeSkillsList } from "../data/dataCards";
import { FaInstagram, FaGithub, FaDiscord } from "react-icons/fa";
export default function Home() {
  const IconsImg = [
    { id: 1, icon: <FaInstagram /> },
    { id: 2, icon: <FaGithub /> },
    { id: 3, icon: <FaDiscord /> },
  ];

  return (
    <motion.div
      className="flex justify-between my-14 items-center max-w-[800px] mx-auto"
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
          <span className="text-[#55c996] tracking-widest leading-10 mx-4 uppercase">
            Nu7as Tech
          </span>
        </motion.h1>
        <motion.p variants={itemsVariants} className="mt-4 opacity-50">
          We are a premier web design and development company, <br />
          specializing in delivering innovative,
          <br /> customized digital solutions tailored to our clients{"'"}{" "}
          unique needs.
        </motion.p>
        <motion.div variants={itemsVariants} className="flex my-5 py-3">
          {IconsImg.map((item) => (
            <Icons icons={item.icon} key={item.id} />
          ))}
          <Link
            href="/About"
            className="rounded-lg border-[#55c996] border-[1px] duration-300 hover:bg-[#55c996] transition-colors p-2 mx-3 cursor-pointer flex items-center"
          >
            Learn More
          </Link>
        </motion.div>
        <motion.div variants={itemsVariants} className="mt-9 flex">
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
