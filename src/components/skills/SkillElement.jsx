import React from "react";

const SkillElement = ({ skill, icon }) => {
  return (
    <article className="SkillElement">
      {/* {icon} */}
      <span>{skill}</span>
      <span className="icon">{icon}</span>
    </article>
  );
};

export default SkillElement;
