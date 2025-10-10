import { useState } from "react";
import downladsIcon from "../../src/assets/icon-downloads.png";
import ratingsIcon from "../../src/assets/icon-ratings.png";
import reviewIcon from "../../src/assets/icon-review.png";

import { useParams } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import useApps from "../Hooks/useApps";
import { updateList } from "../Utils/LocalStorage";


import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";

const AppDetails = () => {
  const { id } = useParams();
  const { allApps, loading } = useApps();

  //dedicated for install now btn
  const [isInstalled, setIsInstalled] = useState(false);
  const handleInstall = () => {
    toast.success("App Installed Successfully!");
    setIsInstalled(true);
  };
  //end

  const app = allApps.find((a) => a.id === Number(id));

  if (loading) return <p>Loading.......</p>;

  const {
    title,
    image,
    companyName,
    description,
    size,
    reviews,
    ratingAvg,
    downloads,
    ratings,
  } = app || {};

  //  const handleAddToInstall = () => {
  //   const existingList = JSON.parse(localStorage.getItem('wishlist'))
  //   let updatedList = []
  //   if (existingList) {
  //     const isDuplicate = existingList.some(p => p.id === app.id)
  //     if (isDuplicate) return alert('Sorry vai')
  //     updatedList = [...existingList, app]
  //   } else {
  //     updatedList.push(app)
  //   }
  //   localStorage.setItem('wishlist', JSON.stringify(updatedList))
  // }

  return (
    <div className="bg-gray-100">
      <div className="w-11/12 mx-auto  py-20">
        <div className="flex  gap-5 border-b-1 pb-8 border-b-gray-300">
          <div className="bg-white w-[300px] p-3">
            <img className=" w-full " src={image} alt="" />
          </div>
          {/* right */}
          <div>
            <div className="border-b-1 pb-8 border-b-gray-300">
              <h2 className="font-bold text-3xl">{title}</h2>
              <p className="font-regular text-[20px]">
                Developed by
                <span className="linear-text font-semibold">
                  {" "}
                  {companyName}
                </span>
              </p>
            </div>

            <div className="mt-5 flex space-x-20">
              <div className="space-y-2">
                <img className="" src={downladsIcon} alt="" />
                <p className="text-base">Downloads</p>
                <p className="text-[#001931] text-4xl font-extrabold">
                  {downloads}M
                </p>
              </div>
              <div className="space-y-2 ">
                <img className="" src={ratingsIcon} alt="" />
                <p className="text-base">Average Ratings</p>
                <p className="text-[#001931] text-4xl font-extrabold">
                  {ratingAvg}M
                </p>
              </div>
              <div className="space-y-2">
                <img className="" src={reviewIcon} alt="" />
                <p className="text-base">Total Reviews</p>
                <p className="text-[#001931] text-4xl font-extrabold">
                  {reviews}K
                </p>
              </div>
            </div>

            <button
              onClick={() => {
                updateList(app), handleInstall();
              }}
              disabled={isInstalled}
              className="btn btn-success text-white mt-3"
            >
              {isInstalled ? "Installed" : `Install Now (${size} MB)`}
            </button>
            <ToastContainer position="top-center" autoClose={2000} />
          </div>
        </div>

        {/* Bar start from here */}
        <div>
          {/* Bar start from here */}
          <div className="mt-10 bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold mb-4 text-[#001931]">
              Ratings
            </h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart
                layout="vertical"
                data={ratings}
                margin={{ top: 10, right: 30, left: 40, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" />
                <Tooltip
                  formatter={(value) => value.toLocaleString()}
                  cursor={{ fill: "rgba(0,0,0,0.05)" }}
                />
                <Legend />
                <Bar
                  dataKey="count"
                  fill="#FF8C00"
                  barSize={20}
                  radius={[0, 10, 10, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="pt-7 space-x-3">
          <h3 className="text-lg font-semibold mb-4 text-[#001931]">
              Description
            </h3>
          <p> {description} </p>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
