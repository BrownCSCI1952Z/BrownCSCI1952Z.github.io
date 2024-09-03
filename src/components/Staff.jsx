import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Staff = () => {
 
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden w-screen`}
    >
      <motion.div
        variants={slideIn("up", "tween", 0.1, 0.2)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <h3 className={styles.sectionHeadText}>Staff</h3>
        <div>
          <div>
            <b className="font-semibold">Professor: </b>
            <a target="_blank" href="mailto:eric_ewing@brown.edu">eric_ewing@brown.edu</a>
          </div>
          <div>
            <b className="font-semibold">Professor and HTAs:</b>
            <a target="_blank" href="mailto:cs1952zheadtas@lists.brown.edu">cs1952zheadtas@lists.brown.edu</a>
          </div>
          <div>
            <b className="font-semibold">All TAs:</b>
            <a target="_blank" href="mailto:cs1952ztas@lists.brown.edu">cs1952ztas@lists.brown.edu</a>
          </div>
          <div className="italic">
            Do not email sensitive information, including Health Services
            &amp; Dean's Notes, to any HTAs, UTAs, or STAs.
          </div>
        </div>
        <div className="xs:grid-cols-2 grid w-full grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex flex-col gap-2 p-16 pb-0">
            <h3 className="text-2xl font-medium">Professor</h3>
            <div className="frosted flex flex-col rounded-lg bg-violet-500">
              <img className="aspect-square w-full rounded-t-lg object-contain" src="https://placehold.co/800x800" alt="Eric Ewing"></img>
              <div className="p-4">
                <div className="text-md font-medium">Eric Ewing</div>
                <div className="text-sm text-slate-400">(pronouns)</div>
                <div className="mt-2 text-sm italic text-slate-600">
                  ---
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 p-16 pb-0">
            <h3 className="text-2xl font-medium">Head TA</h3>
            <div className="frosted flex flex-col rounded-lg bg-violet-500">
              <img className="aspect-square w-full rounded-t-lg object-contain" src="https://placehold.co/800x800" alt="Narek Harutyunyan"></img>
              <div className="p-4">
                <div className="text-md font-medium">Narek Harutyunyan</div>
                <div className="text-sm text-slate-400">(pronouns)</div>
                <div className="mt-2 text-sm text-slate-600">---</div>
              </div>
            </div>
          </div>
        </div>
        <div className="xs:grid-cols-2 grid w-full grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex flex-col gap-2 p-16 pb-0">
            <h3 className="text-2xl font-medium">TA</h3>
            <div className="frosted flex flex-col rounded-lg bg-violet-500">
              <img className="aspect-square w-full rounded-t-lg object-contain" src="https://placehold.co/800x800" alt="Fuka Ikeda"></img>
              <div className="p-4">
                <div className="text-md font-medium">Fuka Ikeda</div>
                <div className="text-sm text-slate-400">(pronouns)</div>
                <div className="mt-2 text-sm italic text-slate-600">
                  ---
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 p-16 pb-0">
            <h3 className="text-2xl font-medium">TA</h3>
            <div className="frosted flex flex-col rounded-lg bg-violet-500">
              <img className="aspect-square w-full rounded-t-lg object-contain" src="https://placehold.co/800x800" alt="Arman Mohammadi"></img>
              <div className="p-4">
                <div className="text-md font-medium">Arman Mohammadi</div>
                <div className="text-sm text-slate-400">he/him</div>
                <div className="mt-2 text-sm text-slate-600">---</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Staff, "staff");
