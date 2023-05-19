import React from "react";

const ProjectItem = ({ title, imageUrl, githubUrl }) => {
  return (
    <div>
      <a href={githubUrl} target="_blank" rel="noopener noreferrer">
        <img src={imageUrl} alt={title} />
        <h3>{title}</h3>
      </a>
    </div>
  );
};

export default ProjectItem;
