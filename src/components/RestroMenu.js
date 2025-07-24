import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const IMG_CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/";

const RestroMenu = () => {
  const { resid } = useParams();
  const resInfo = useRestaurantMenu(resid);

  if (resInfo == null) return <Shimmer />;

  const resDetails = resInfo?.cards?.find(card => card?.card?.card?.info)?.card?.card?.info || {};
  const { name, cuisines, costForTwoMessage } = resDetails;

  const regularCards = resInfo?.cards?.find(card => card?.groupedCard)
    ?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  const menuItems = regularCards
    .map(card => card?.card?.card?.itemCards)
    .filter(Boolean)
    .flat()
    .map(item => item.card.info);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8 border-b pb-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-1">{name}</h1>
        <h3 className="text-gray-600 mb-1">{cuisines?.length > 0 ? cuisines.join(", ") : "Cuisines not available"}</h3>
        <h3 className="text-gray-700 font-medium">{costForTwoMessage}</h3>
      </div>

      <div className="space-y-10">
        {menuItems.map((item, index) => (
          <div
            className="flex justify-between items-start border-b pb-6"
            key={`${item.id}-${index}`}
          >
            <div className="w-3/4 pr-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.name}</h3>
              <p className="text-base text-gray-800 font-medium mb-1">
                ₹{item.price / 100 || item.defaultPrice / 100}
              </p>
              {item.description && (
                <p className="text-sm text-gray-600">{item.description}</p>
              )}
            </div>

            {item.imageId && (
              <div className="w-32 h-32 rounded-lg overflow-hidden shadow-md flex-shrink-0">
                <img
                  className="object-cover w-full h-full"
                  src={`${IMG_CDN_URL}${item.imageId}`}
                  alt={item.name}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestroMenu;
