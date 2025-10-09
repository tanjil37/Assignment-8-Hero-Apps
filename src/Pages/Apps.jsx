import React, { useState } from "react";
import useApps from "../Hooks/useApps";
import AppCard from "../Components/AppCard";

const Apps = () => {
  const { allApps } = useApps();

  const [search, setSearch] = useState('')
  const term = search.trim().toLocaleLowerCase()
  const searchedApps = term
    ? allApps.filter(allApps =>
        allApps.title.toLocaleLowerCase().includes(term)
      )
    : allApps
  return (
    <div className="w-11/12 mx-auto text-center mt-8">
        <h2 className="text-4xl font-bold text-gray-700 mb-3">
            Our All Applications
          </h2>
          <p className="text-base text-gray-400">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>

      <div className="flex justify-between mt-5 mb-4">
        <h2 className="text-2xl font-semibold text-gray-900">
          ({searchedApps.length}) App Found
        </h2>
         <label className='input'>
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            type='search'
            placeholder='Search Apps'
          />
        </label>
      </div>

      {/* Card */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {searchedApps.map((apps) => (
          <AppCard key={apps.id} apps={apps}></AppCard>
        ))}
      </div>
    </div>
  );
};

export default Apps;
