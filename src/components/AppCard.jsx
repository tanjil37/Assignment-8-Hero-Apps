
const AppCard = ({apps}) => {
  const { image  } = apps;

  return (
   <div className="card bg-base-100 shadow-sm p-4">
          <figure className="h-[316px] overflow-hidden">
            <img className="object-cover w-full "
              src={image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Forest: Focus for Productivity</h2>
            <div className="flex justify-between mt-2">
              <button className="flex p-3 gap-2 bg-[#F1F5E8] text-[#00D390] rounded-xs">
                <img className="w-4 h-4" src="../../src/assets/icon-downloads.png" alt="" />
               <span>9M</span>
              </button>
              <button className="flex p-3 gap-2 bg-[#FFF0E1] text-[#FF8811] rounded-xs">
                <img className="w-4 h-4" src="../../src/assets/icon-ratings.png" alt="" />
               <span>9M</span>
              </button>
             
            </div>
          
          </div>
        </div>
  );
};

export default AppCard;
