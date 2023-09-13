import React from "react";

function NewsArticle() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">News And Articles</h2>
      <div className="flex flex-wrap -mx-4">
        <div className="w-1/2 px-4 mb-4">
          <div className="relative overflow-hidden rounded-lg">
            {/* Replace the iframe source with your YouTube video URL */}
            <iframe
              src="https://www.youtube.com/watch?time_continue=10&v=zuXgaVFqcn0&embeds_referring_euri=https%3A%2F%2Fsimplifinetworks.com%2F&source_ve_path=MjM4NTE&feature=emb_title"
              frameBorder="0"
              allowFullScreen
              className="w-full h-56 md:h-64 lg:h-72"
            ></iframe>
          </div>
          <div className="mt-2">
            <p className="text-lg font-semibold">Video Title 1</p>
            <p className="text-gray-500">Published by Channel Name</p>
          </div>
        </div>

        <div className="w-1/2 px-4 mb-4">
          <div className="relative overflow-hidden rounded-lg">
            {/* Replace the iframe source with your YouTube video URL */}
            <iframe
              src="https://www.youtube.com/watch?v=6zb6CtcM8Hs&embeds_referring_euri=https%3A%2F%2Fsimplifinetworks.com%2F&source_ve_path=MjM4NTE&feature=emb_title"
              frameBorder="0"
              allowFullScreen
              className="w-full h-56 md:h-64 lg:h-72"
            ></iframe>
          </div>
          <div className="mt-2">
            <p className="text-lg font-semibold">Video Title 2</p>
            <p className="text-gray-500">Published by Channel Name</p>
          </div>
        </div>

        {/* Add more pairs of video elements as needed */}
      </div>
    </div>
  );
}

export default NewsArticle;
