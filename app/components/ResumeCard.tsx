import React from "react";
import { Link } from "react-router";
import ScoreCircle from "./ScoreCircle";

const ResumeCard = ({ resume }: { resume: Resume }) => {
  return (
    <Link
      to={`/resume/${resume.id}`}
      className="resume-card animate-in fade-in duration-1000"
    >
      <div className="resume-card-header">
        <div className="flex flex-col items-center gap-4 ">
          <h2 className="!text-white font-black break-words">
            {resume.companyName}
          </h2>
          <h3 className="text-lg break-words text-gray-400">
            {resume.jobTitle}
          </h3>
        </div>
        <div className="flex-shrink-0">
          <ScoreCircle score={resume.feedback.overallScore} />
        </div>
      </div>
        <div className="gradient-border animate-in fade-in duration-1000">
            <img src={resume.imagePath} alt="resume" className="w-full h-[350px] max-sm:h-[200px] object-cover object-top" />
        </div>
        
    </Link>
  );
};

export default ResumeCard;
