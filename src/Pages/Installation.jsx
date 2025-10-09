import React from "react";
import downladsIcon from "../../src/assets/icon-downloads.png";
import ratingsIcon from "../../src/assets/icon-ratings.png";
const Installation = () => {
  return (
    <div className="bg-gray-100">
      <div className="w-11/12 min-h-screen mx-auto text-center py-10">
        <h2 className="text-4xl font-bold text-gray-700 mb-3 ">
          Trending Apps
        </h2>
        <p className="text-base text-gray-400">
          Explore All Trending Apps on the Market developed by us
        </p>

        <div>
          <div className="flex justify-between">
            <p className="text-2xl font-semibold">1 app found</p>
            <p>sort</p>
          </div>


          {/* Card */}
          <div>
            <div className="p-4 bg-white flex justify-between items-center rounded-sm mt-3">
              <div className="flex space-x-2 ">
                <img className="w-20 h-20" src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="" />
                <div>
                    <h2 className="text-xl font-medium mb-3">Forest: Focus for Productivity</h2>
                    <div className="flex space-x-5">
                        <span className=" text-[#00D390] flex space-x-1"><img className="w-5 h-5" src={downladsIcon} alt="" /><p> 9M</p></span>

                        <span className=" text-amber-500 flex space-x-1"><img className="w-5 h-5" src={ratingsIcon} alt="" /><p> 9M</p></span>
                        
                        
                        <span className="text-gray-500">34 MB</span>
                    </div>

                </div>
              </div>
              <button className="btn btn-success text-white">Uninstall</button>
            </div>


          </div>

          
        </div>
      </div>
    </div>
  );
};

export default Installation;
