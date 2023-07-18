import Veg from '../components/Veg';
import Populars from '../components/Populars';
import React from 'react';
import {motion} from 'framer-motion'

function Home() {
  return (
    <motion.div
        animate={{opacity: 1}}
        initial={{opacity: 0}}
        exit={{opacity: 0}}
        transition={{duration:.5}}
    >
        <Populars />
        <Veg />
    </motion.div>
  )
}

export default Home
