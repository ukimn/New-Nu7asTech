"use client";

import { PricingCard } from "@/app/components/PricingCards";
import { motion } from "framer-motion";
import { itemsVariants, containerVariants } from "@/app/animations/variants";
import { PricingCards } from "@/app/data/Data";

const PricingPage = () => {
  const isReady = false;
  return (
    <>
      {isReady ? (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-center justify-center justify-items-center mt-20 h-auto max-w-[1000px] mx-auto px-4"
        >
          {PricingCards.map((card, index) => {
            return (
              <PricingCard
                key={index}
                heading={Object.values(card)[0].heading}
                features={Object.values(card)[0].features}
                price={Object.values(card)[0].price}
              />
            );
          })}
        </motion.div>
      ) : (
        <motion.div
          className="flex justify-center items-center h-screen flex-col text-center px-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 variants={itemsVariants} className="text-6xl my-6">
            Comming Soon...!
          </motion.h1>
          <motion.p variants={itemsVariants} className="text-2xl my-6">
            We{"'"}re working on our performance and will be back soon
          </motion.p>
          <motion.h3 variants={itemsVariants} className="text-3xl my-6">
            Sorry❤️
          </motion.h3>
        </motion.div>
      )}
    </>
  );
};

export default PricingPage;
