import React from "react";
import downladsIcon from "../../src/assets/icon-downloads.png";
import ratingsIcon from "../../src/assets/icon-ratings.png";
import reviewIcon from "../../src/assets/icon-review.png";

import { useParams } from "react-router";
import useApps from "../Hooks/useApps";

const AppDetails = () => {
  const { id } = useParams()
  const { allApps, loading } = useApps()

  const app = allApps.find(p=>p.id === Number(id))

  //const app = allApps.find(p => p.id === Number(id))

  if (loading) return <p>Loading.......</p>

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


     const handleAddToInstall = () => {
      const existingList = JSON.parse(localStorage.getItem('wishlist'))
      let updatedList = []
      if (existingList) {
        const isDuplicate = existingList.some(p => p.id === product.id)
        if (isDuplicate) return alert('Sorry vai')
        updatedList = [...existingList, product]
      } else {
        updatedList.push(product)
      }
      localStorage.setItem('wishlist', JSON.stringify(updatedList))
    }


  return (
    <div className="bg-gray-100">
      <div className="w-11/12 mx-auto  py-20">
        <div className="flex flex-ro gap-5 border-b-1 pb-8 border-b-gray-300">
          <div className="bg-white w-[300px] p-3">
            <img className=" w-full " src={image} alt="" />
          </div>
          {/* right */}
          <div>
            <div className="border-b-1 pb-8 border-b-gray-300">
              <h2 className="font-bold text-3xl">{title}</h2>
              <p className="font-regular text-[20px]">
                Developed by
                <span className="linear-text font-semibold"> {companyName}</span>
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
                <img
                  className=""
                  src={reviewIcon}
                  alt=""
                />
                <p className="text-base">Total Reviews</p>
                <p className="text-[#001931] text-4xl font-extrabold">
                  {reviews}K
                </p>
              </div>
            </div>

            <button className="btn btn-success text-white mt-3">
              Install Now ({size} MB)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
