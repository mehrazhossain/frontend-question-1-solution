import React from 'react';
import travelIcon from '../assets/icon/travel-icon.svg';
import { stories } from '../data';

const Content = () => {
  return (
    <section>
      {stories.slice(0, 1).map((storyContent) => (
        <div class="px-15 py-2 my-2 mx-auto max-w-5xl border">
          <img
            className="object-cover h-48 w-full px-2 rounded-tr-xxl"
            src={'https://picsum.photos/200/300'}
            alt=""
          />
          <div className="px-5 py-5">
            <p>{storyContent.content}</p>
          </div>
          <div class="flex flex-row justify-between px-6">
            <div>
              <img
                className="inline w-8 h-8 rounded-full"
                src="https://picsum.photos/536/354"
                alt=""
              />
              <span className="ml-2">{storyContent.author.name}</span>
            </div>
            <div>
              <span className="self-center text-sm">
                <span>{storyContent.created}</span>
              </span>
            </div>
            <div>
              <img
                className="inline w-6 h-6 rounded-full"
                src={travelIcon}
                alt=""
              />
              <span className="ml-2">{storyContent.community.name}</span>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Content;
