"use client";
import React from "react";

interface TitleProps {
  title: string;
}

const ActivityTitle: React.FC<TitleProps> = ({ title }) => {
  return (
    <div>
      <h3>Today&apos;s Take 5: {title}</h3>
    </div>
  );
};

export default ActivityTitle;
