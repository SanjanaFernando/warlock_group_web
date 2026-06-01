import React from "react";
import { motion } from "framer-motion";

import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineLabelImportant } from "react-icons/md";
import Image from "../../designLayouts/Image";
import Badge from "./Badge";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/WARLOCKSlice";

const cardVariants = {
  rest: {
    y: 0,
    scale: 1,
    boxShadow: "0 12px 28px rgba(17, 24, 39, 0.08)",
  },
  hover: {
    y: -10,
    scale: 1.03,
    boxShadow: "0 24px 56px rgba(17, 24, 39, 0.18)",
    transition: { duration: 0.25, ease: "easeOut" },
  },
};

const imageVariants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.08,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

const panelVariants = {
  rest: { y: 16, opacity: 0.85 },
  hover: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.25, ease: "easeOut" },
  },
};

const Product = (props) => {
  const dispatch = useDispatch();
  const _id = props.productName;
  const idString = (_id) => {
    return String(_id).toLowerCase().split(" ").join("");
  };
  const rootId = idString(_id);

  const navigate = useNavigate();
  const productItem = props;
  const handleProductDetails = () => {
    navigate(`/product/${rootId}`, {
      state: {
        item: productItem,
      },
    });
  };
  return (
    <motion.div
      className="w-full relative group"
      initial="rest"
      animate="rest"
      whileHover="hover"
      variants={cardVariants}
    >
      <div className="max-w-80 max-h-80 relative overflow-hidden rounded-t-lg">
        <motion.div variants={imageVariants} className="h-full w-full">
          <Image className="w-full h-full object-cover" imgSrc={props.img} />
        </motion.div>
        <div className="absolute top-6 left-8">
          {props.badge && <Badge text="New" />}
        </div>
        <motion.div
          className="w-full h-20 absolute bg-white -bottom-[130px] group-hover:bottom-0 duration-700"
          variants={panelVariants}
        >
          <ul className="w-full h-full flex flex-col items-start justify-center gap-2 font-titleFont px-2 border-l border-r">
            <motion.li
              onClick={() =>
                dispatch(
                  addToCart({
                    _id: props._id,
                    name: props.productName,
                    quantity: 1,
                    image: props.img,
                    badge: props.badge,
                    price: props.price,
                    colors: props.color,
                  }),
                )
              }
              className="text-[#4B5563] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-start gap-2 hover:cursor-pointer pb-1 duration-300 w-full"
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="mr-2">
                <FaShoppingCart />
              </span>
              Add to Cart
            </motion.li>
            <motion.li
              onClick={handleProductDetails}
              className="text-[#4B5563] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-start gap-2 hover:cursor-pointer pb-1 duration-300 w-full"
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-lg mr-2">
                <MdOutlineLabelImportant />
              </span>
              View Details
            </motion.li>
          </ul>
        </motion.div>
      </div>
      <div className="max-w-80 py-6 flex flex-col gap-1 border-[1px] border-t-0 px-4">
        <div className="flex items-center justify-between font-titleFont">
          <h2 className="text-lg text-primeColor font-bold">
            {props.productName}
          </h2>
          <p className="text-[#4B5563] text-[14px]">${props.price}</p>
        </div>
        <div>
          <p className="text-[#4B5563] text-[14px]">{props.color}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Product;
