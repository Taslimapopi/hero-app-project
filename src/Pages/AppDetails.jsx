import { useParams } from "react-router";
import useApps from "../Hooks/useApps";

const AppDetails = () => {
  const { id } = useParams();
  const { apps, loading } = useApps();

  const app = apps.find((p) => String(p.id) === id);
  if (loading) return <p>loadi ng....</p>;
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
    } else{
       updatedApps.push(app);
    }
    localStorage.setItem("installedApp", JSON.stringify(updatedApps));
  };

  return (
    <div>
      <div className="card card-side bg-base-100 shadow-sm">
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
              Installed Now ({size}MB)
            </button>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-center font-semibold p-5">Description:</h1>
        <p className="text-center">{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
