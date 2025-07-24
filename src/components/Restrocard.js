import { CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";
// Restaurant Card Component
const RestroCard = (props) => {
  const { resData } = props;
  const {
    id,
    name,
    cuisines,
    avgRating,
    costForTwo,
    cloudinaryImageId,
    sla
  } = resData;
  const imageURL = `${CDN_URL}${cloudinaryImageId}`;
  return (
     <Link to={`/restaurants/${id}`} className="restro-link">
  <div className="w-64 p-4 bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 cursor-pointer">
    <img className="w-full h-40 object-cover rounded-xl mb-3" src={imageURL} alt={name} />
    <h3 className="text-lg font-bold mb-1">{name}</h3>
    <h4 className="text-sm text-gray-600 mb-1">{cuisines.join(", ")}</h4>
    <h4 className="text-sm text-yellow-600 mb-1">⭐ {avgRating} stars</h4>
    <h4 className="text-sm text-gray-700 mb-1">{costForTwo}</h4>
    <h4 className="text-sm text-gray-500">{sla.slaString}</h4>
  </div>
</Link>

  );
};
export default RestroCard;