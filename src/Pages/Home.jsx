import { Link } from "react-router";
import Hero from "../Components/Hero";
import AppCard from "../Components/AppCard";
import useApps from "../Hooks/useApps";
import { GridLoader } from "react-spinners";

const Home = () => {
  const { loading, allApps } = useApps();

  const appsData = allApps.slice(0, 8);
  return (
    // hero
    <div>
      <Hero></Hero>

      <div className="bg-gray-100">
        <div className="w-11/12 mx-auto text-center py-20">
          <h2 className="text-4xl font-bold text-gray-700 mb-3">
            Trending Apps
          </h2>
          <p className="text-base text-gray-400">
            Explore All Trending Apps on the Market developed by us
          </p>
          <div className="mt-10 ">
            {/* Card */}
            {loading ? (
              <div className="container">
                <GridLoader color="#632EE3"/>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {appsData.map((apps) => (
                  <AppCard key={apps.id} apps={apps}></AppCard>
                ))}
              </div>
            )}

            <div className="mt-8">
              <Link to="/apps" className="btn btn-primary text-white">
                Show All
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
