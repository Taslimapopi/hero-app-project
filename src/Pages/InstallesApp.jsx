import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Download, Star, ThumbsUp } from "lucide-react";
import useApps from "../Hooks/useApps";
import LoadingSpinner from "../Components/loadingSpinner";

const InstallesApp = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [sortOrder, setSortOrder] = useState("none");
  const {loading} = useApps

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
  };

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

  const handleRemove = (id) => {
    const existingApps = JSON.parse(localStorage.getItem("installedApp"));
    let updatedApps = existingApps.filter((app) => app.id !== id);
    setInstalledApps(updatedApps);

    localStorage.setItem("installedApp", JSON.stringify(updatedApps));
    toast("App Uninstalled");
  };

  if (loading) return <LoadingSpinner/>

  return (
    <div>
      <div className="flex flex-col justify-center items-center mb-5 p-2">
        <h2 className="text-2xl font-bold">All Installed Applications</h2>
        <p>
          <small>
            Explore All Apps on the Market developed by us. We code for Millions
          </small>
        </p>
      </div>
      <div className="flex justify-between items-center p-4">
        <h1 className="text-xl font-semibold">
          <span className="text-sm text-gray-600">
            ({installedApps.length}) Apps installed
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
      <div className="m-2">
        {getSortedApps().map((app) => (
          <div className="flex justify-between items-center border-1 rounded-xl mt-3 pr-3">
            <div className="flex items-center rounded-xl ">
              <img
                className="w-[10%] h-[10%] object-cover p-2 "
                src={app.image}
                alt=""
              />

              <div className="space-y-1">
                <div className="">
                  <h1 className="font-semibold">{app.title}</h1>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex  justify-center items-center text-[6px]">
                    <Download className="text-[#00D390] w-3 h-3" />
                    <p className="">{app.downloads}</p>
                  </div>
                  <div className="flex  justify-center items-center text-[6px]">
                    <Star className="fill-[#FF8811] text-[#FF8811] w-3 h-3" />
                    <p>{app.ratingAvg}</p>
                  </div>
                  <div className="flex  justify-center items-center text-[6px]">
                    <ThumbsUp className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] fill-white text-white w-3 h-3"></ThumbsUp>
                    <p>{app.reviews}</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <button
                className="btn bg-[#00D390] text-white px-5"
                onClick={() => handleRemove(app.id)}
              >
                Uninstall
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* <InstalledCard></InstalledCard> */}

      <ToastContainer />
    </div>
  );
};

export default InstallesApp;
