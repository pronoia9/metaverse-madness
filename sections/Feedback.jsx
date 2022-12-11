'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { fadeIn, staggerContainer, zoomIn } from '../utils/motion';

const Feedback = () => (
  <motion.div
    className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
    variants={staggerContainer}
    initial='hidden'
    whileInView='show'
    viewport={{ once: false, amount: 0.25 }}>
    <motion.div
      className='flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative'
      variants={fadeIn('right', 'tween', 0.2, 1)}>
      <div className='feedback-gradient' />
    </motion.div>
  </motion.div>
);

export default Feedback;
