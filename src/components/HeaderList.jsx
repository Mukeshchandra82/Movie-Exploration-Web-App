import React from "react";

const HeaderList = ({ name = "", Icon }) => {
  return (
    <div
      className="text-white flex items-center gap-3
    text-[15px] font-semibold cursor-pointer hover:underline
    underline-offset-8 mb-2"
    >
      {Icon && <Icon />} {/* Render the icon only if it exists */}
      {name && <h2>{name}</h2>} {/* Render the name only if it exists */}
    </div>
  );
};

export default HeaderList;
