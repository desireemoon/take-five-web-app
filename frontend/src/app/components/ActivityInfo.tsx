"use client";

import ActivityMedia from "./ActivityMedia";
import React from "react";

interface Activity {
  title: string;
  imageUrl: string;
  websiteUrl: string;
  description?: string;
}

interface ActivityInfoProps {
  activity: Activity;
}

const ActivityInfo: React.FC<ActivityInfoProps> = ({ activity }) => {
  return (
    <div>
      {/* 
        <ActivityDescription activity={activity} />
        */}
      <ActivityMedia activity={activity} />
      <p>This is the info sec!</p>
    </div>
  );
};

export default ActivityInfo;
