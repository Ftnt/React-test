import React from "react";

const Card = ({ birthdate, firstName, gender, lastName, occupation }) => {
  return (
    <div className="w-96 h-48 bg-gray-300 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="w-full px-4 py-8">
          <div className="uppercase tracking-wide text-xs text-indigo-500 font-semibold">
            {gender} - {birthdate}
          </div>
          <a
            href="/"
            className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >
            {firstName}
          </a>
          <div className="text-sm pt-4 text-gray-500">
            <span>{lastName}</span>
          </div>
          <div className="uppercase tracking-wide text-sm text-gray-900 font-semibold">
            {occupation}
          </div>
          <p className="mt-2 text-gray-500"></p>
        </div>
      </div>
    </div>
  );
};

export default Card;
