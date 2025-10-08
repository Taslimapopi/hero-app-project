import React, { useState } from "react";
import useApps from "../Hooks/useApps";
import AppCard from "../Components/AppCard";

const AllApps = () => {
  // const { apps } = useApps();
  const { apps = [] } = useApps() || {};
  const [search, setSearch] = useState("");
  const term = search.trim().toLowerCase();
  const searchApps = term
    ? apps.filter((app) => app.title.toLowerCase().includes(term))
    : apps;

    

  console.log();
  return (
    <div>
      <div className="flex justify-between items-center p-4">
        <h1 className="text-xl font-semibold">
          All Products{" "}
          <span className="text-sm text-gray-600">
            ({searchApps.length}) Apps found
          </span>
        </h1>

        <label className="input input-bordered flex items-center gap-2">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder="Search Apps"
            className="outline-none"
          />
        </label>
      </div>

      {searchApps.length === 0 ? (
        <p className="text-center text-gray-500 py-10 text-lg font-medium">
          ❌ No apps found
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-4">
          {searchApps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllApps;
