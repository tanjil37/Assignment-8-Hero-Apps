import { useNavigate } from "react-router";
import downladsIcon from "../../src/assets/icon-downloads.png";
import ratingsIcon from "../../src/assets/icon-ratings.png";
const AppCard = ({ apps }) => {
  const { id, image, title, downloads, ratingAvg } = apps;

  const navigate = useNavigate();
  return (
    <div
      onClick={()=>navigate(`/apps/${id}`)}
      className="card bg-base-100 shadow-sm p-4 cursor-pointer"
    >
      <figure className="h-[316px] overflow-hidden">
        <img className="object-cover w-full " src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="flex justify-between mt-2">
          <button className="flex p-3 gap-2 bg-[#F1F5E8] text-[#00D390] rounded-xs">
            <img
              className="w-4 h-4"
              src={downladsIcon}
              alt=""
            />
            <span>{downloads}M</span>
          </button>
          <button className="flex p-3 gap-2 bg-[#FFF0E1] text-[#FF8811] rounded-xs">
            <img
              className="w-4 h-4"
              src={ratingsIcon}
              alt=""
            />
            <span>{ratingAvg}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppCard;
