import React from "react";

const LinkIcon = ({ icon, url }) => {
  return (
    <a href={url} target="_blank">
      {icon}
    </a>
  );
};

export default LinkIcon;
