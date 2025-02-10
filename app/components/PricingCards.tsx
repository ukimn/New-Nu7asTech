import { PricingCardsProps } from "../types/app";
import { formatPrice } from "../functions/numberFormat";
import { IoIosCheckmarkCircle } from "react-icons/io";
import Link from 'next/link';
import { motion } from "framer-motion";

const itemsVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export const PricingCard = ({ heading, features, price }: PricingCardsProps) => {
  return (
    <motion.div variants={itemsVariants} whileHover={{ scale: 1.05 }} className="flex flex-col items-center text-center border border-gray-200 shadow-md py-6 px-6 rounded-xl transition-transform duration-500 hover:-translate-y-3 hover:shadow-lg w-full sm:w-80 bg-white mb-5">
      {/* Heading */}
      <h1 className="text-3xl font-semibold text-[#55c996] mb-7">{heading}</h1>

      {/* Features List */}
      <ul className="text-gray-600 text-lg space-y-2 mb-6 w-auto">
        {features.map((item) => (
          <li key={item} className="flex items-center gap-2 text-md">
            <IoIosCheckmarkCircle/> {item}
          </li>
        ))}
      </ul>

      {/* Price */}
      <p className="text-2xl font-bold text-gray-900">{formatPrice(price)}</p>

      {/* Button */}
      <Link href={"/Contact"} className="mt-4 px-6 py-2 text-white bg-[#55c996] rounded-lg hover:bg-[#48b081] transition-all duration-300">
        Choose Plan
      </Link>
    </motion.div>
  );
};

