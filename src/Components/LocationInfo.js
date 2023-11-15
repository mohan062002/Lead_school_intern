// LocationInfo.js

import React from "react";

const LocationInfo = ({ data, onClear }) => {
  return (
    <div className="bg-gray-200 m-4 md:m-10 rounded-xl shadow-2xl">
      <h2 className="text-center font-serif text-2xl underline-offset-1 py-5">
        Location Information
      </h2>

      {data && data["places"] ? (
        <>
          <div className="grid grid-cols-1 gap-y-5 md:grid-cols-2 md:my-4">
            <div className="flex justify-center">
              <h2 className="text-xl font-serif text-blue-600">COUNTRY : </h2>
              <p className="ml-5 text-xl">{data && data["country"]}</p>
            </div>
            <div className="flex justify-center">
              <h2 className="text-xl font-serif text-blue-600">
                COUNTRY ABBREVATION :{" "}
              </h2>
              <p className="ml-5 text-xl">
                {data && data["country abbreviation"]}
              </p>
            </div>
          </div>

          <h3 className="text-center text-2xl font-semibold text-blue-600 py-4">PLACES</h3>
           <div className="md:mx-10">

          <div className="overflow-x-auto">
  <table className="w-full">
    <thead className="bg-gradient-to-r from-blue-700 via-blue-900 to-black">
      <tr className="border-b border-white">
        <th className="border text-center font-serif font-medium text-xl p-2 border-white text-white">
          Place Name
        </th>
        <th className="border text-center font-serif font-medium text-xl p-2 border-white text-white">
          Longitude
        </th>
        <th className="border text-center font-serif font-medium text-xl p-2 border-white text-white">
          State
        </th>
        <th className="border text-center font-serif font-medium text-xl p-2 border-white text-white">
          State Abbreviation
        </th>
        <th className="border text-center font-serif font-medium text-xl p-2 border-white text-white">
          Latitude
        </th>
      </tr>
    </thead>
    <tbody>
      {data["places"].map((place, index) => (
        <tr key={index} className="border-b dark:border-neutral-500">
          <td className="whitespace-nowrap border px-6 py-4 font-medium dark:border-neutral-500">
            {place["place name"]}
          </td>
          <td className="whitespace-nowrap border px-6 py-4 font-medium dark:border-neutral-500">
            {place["longitude"]}
          </td>
          <td className="whitespace-nowrap border px-6 py-4 font-medium dark:border-neutral-500">
            {place["state"]}
          </td>
          <td className="whitespace-nowrap border px-6 py-4 font-medium dark:border-neutral-500">
            {place["state abbreviation"]}
          </td>
          <td className="whitespace-nowrap border px-6 py-4 font-medium dark:border-neutral-500">
            {place["latitude"]}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

           </div>
        </>
      ) : (
        <div className="flex justify-center text-2xl">
          {" "}
          <p>No places data available</p>{" "}
        </div>
      )}

      <div className="flex justify-center py-10">
        <button
          onClick={onClear}
          className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
        >
          Clear Information
        </button>
      </div>
    </div>
  );
};

export default LocationInfo;
