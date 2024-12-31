import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Education = () => {
  return (
    <div className="bg-black my-[5rem]  md:mx-[9rem] lg:mx-[10rem] sm:mx-[5rem] xs:mx-[2rem] ">
      
      <h1 className="text-3xl xs:text-[30px] font-bold text-center text-white mb-10">
        My Educational Journey
      </h1>

      {/* Timeline */}
      <VerticalTimeline>
        {/* Master's Degree */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{
            backgroundColor: "#fff",
            color: "#000",
            boxShadow: "0px 6px 30px rgba(0, 0, 0, 0.5)",
            border: "4px solid #4caf50",
            borderRadius: "10px",
          }}
          contentArrowStyle={{
            borderRight: "10px solid #4caf50",
          }}
          date="2023 - 2025"
          dateClassName="text-gray-500"
          iconStyle={{
            backgroundColor: "#4caf50",
            color: "#fff",
          }}
          iconClassName="animate-pulse"
        >
          <h3 className="text-xl font-semibold">Master of Computer Applications (MCA)</h3>
          <h4 className="text-lg font-medium text-gray-300">
            Uttarakhand Technical University
          </h4>
          <p className="text-gray-700">First Year CGPA: <strong>7.17</strong></p>
        </VerticalTimelineElement>

        {/* Web Development Bootcamp */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{
            backgroundColor: "#fff",
            color: "#000",
            boxShadow: "0px 6px 30px rgba(0, 0, 0, 0.5)",
            border: "4px solid #673ab7",
            borderRadius: "10px",
          }}
          contentArrowStyle={{
            borderRight: "10px solid #673ab7",
          }}
          date="2024"
          dateClassName="text-gray-500"
          iconStyle={{
            backgroundColor: "#673ab7",
            color: "#fff",
          }}
          iconClassName="animate-pulse"
        >
          <h3 className="text-xl font-semibold"> The Complete 2024 Web Development Bootcamp</h3>
          <h4 className="text-lg font-medium text-gray-300">
            By Dr.Angela Yu, Udemy
          </h4>
        </VerticalTimelineElement>

        {/* Bachelor's Degree */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{
            backgroundColor: "#fff",
            color: "#000",
            boxShadow: "0px 6px 30px rgba(0, 0, 0, 0.5)",
            border: "4px solid #f9a825",
            borderRadius: "10px",
          }}
          contentArrowStyle={{
            borderRight: "10px solid #f9a825",
          }}
          date="2019 - 2022"
          dateClassName="text-gray-500"
          iconStyle={{
            backgroundColor: "#f9a825",
            color: "#fff",
          }}
          iconClassName="animate-pulse"
        >
          <h3 className="text-xl font-semibold">Bachelor of Arts</h3>
          <h4 className="text-lg font-medium text-gray-300">
            Uttarakhand Open University
          </h4>
          <p className="text-gray-700">Graduated with <strong>66%</strong></p>
        </VerticalTimelineElement>

        {/* Class 12th */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{
            backgroundColor: "#fff",
            color: "#000",
            boxShadow: "0px 6px 30px rgba(0, 0, 0, 0.5)",
            border: "4px solid #2196f3",
            borderRadius: "10px",
          }}
          contentArrowStyle={{
            borderRight: "10px solid #2196f3",
          }}
          date="2017 - 2018"
          dateClassName="text-gray-500"
          iconStyle={{
            backgroundColor: "#2196f3",
            color: "#fff",
          }}
          iconClassName="animate-pulse"
        >
          <h3 className="text-xl font-semibold">Class 12th</h3>
          <h4 className="text-lg font-medium text-gray-300">
            Himalayan Progressive School (CBSE)
          </h4>
          <p className="text-gray-700">Secured <strong>83%</strong></p>
        </VerticalTimelineElement>

        {/* Class 10th */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{
            backgroundColor: "#fff",
            color: "#000",
            boxShadow: "0px 6px 30px rgba(0, 0, 0, 0.5)",
            border: "4px solid #ff5722",
            borderRadius: "10px",
          }}
          contentArrowStyle={{
            borderRight: "10px solid #ff5722",
          }}
          date="2015 - 2016"
          dateClassName="text-gray-500"
          iconStyle={{
            backgroundColor: "#ff5722",
            color: "#fff",
          }}
          iconClassName="animate-pulse"
        >
          <h3 className="text-xl font-semibold">Class 10th</h3>
          <h4 className="text-lg font-medium text-gray-300">
            Himalayan Progressive School (CBSE)
          </h4>
          <p className="text-gray-700">Secured <strong>89%</strong></p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Education;
