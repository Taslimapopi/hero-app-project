import { useParams } from "react-router";
import useApps from "../Hooks/useApps";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { LoaderPinwheelIcon } from "lucide-react";
import LoadingSpinner from "../Components/loadingSpinner";
import { Download, Star, ThumbsUp } from "lucide-react";

const AppDetails = () => {
  const { id } = useParams();
  const { apps, loading } = useApps();
  const [install, setInstall] = useState(false);

  const app = apps.find((p) => String(p.id) === id);
  if (loading) return <LoadingSpinner></LoadingSpinner>;
  const {
    title,
    image,
    companyName,
    description,
    reviews,
    downloads,
    ratingAvg,
    size,
  } = app || {};

  const handleInstalledApp = () => {
    const existingApps = JSON.parse(localStorage.getItem("installedApp"));
    let updatedApps = [];
    if (existingApps) {
      const isDuplicate = existingApps.some((p) => p.id === app.id);
      if (isDuplicate) return alert("already installed");
      updatedApps = [...existingApps, app];
    } else {
      updatedApps.push(app);
    }
    localStorage.setItem("installedApp", JSON.stringify(updatedApps));
    setInstall(true);
    toast("App Successfully installed!");
  };

  return (
    <div className=" bg-[#71717A10]">
      {/* <div className="card card-side bg-base-100 shadow-sm">
        <figure>
          <img className="w-50 h-50" src={image} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{companyName}</p>
          <div className="flex justify-center items-center gap-1">
            <p>{downloads}</p>
            <p>{ratingAvg}</p>
            <p>{reviews}</p>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary" onClick={handleInstalledApp}>
              {install ? "Installed" : `Install Now (${size}MB)`}
            </button>
          </div>
        </div>
      </div> */}

      <div className="flex gap-4 items-center border-b rounded-xl p-4 mb-4">
        <figure className="w-[35%] h-[35%] overflow-hidden mt-2">
          <img className="w-full object-cover p-2 " src={image} alt="" />
        </figure>
        <div className="space-y-8">
          <div className="border-b-1">
            <h1 className="font-bold">{title}</h1>
            <p className="pb-2">Developed by <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">{companyName}</span></p>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <Download className="text-[#00D390]" />
              <p>
                <small>Downloads</small>
              </p>
              <p>{downloads}</p>
            </div>
            <div>
              <Star className="fill-[#FF8811] text-[#FF8811]" />
              <p>
                <small>Ratings</small>
              </p>
              <p>{ratingAvg}</p>
            </div>
            <div>
              <ThumbsUp className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] fill-white text-white"></ThumbsUp>
              <p>
                <small>reviews</small>
              </p>
              <p>{reviews}</p>
            </div>
          </div>
          <div>
            <button className="btn bg-gradient-to-r from-[#54CF68] to-[#00827A] text-white" onClick={handleInstalledApp}>
              {install ? "Installed" : `Install Now (${size}MB)`}
            </button>
          </div>
        </div>
      </div>

      <div>
        <BarChart
          width={600}
          height={400}
          data={[...app.ratings].reverse()}
          layout="vertical"
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" />
          <Tooltip />
          <Bar
            dataKey="count"
            fill="#8884d8"
            activeBar={<Rectangle fill="pink" stroke="blue" />}
          />
        </BarChart>
      </div>

      <div>
        <h1 className=" font-semibold p-3">Description:</h1>
        <p className="p-3 pb-5">{description}</p>
      </div>

      <ToastContainer />
    </div>
  );
};

export default AppDetails;
