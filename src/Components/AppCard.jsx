import React from "react";
import { Link } from "react-router";
import { Download } from 'lucide-react';
import { Star } from 'lucide-react';


const AppCard = ({ app }) => {

    

    

  return (
    
    <div>
        <Link to={`/allApps/${app.id}`}>
        <div className="card bg-base-100 border shadow-sm hover:scale-105 transition ease-in-out " onClick={`/allApps/${app.id}`}>
        <figure className="h-40 overflow-hidden mt-2">
          <img
          className="w-full object-cover p-2 "
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
          <div className="card-actions justify-between items-center">
            <button className="flex items-center gap-2 w-10 text-[#00D390] text-[10px]">
              <Download className="w-8 h-8" />
              {app.downloads}</button>
            <button className="flex items-center gap-2 w-10 text-[#FF8811] text-[10px]"><Star className="fill-[#FF8811] w-2 h-2" />{app.ratingAvg}</button>
          </div>
        </div>
      </div>
        </Link>
      
    </div>
  );
};

export default AppCard;
