import React from 'react';
import { users } from '../data';

console.log(users);

const AmazingAuthor = () => {
  return (
    <section>
      <p className="px-32 text-xl font-bold text-white">
        Amazing authors to follow
      </p>
      {/* fetch data from src/data.js */}
      {users.map((author) => (
        <div class="px-15 py-2 my-2 mx-auto max-w-5xl bg-[#242526]">
          <div class="flex flex-row justify-between px-6">
            <div class="flex items-center gap-x-[10px] rounded-[4px]">
              <img
                class="h-10 w-10 rounded-full"
                src={author.profileImage}
                alt=""
              />
              <div>
                <div>
                  <span class="font-semibold text-[#FDFFFC]">
                    {author.name}
                  </span>{' '}
                  <span className="font-extralight text-sm text-[#BCB8B1]">
                    {author.summary.stories} Stories
                  </span>
                </div>
                <div class="text-[#707070] text-xs">{author.bio}</div>
              </div>
            </div>

            <div>
              <span className="self-center text-sm">
                <span className="text-[#BCB8B1]">
                  {author.summary.followers} Followers
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

export default AmazingAuthor;
