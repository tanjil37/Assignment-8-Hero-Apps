import React, { useState, useEffect } from "react";
import useApps from "../Hooks/useApps";
import AppCard from "../Components/AppCard";
import { GridLoader } from "react-spinners";

const Apps = () => {
  const { allApps, loading, error } = useApps();
  const [search, setSearch] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [searchedApps, setSearchedApps] = useState([]);

  // Handle search logic
  useEffect(() => {
    if (loading) return; // Wait until all apps are loaded first

    const term = search.trim().toLowerCase();

    if (!term) {
      setSearchedApps(allApps);
      return;
    }

    setIsSearching(true);

    // Add a short artificial delay (to show loader smoothly)
    const timer = setTimeout(() => {
      const filtered = allApps.filter((app) =>
        app.title.toLowerCase().includes(term)
      );
      setSearchedApps(filtered);
      setIsSearching(false);
    }, 400);

    return () => clearTimeout(timer);
  }, [search, allApps, loading]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <GridLoader color="#632EE3" />
      </div>
    );
  }

  if (error) {
    return <p className="text-red-500 text-center">Failed to load apps.</p>;
  }

  return (
    <div className="w-11/12 mx-auto text-center mt-8">
      <h2 className="text-4xl font-bold text-gray-700 mb-3">
        Our All Applications
      </h2>
      <p className="text-base text-gray-400">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>

      <div className="flex justify-between mt-5 mb-4 items-center">
        <h2 className="text-2xl font-semibold text-gray-900">
          ({searchedApps.length}) App Found
        </h2>
        <label className="input">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder="Search Apps"
          />
        </label>
      </div>

      {/* Loader during search */}
      {isSearching ? (
        <div className="flex justify-center items-center mt-20">
          <GridLoader color="#632EE3" />
        </div>
      ) : searchedApps.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {searchedApps.map((apps) => (
            <AppCard key={apps.id} apps={apps} />
          ))}
        </div>
      ) : (
        <div className="container mx-auto text-center mt-20">
          <p className="text-3xl text-gray-700 ">No App Found</p>
        </div>
      )}
    </div>
  );
};

export default Apps;
