import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

const InstallesApp = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [sortOrder, setSortOrder] = useState("none");

  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem("installedApp"));
    if (savedList) setInstalledApps(savedList);
  }, []);

const parseDownloads = (str) => {
  if (!str) return 0;
  const value = parseFloat(str);
  if (str.includes("B")) return value * 1000; 
  if (str.includes("K")) return value / 1000;
  return value;
}

const getSortedApps = () => {
  if (sortOrder === "dl-asc") {
    return [...installedApps].sort(
      (a, b) => parseDownloads(a.downloads) - parseDownloads(b.downloads)
    );
  } else if (sortOrder === "dl-dsc") {
    return [...installedApps].sort(
      (a, b) => parseDownloads(b.downloads) - parseDownloads(a.downloads)
    );
  }
  return installedApps;
};

const handleRemove = (id) =>{
    const existingApps = JSON.parse(localStorage.getItem("installedApp"));
    let updatedApps = existingApps.filter(app => app.id !== id);
    setInstalledApps(updatedApps)

    localStorage.setItem("installedApp", JSON.stringify(updatedApps));
    toast('App Uninstalled')
}

  return (
    <div>
      <div className="flex flex-col justify-center items-center mb-5 p-2">
        <h2 className="text-2xl font-bold">All Installed Applications</h2>
        <p><small>Explore All Apps on the Market developed by us. We code for Millions</small></p>
      </div>
      <div className="flex justify-between items-center p-4">
        <h1 className="text-xl font-semibold">
          All Products{" "}
          <span className="text-sm text-gray-600">
            ({installedApps.length}) Apps found
          </span>
        </h1>
        <label className="select select-bordered">
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="none">Sort by Size</option>
            <option value="dl-asc">Low to High</option>
            <option value="dl-dsc">High to low</option>
          </select>
        </label>
      </div>
      <div>
        {getSortedApps().map((app) => (
          <div className="card card-side bg-base-100 shadow-sm">
            <figure>
              <img className="w-20 h-20" src={app.image} alt="Movie" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{app.title}</h2>
              <p>{app.companyName}</p>
              <div className="flex justify-center items-center gap-1">
                <p>{app.downloads}</p>
                <p>{app.ratingAvg}</p>
                <p>{app.reviews}</p>
              </div>
              <div className="card-actions justify-between">
                <button className="btn btn-primary" onClick={()=>handleRemove(app.id)}>Uninstall</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <ToastContainer />
    </div>
  );
};

export default InstallesApp;
