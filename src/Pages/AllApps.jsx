import React, { useState } from "react";
import useApps from "../Hooks/useApps";
import AppCard from "../Components/AppCard";

const AllApps = () => {
  const { apps } = useApps();
  const [search, setSearch] = useState("")
  const term = search.trim().toLowerCase();
  const searchApps = term
    ? apps.filter((app) => app.name.toLowerCase().includes(term))
    : apps;


  console.log( );
  return (
    <div>
      <div className="flex justify-between p-4">
        <h1 className="text-xl font-semibold">
          All Product{" "}
          <span className="text-sm text-gray-600">
            ({searchApps.length}) Apps found
          </span>
        </h1>
        <label className="input">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="Search"
            placeholder="Search Apps"
          />
        </label>
      </div>
      <div className="grid grid-cols-4 gap-3">
        {searchApps.map((app) => ( <AppCard app={app}></AppCard>
        ))}
      </div>
    </div>
  );
};

export default AllApps;
