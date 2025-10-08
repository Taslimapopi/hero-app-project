import React from "react";
import { Link } from "react-router";


const AppCard = ({ app }) => {

    

    

  return (
    
    <div>
        <Link to={`/allApps/${app.id}`}>
        <div className="card bg-base-100 border shadow-sm hover:scale-105 transition ease-in-out p-3" onClick={`/allApps/${app.id}`}>
        <figure className="h-52 overflow-hidden">
          <img
          className="w-full object-cover"
            src={app.image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{app.title}</h2>
          {/* <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p> */}
          <div className="card-actions justify-between">
            <button className="btn btn-primary">{app.downloads}</button>
            <button className="btn btn-primary">{app.ratingAvg}</button>
          </div>
        </div>
      </div>
        </Link>
      
    </div>
  );
};

export default AppCard;
