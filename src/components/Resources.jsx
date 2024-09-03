import React from "react";
import { SectionWrapper } from "../hoc";

const Resources = () => {
  return (
    <section id="resources" className="flex flex-col gap-6 pt-32">
      <h2 className="text-3xl font-semibold md:text-4xl">Resources</h2>
      <div className="flex flex-col flex-wrap gap-4 md:flex-row">
        {/* Forms Section */}
        <div>
          <h3 className="text-2xl font-medium">Forms</h3>
          <hr className="mb-2 border-slate-600" />
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <a target="_blank" className="w-fit" href="https://forms.gle/xyvD9LbDAScbGWKq8">Anonymous Feedback Form</a>
              <a target="_blank" className="w-fit" href="https://forms.gle/hrDFBCQhsJyC3LiNA">Lab Feedback Form</a>
            </div>
          </div>
        </div>
        
        {/* Guides and Tutorials Section */}
        <div>
          <h3 className="text-2xl font-medium">Guides and Tutorials</h3>
          <hr className="mb-2 border-slate-600" />
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <a target="_blank" className="w-fit" href="https://hackmd.io/gGOpcqoeTx-BOvLXQWRgQg">GitHub Guide</a>
              <a target="_blank" className="w-fit" href="https://hackmd.io/@BrownDeepLearningS24/BkIT3sW6s">Google Colaboratory Tutorial</a>
              <a target="_blank" className="w-fit" href="https://sites.google.com/brown.edu/csci1952z/MultiRobotArt">Web App </a>

            </div>
          </div>
        </div>

        {/* Department Resources Section */}
        <div>
          <h3 className="text-2xl font-medium">Department Resources</h3>
          <hr className="mb-2 border-slate-600" />
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <a target="_blank" className="w-fit" href="https://cs.brown.edu/degrees/undergrad/concentrating-in-cs/concentration-requirements-2020/capstone/">Capstone Information</a>
              <a target="_blank" className="w-fit" href="https://cheatography.com/davechild/cheat-sheets/linux-command-line/">Linux Cheat Sheet</a>
              <a target="_blank" className="w-fit" href="http://cs.brown.edu/about/system/accounts/email/">Setting Up Email</a>
              <a target="_blank" className="w-fit" href="https://ithelp.brown.edu/">IT Services</a>
              <a target="_blank" className="w-fit" href="https://ithelp.brown.edu/kb/articles/it-service-center-loaner-equipment-3">IT Loaner Laptops</a>
            </div>
          </div>
        </div>

        {/* Organizations Section */}
        <div>
          <h3 className="text-2xl font-medium">Organizations</h3>
          <hr className="mb-2 border-slate-600" />
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <a target="_blank" className="w-fit" href="https://www.brown.edu/campus-life/support/counseling-and-psychological-services/">CAPS</a>
              <a target="_blank" className="w-fit" href="https://cs.brown.edu/people/orgs/wics/">Women in Computer Science</a>
              <a target="_blank" className="w-fit" href="https://mosaicplus.github.io/">Mosaic+</a>
              <a target="_blank" className="w-fit" href="https://www.brown.edu/about/administration/title-ix/">Title IX</a>
              <a target="_blank" className="w-fit" href="https://cs.brown.edu/about/diversity/health-wellness-student-advocates/">Health and Wellness Advocates</a>
              <a target="_blank" className="w-fit" href="https://cs.brown.edu/about/diversity/student-advocates-diversity-and-inclusion/">Diversity and Inclusion</a>
              <a target="_blank" className="w-fit" href="http://cs.brown.edu/people/orgs/dug/">CS DUG</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
};

export default SectionWrapper(Resources, "resources");