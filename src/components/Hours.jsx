import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const Hours = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`my-4 bg-tertiary rounded-2xl sm:px-16 px-6 py-2`}
      >
        <motion.div variants={textVariant()}>
          <h2 className={styles.sectionHeadText}>Hours</h2>
        </motion.div>
        <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mb-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Hours are subject to change.
        </motion.p>
      </div>
      <div 
        className={`mt-10 pb-14 ${styles.paddingX} flex justify-center items-center`}
      >
        <iframe 
          src="https://calendar.google.com/calendar/embed?src=c_c85142ba8e9a3a2ff06fdc60a7e53859ccaa142b31efa630a097a1ef5cf65553%40group.calendar.google.com&ctz=America%2FNew_York" 
          style={{width: "130vh", height: "100vh", maxHeight: "600px", borderRadius: "10px"}} 
          title="Google Calendar"
        ></iframe>      
      </div>
    </div>
  );
};

export default SectionWrapper(Hours, "hours");
