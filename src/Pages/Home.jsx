import React from "react";
import useApps from "../Hooks/useApps";
import AppCard from "../Components/AppCard";
import Header from "../Components/Header";
import State from "../Components/State";

const Home = () => {
  const { apps } = useApps();
  const trendingApps = apps.slice(0,8)

  return (
    <div>
      <Header></Header>
      <State></State>
      <div className="flex flex-col justify-center items-center mb-5 p-2">
        <h2 className="font-bold">Trending Apps</h2>
        <p><small>Explore All Trending Apps on the Market developed by us</small></p>
      </div>
      <div className="grid grid-cols-4 gap-3">
        {trendingApps.map((app) => (<AppCard key={app.id}
        app={app}></AppCard>
          
        ))}
      </div>
    </div>
  );
};

export default Home;
