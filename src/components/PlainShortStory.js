import React from 'react';
import travelIcon from '../assets/icon/travel-icon.svg';
import { stories } from '../data';

const PlainShortStory = () => {
  return (
    <section class="px-15 py-8 mt-5 mx-auto max-w-5xl border bg-white">
      {/* fetch data from src/data.js */}
      {stories.slice(0, 1).map((story) => (
        <div class="grid items-center w-full grid-cols-1 gap-0 mx-auto lg:grid-cols-6 lg:gap-24 xl:w-11/12">
          <div class="col-auto text-center md:col-span-7 lg:text-left">
            <h1 class="mb-4 text-3xl font-bold leading-tight text-gray-900 md:text-xl md:leading-none tracking-none md:tracking-tight">
              {story.title}
            </h1>
            <div class="flex flex-row justify-between px-2 border border-slate-100 p-2">
              <div>
                <img
                  className="inline w-8 h-8 rounded-full"
                  src={story.author.profileImage}
                  alt=""
                />
                <span className="ml-2">{story.author.name}</span>
              </div>
              <div>
                <img
                  className="inline w-6 h-6 rounded-full"
                  src={travelIcon}
                  alt=""
                />
                <span className="ml-2">{story.community.name}</span>
              </div>
            </div>
            <div className="flex items-center justify-between pt-8">
              <div className="flex space-x-2">
                <span className="self-center text-sm text-[#BCB8B1]">
                  <span>{story.created}</span> | <span>{story.readTime}</span>
                </span>
                <span className="self-center text-sm">{story.hashtags}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default PlainShortStory;
