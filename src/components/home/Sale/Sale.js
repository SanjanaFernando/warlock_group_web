import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  saleImgOne,
  saleImgTwo,
  saleImgThree,
} from "../../../assets/images/index";
import Image from "../../designLayouts/Image";

const containerVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Sale = () => {
  return (
    <motion.div
      className="py-20 flex flex-col md:flex-row items-center justify-between gap-4 lg:gap-10"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div
        className="w-full md:w-2/3 lg:w-1/2 h-full"
        variants={itemVariants}
      >
        <Link to="/shop">
          <Image className="h-full w-full object-cover" imgSrc={saleImgOne} />
        </Link>
      </motion.div>
      <motion.div
        className="w-full md:w-2/3 lg:w-1/2 h-auto flex flex-col gap-4 lg:gap-10"
        variants={itemVariants}
      >
        <motion.div className="h-1/2 w-full" variants={itemVariants}>
          <Link to="/shop">
            <Image className="h-full w-full object-cover" imgSrc={saleImgTwo} />
          </Link>
        </motion.div>
        <motion.div className="h-1/2 w-full" variants={itemVariants}>
          <Link to="/shop">
            <Image
              className="h-full w-full object-cover"
              imgSrc={saleImgThree}
            />
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Sale;
