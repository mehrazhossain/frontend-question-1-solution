import React from 'react';
import { users } from '../data';

console.log(users);

const AmazingAuthor = () => {
  return (
    <section>
      <p className="px-32 text-xl font-bold text-gray-700">
        Amazing authors to follow
      </p>
      {users.map((author) => (
        <div class="px-15 py-2 my-2 mx-auto max-w-5xl border">
          <div class="flex flex-row justify-between px-6">
            <div class="flex items-center gap-x-[10px] bg-neutral-100 rounded-[4px]">
              <img
                class="h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1507019403270-cca502add9f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt=""
              />
              <div>
                <div>
                  <span class="font-semibold">{author.name}</span>{' '}
                  <span className="font-extralight">
                    {author.summary.stories} Stories
                  </span>
                </div>
                <div class="text-[#64748B]">{author.bio}</div>
              </div>
            </div>

            <div>
              <span className="self-center text-sm">
                <span>{author.summary.followers} Followers</span>
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
