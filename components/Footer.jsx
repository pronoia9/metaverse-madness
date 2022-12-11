'use client';

import { motion } from 'framer-motion';
import { socials } from '../constants';

import styles from '../styles';
import { footerVariants } from '../utils/motion';


const Footer = () => (
  <motion.div
    className={`${styles.xPaddings} py-8 relative`}
    variants={footerVariants}
    initial='hidden'
    whileInView='show'>
    <div className='footer-gradient' />

    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className='flex items-center justify-between flex-wrap gap-5'>
        <h4 className='font-bold md:text-[64px] text-[44px] text-white'>Enter the Metaverse</h4>
      </div>
    </div>
  </motion.div>
);

export default Footer;
