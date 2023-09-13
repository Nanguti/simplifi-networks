import React from "react";

function Webinars() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Webinars</h2>
      <div className="flex flex-wrap -mx-4">
        <div className="w-1/2 px-4 mb-4">
          <div className="relative overflow-hidden rounded-lg">
            {/* Replace the iframe source with your YouTube video URL */}
            <iframe
              src="https://www.youtube.com/watch?v=_EHCwkzpJhU"
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

        {/* Add more pairs of video elements as needed */}
      </div>
    </div>
  );
}

export default Webinars;
