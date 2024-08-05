// src/components/ActivityMedia.tsx

import React from "react";
import Image from 'next/image';

interface Activity {
  title: string;
  imageUrl: string;
  websiteUrl: string;
  description?: string;
}

interface ActivityMediaProps {
  activity: Activity;
}

const ActivityMedia: React.FC<ActivityMediaProps> = ({ activity }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <a href={activity.websiteUrl} target="_blank" rel="noopener noreferrer">
        <Image
          src={activity.imageUrl}
          alt={activity.title}
          width={500}
          height={300}
          layout="responsive"
        />
      </a>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{activity.title}</div>
        {activity.description && (
          <p className="text-gray-700 text-base">{activity.description}</p>
        )}
        <a
          href={activity.websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-500 underline"
          aria-label={`Click here to go to activity: ${activity.title}`}
        >
          Click here to go to activity
        </a>
      </div>
    </div>
  );
};

export default ActivityMedia;
