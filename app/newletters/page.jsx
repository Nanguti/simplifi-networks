import React from "react";

function TechTalks() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Newletters</h2>
      <div className="flex flex-wrap -mx-4">
        <div className="w-1/2 px-4 mb-4">
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

export default TechTalks;
