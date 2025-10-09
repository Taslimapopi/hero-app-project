import React from "react";
import useApps from "../Hooks/useApps";
import AppCard from "../Components/AppCard";
import Header from "../Components/Header";
import State from "../Components/State";
import { Link } from "react-router";
import LoadingSpinner from "../Components/loadingSpinner";

const Home = () => {
  const { apps ,loading } = useApps();
  const trendingApps = apps.slice(0,8)
  if(loading) return <LoadingSpinner/>

  return (
    <div>
      <Header></Header>
      <State></State>
      <div className="flex flex-col justify-center items-center mb-5 p-2">
        <h2 className="text-2xl font-bold">Trending Apps</h2>
        <p><small>Explore All Trending Apps on the Market developed by us</small></p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 md:p-5 mx-5 md:mx-10">
        {trendingApps.map((app) => (<AppCard key={app.id}
        app={app}></AppCard>
          
        ))}
      </div>
      <div className="flex justify-center m-5 items-center">
        <Link to='/allApps'>
      <button className="btn primary bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-8 ">Show All</button>
      </Link>
      </div>
      
    </div>
  );
};

export default Home;
