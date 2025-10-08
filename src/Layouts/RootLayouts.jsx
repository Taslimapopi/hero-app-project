import React from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import { Outlet, useNavigation } from "react-router";
import LoadingSpinner from "../Components/LoadingSpinner";

const RootLayouts = () => {
  const navigation = useNavigation();

  const isLoading = navigation.state === "loading";

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar></NavBar>
    
      {isLoading && (
        <div className="fixed inset-0 bg-white bg-opacity-70 z-50 flex items-center justify-center">
          <LoadingSpinner />
        </div>
      )}

      <div className="flex-1 max-w-screen-xl px-4 md:px-8 mx-auto py-4 md:py-8">
        <Outlet />
      </div>

      <Footer></Footer>
    </div>
  );
};

export default RootLayouts;
