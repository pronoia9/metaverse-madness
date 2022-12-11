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
  </motion.div>
);

export default Footer;
