'use client';

import { motion } from 'framer-motion';

import { fadeIn } from '../utils/motion';

const InsightCard = ({ imgUrl, title, subtitle, index }) => (
  <motion.div className='flex md:flex-row flex-col gap-4' variants={fadeIn('up', 'spring', index * 0.5, 1)}>
    <img className='md:w-[270px] w-full h-[250px] rounded-[32px] object-cover' src={imgUrl} alt='planet-01' />
  </motion.div>
);

export default InsightCard;
