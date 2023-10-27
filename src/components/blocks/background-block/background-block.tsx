"use client";

import React, { useState } from "react";

export type BackgroundBlockProps = {
  color: string;
  titlebg: string;
};

const BackgroundBlock = ({ color, titlebg }) => {
  const [backgroundColor, setBackgroundColor] = useState<string>(color);

  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleBlockClick = () => {
    if (!isEditing) {
      setIsEditing(true);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBackgroundColor(e.target.value);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  return (
    <div
      className="flex flex-col justify-center items-center mx-auto w-screen min-h-[300px] text-center py-10"
      style={{ backgroundColor: color }}
      onClick={handleBlockClick}
    >
      <h1 className="">{titlebg}</h1>
      {isEditing ? (
        <div>
          <input
            className="mx-12"
            type="color"
            value={backgroundColor}
            onChange={handleInputChange}
          />
          <button onClick={handleSaveClick}>Save</button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default BackgroundBlock;
