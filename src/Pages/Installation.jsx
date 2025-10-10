import { useState } from "react";
import downladsIcon from "../../src/assets/icon-downloads.png";
import ratingsIcon from "../../src/assets/icon-ratings.png";
import { loadInstall, removeFromInstall } from "../Utils/LocalStorage";
import { toast, ToastContainer } from "react-toastify";

const Installation = () => {
  const [install, setInstall] = useState(() => loadInstall());

  const [sortOrder, setSortOrder] = useState("none");

  if (!install.length) 
    return (
  <div className="text-center  container mx-auto mt-20"><p className="text-gray-600 text-3xl">No App Installed</p></div>
    )
  

  const sortedItem = (() => {
    if (sortOrder === "size-asc") {
      return [...install].sort((a, b) => a.size - b.size);
    } else if (sortOrder === "size-desc") {
      return [...install].sort((a, b) => b.size - a.size);
    } else {
      return install;
    }
  })();

  const handleUninstall = (id) => {
    toast.success("App Uninstall Successfully!");
    // remove from localstorage
    removeFromInstall(id);
    // for ui instant update
    setInstall((prev) => prev.filter((a) => a.id !== id));
  };

  // //   generate chart data
  // const totalsByCategory = {}
  // wishlist.forEach(product => {
  //   const category = product.category

  //   totalsByCategory[category] =
  //     (totalsByCategory[category] || 0) + product.price
  // })
  // const chartData = Object.keys(totalsByCategory).map(category => ({
  //   category,
  //   total: totalsByCategory[category],
  // }))
  // console.log(chartData)

  return (
    <div className="bg-gray-100">
      <div className="w-11/12 min-h-screen mx-auto text-center py-10">
        <h2 className="text-4xl font-bold text-gray-700 mb-3 ">
          Your Install Apps
        </h2>
        <p className="text-base text-gray-400">
          Explore All Trending Apps on the Market developed by us
        </p>
        <div>
          <div className="flex justify-between">
            <p className="text-2xl font-semibold">
              {sortedItem.length} app found
            </p>
            <label className="form-control w-full max-w-xs">
              <select
                className="select select-bordered"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
              >
                <option value="none">Sort by size</option>
                <option value="size-asc">Low-&gt;High</option>
                <option value="size-desc">High-&gt;Low</option>
              </select>
            </label>
          </div>
          {/* Card */}
          {sortedItem.map((a) => (
            <div>
              <div className="p-4 bg-white flex justify-between items-center rounded-sm mt-3">
                <div className="flex space-x-2 ">
                  <img className="w-20 h-20" src={a.image} alt="" />
                  <div>
                    <h2 className="text-xl text-left font-medium mb-3">{a.title}</h2>
                    <div className="flex space-x-5">
                      <span className=" text-[#00D390] flex space-x-1">
                        <img className="w-5 h-5" src={downladsIcon} alt="" />
                        <p> {a.downloads}M</p>
                      </span>

                      <span className=" text-amber-500 flex space-x-1">
                        <img className="w-5 h-5" src={ratingsIcon} alt="" />
                        <p>{a.ratingAvg}</p>
                      </span>

                      <span className="text-gray-500">{a.size} MB</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => handleUninstall(a.id)}
                  className="btn btn-success text-white"
                >
                  Uninstall
                 
                </button>
                
              </div>
            </div>
          ))}
        </div>

      </div>
       <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
};

export default Installation;
