import React, { useState } from "react";

const ZipCodeForm = ({ onFormSubmit }) => {
  const [countryCode, setCountryCode] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(countryCode, postalCode);
  };

 

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col sm:flex-row gap-y-5 justify-center md:gap-10 bg-gradient-to-r from-blue-700 via-blue-900 to-black rounded-lg shadow-2xl p-6 md:mx-10">
        <div className="flex justify-center md:gap-5">
          <div className="flex items-center justify-center">
            <label
              htmlFor="countryCode"
              className="text-xl font-serif text-white "
            >
              Enter Country Code :
            </label>
          </div>
          <div className="flex items-center justify-center">
            <input
              type="text"
              value={countryCode}
              onChange={(e) => {setCountryCode(e.target.value)}}
              className="border-2 border-gray-300 rounded-lg p-[6px] bg-white w-full"
            />
          </div>
          <div className="flex items-center justify-center">
            <label
              htmlFor="postalCode"
              className="text-xl font-serif text-white "
            >
              Enter Postal Code :
            </label>
          </div>
          <div className="flex items-center justify-center">
            <input
              type="text"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              className="border-2 border-gray-300 rounded-lg p-[6px] bg-white w-full"
            />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
          >
            Get Location Info
          </button>
        </div>
      </div>
   
    </form>
  );
};

export default ZipCodeForm;
