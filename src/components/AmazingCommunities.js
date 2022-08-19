import React from 'react';
import { communities } from '../data';

console.log(communities);

const AmazingCommunities = () => {
  return (
    <section>
      <p className="px-32 text-xl font-bold text-gray-700">
        Amazing communities to follow
      </p>
      {communities.map((person) => (
        <div class="px-15 py-2 my-2 mx-auto max-w-5xl border">
          <div class="flex flex-row justify-between px-6">
            <div class="flex items-center gap-x-[10px] bg-neutral-100 rounded-[4px]">
              <img
                class="rounded"
                style={{ width: '142px', height: '70px' }}
                src="https://images.unsplash.com/photo-1507019403270-cca502add9f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt=""
              />
              <div>
                <div>
                  <span class="font-semibold">{person.name}</span>{' '}
                  <span className="font-extralight">
                    {person.summary.stories} Stories
                  </span>
                </div>
                <div class="text-[#64748B]">{person.bio}</div>
              </div>
            </div>

            <div>
              <span className="self-center text-sm">
                <span>{person.summary.followers} Followers</span>
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
