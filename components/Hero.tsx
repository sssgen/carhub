"use client"
import Link from "next/link";
import Image from "next/image";
import CustomButton from "@/components/CustomButton";
import { motion } from "framer-motion";
import { carImageSlide, textSlide } from "@constants/framerAnimations";

const Hero = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="hero"
    >
      <div className="flex-1 pt-36 padding-x">
        <motion.h1
          className="hero__title"
          variants={textSlide}
          custom={1}
        >
          Find, book, rent a car—quick and super easy!
        </motion.h1>

        <motion.p
          custom={1.5}
          variants={textSlide}
          className="hero__subtitle"
        >
          Streamline your car rental experience with our effortless booking
          process.
        </motion.p>
        <motion.div
          variants={textSlide}
          className="w-fit h-fit"
          custom={1}
        >
          <Link href="/cars">
            <CustomButton
              title="Explore Cars"
              containerStyles="text-white rounded-full mt-10"
            />
          </Link>
        </motion.div>
      </div>
      <div className="hero__image-container">
        <motion.div
          className="hero__image"
          variants={carImageSlide}
          custom={1.8}
        >
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </motion.div>

        <motion.div className="hero__image-overlay"
          variants={carImageSlide}
          custom={1.3}
        />
      </div >
    </motion.div >
  );
};

export default Hero;
