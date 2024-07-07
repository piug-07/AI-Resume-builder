/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

function SkillsPreview({ resumeInfo }) {
  return (
    <div className="my-6">
      <h2
        className="text-center font-bold text-sm mb-2"
        style={{
          color: resumeInfo?.themeColor,
        }}
      >
        Skills
      </h2>
      <hr
        style={{
          borderColor: resumeInfo?.themeColor,
        }}
      />

      <div className="grid grid-cols-2 gap-3 my-4">
        {resumeInfo?.skills.map((skill, index) => (
          <div key={index} className="flex items-center justify-between">
            <h2 className="text-xs">{skill.name}</h2>
            <div className="h-2 bg-gray-200 w-[120px] relative">
              <div
                className="h-2 flex items-center justify-center"
                style={{
                  backgroundColor: resumeInfo?.themeColor || "defaultColor",
                  width: `${skill?.rating || 0}%`,
                }}
              >
                <span className="text-black text-[10px]">{skill?.rating}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillsPreview;
