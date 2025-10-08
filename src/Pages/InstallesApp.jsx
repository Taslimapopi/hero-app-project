import React, { useEffect, useState } from "react";

const InstallesApp = () => {
  const [installedApps, setInstalledApps] = useState([]);

  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem("installedApp"));
    if (savedList) setInstalledApps(savedList);
  }, []);

  return (
    <div>
      Installed app:{installedApps.length}
      <div className="flex justify-between items-center p-4">
        <h1 className="text-xl font-semibold">
          All Products{" "}
          <span className="text-sm text-gray-600">
            ({installedApps.length}) Apps found
          </span>
        </h1>

        <button>sort</button>
      </div>
      <div>
        {installedApps.map((app) => (
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
                
                <button
                  className="btn btn-primary"                
                >
                  Uninstall
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstallesApp;
