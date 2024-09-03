import React from "react";
import { SectionWrapper } from "../hoc";

const About = () => {
  return (
    <section id="home" className="flex flex-col gap-6 pt-32 md:pt-32">
      <h2 className="text-3xl font-semibold md:text-4xl">
        Welcome to Robots as a Medium!
      </h2>
      <div className="flex flex-col gap-12 md:flex-row">
        <div className="flex flex-col gap-4">
          <p>
            Ever wondered how robots can transform the world of art?
          </p>
          <p>
            CS1952Z invites students to explore art through robotics, 
            where you'll collaborate in teams to design and execute 
            artistic projects using both flying and ground robots. 
            Whether it's painting, composing music, or choreographing movements,
            no prior experience is required—just your imagination and enthusiasm. 
            This is your chance to blend robotics with artistry in an engaging
            and hands-on way.
          </p>
        </div>
        <div className="flex flex-row justify-between md:flex-shrink-0 md:flex-col">
          <div className="flex flex-1 flex-col gap-1">
            <div className="flex flex-col">
              <strong className="font-semibold">Course</strong>
              <a target="_blank" rel="noopener noreferrer" className="underline" href="https://www.coursicle.com/brown/courses/CSCI/1952Z/">CSCI 1952Z</a>
            </div>
            <div className="flex flex-col">
              <strong className="font-semibold">Professor</strong>
              <a target="_blank" rel="noopener noreferrer" className="underline" href="https://cs.brown.edu/people/faculty/eaewing/">Eric Ewing</a>
            </div>
            <div className="flex flex-col">
              <strong className="font-semibold">Location</strong>
              <a target="_blank" rel="noopener noreferrer" className="underline" href="https://maps.app.goo.gl/1xfqYMQZHMA6Jadg9">CIT Center <br />(Thomas Watson CIT) 316</a>
            </div>
            <div className="flex flex-col">
              <strong className="font-semibold">Time</strong>
              TTh 10:30am-11:50am
            </div>
          </div>
          <hr className="my-2" />
          <div className="flex flex-1 flex-col gap-1">
            <a target="_blank" rel="noopener noreferrer" className="underline" href="https://docs.google.com/document/d/1bAWKpmqDCGrlOllv_DJKA2TBgqWOx5x16qhv794HoJY/">Syllabus</a>
            <a target="_blank" rel="noopener noreferrer" className="underline" href="https://canvas.brown.edu/courses/1097152">Canvas</a>
            <a target="_blank" rel="noopener noreferrer" className="underline" href="https://sites.google.com/brown.edu/csci1952z/MultiRobotArt">Web App</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(About, "about");
