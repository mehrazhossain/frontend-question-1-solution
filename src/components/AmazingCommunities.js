import React from 'react';
import { communities } from '../data';

console.log(communities);

const AmazingCommunities = () => {
  return (
    <section>
      <p className="px-32 text-xl font-bold text-white">
        Amazing communities to follow
      </p>
      {/* fetch data from src/data.js */}
      {communities.map((person) => (
        <div class="px-15 py-2 my-2 mx-auto max-w-5xl bg-[#242526]">
          <div class="flex flex-row justify-between px-6">
            <div class="flex items-center gap-x-[10px] rounded-[4px]">
              <img
                class="rounded"
                style={{ width: '142px', height: '70px' }}
                src={person.profileImage}
                alt=""
              />
              <div>
                <div>
                  <span class="font-semibold text-[#FDFFFC]">
                    {person.name}
                  </span>{' '}
                  <span className="font-extralight  text-sm text-[#BCB8B1]">
                    {person.summary.stories} Stories
                  </span>
                </div>
                <div class="text-[#707070] text-xs">{person.bio}</div>
              </div>
            </div>

            <div>
              <span className="self-center text-sm">
                <span className="text-[#BCB8B1]">
                  {person.summary.followers} Followers
                </span>
              </span>
            </div>
            <div>
              <span className="ml-2 font-medium text-blue-600">Follow</span>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default AmazingCommunities;
