import { Variants, easeInOut } from "framer-motion";

export const textSlide: Variants = {
    hidden: {
        opacity: 0,
        x: -800,
    },
    visible: (custom) => ({
        opacity: 1,
        x: 0,
        transition: {
            duration: custom ? custom * 0.6 : 0.6,
            ease: easeInOut,
        },
    }),
};

export const carImageSlide: Variants = {
    hidden: {
        opacity: 0,
        x: 800,
    },
    visible: (custom) => ({
        opacity: 1,
        x: 0,
        transition: {
            duration: custom ? custom * 0.6 : 0.6,
            ease: easeInOut,
        },
    }),
};

export const cardAppearance: Variants = {
    hidden: {
        opacity: 0,
        y: -10,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            ease: easeInOut,
        },
    },
};