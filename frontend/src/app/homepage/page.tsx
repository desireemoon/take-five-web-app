"use client";

import { useState } from "react";
import Link from "next/link";
import ActivityInfo from "../components/ActivityInfo";
import ActivityTitle from "../components/ActivityTitle";
import CompletedPopUp from "../components/CompletedPopUp";
    
const Homepage = () => {
  const [completedPopUp, setPopupVisible] = useState<boolean>(false);

  function togglePopup() {
    setPopupVisible(!completedPopUp);
  }
    
  const activity = {
    title: "Sample Activity",
    imageUrl:
      "https://as1.ftcdn.net/v2/jpg/05/70/27/44/1000_F_570274484_i2lPFVEjXGofl2xqFG5quH8dF5NEVCOY.jpg",
    websiteUrl: "https://example.com",
    description: "This is a sample activity description.",
  };

  return (
    <div>
      {/* 
        <ActivityTitle activityTitle={activityTitle} /> 
        <ActivityInfo activity={activity} />
        <ActivityCompletedButton activity={activity} />
        { pressedCompleted && ( 
            <ActivityCompletedModal activity={activity} />
        )}
        */}
      <ActivityTitle title={activity.title} />
      <ActivityInfo activity={activity} />
      <button onClick={togglePopup}>Completed!</button>
      {completedPopUp && <CompletedPopUp />}
    </div>
  );
};

export default Homepage;

