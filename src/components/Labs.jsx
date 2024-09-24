import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import Table from "./Table";
import { labs } from "../constants/labs";

const Labs = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Labs</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        There are 6 labs in total in this class. Each will take 2-3 hours to complete.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        <Table data={labs} lecture={true}/>
      </div>
    </>
  );
};

export default SectionWrapper(Labs, "labs");
