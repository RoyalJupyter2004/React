import { useState, useEffect } from "react";
import RestroCard from "./Restrocard.js";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [filteredList, setFilteredList] = useState([]);
  const [filteredList1, setFilteredList1] = useState([]);
  const [searchText, setsearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.3007589&lng=85.82942589999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    const restaurants = json?.data?.cards
      ?.find((card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      ?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    setFilteredList(restaurants || []);
    setFilteredList1(restaurants || []);
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return <h1 className="text-red-600 text-xl p-4 font-semibold">Oops! You are offline. Check your connection.</h1>;

  if (filteredList.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body px-4 py-6">
      {/* Filter button example */}
      <div className="filter flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
        <div className="search flex w-full sm:w-auto">
          <input
            type="text"
            className="search px-4 py-2 border border-gray-300 rounded-l-md shadow-sm bg-white text-black focus:outline-none focus:ring-2 focus:ring-orange-500 w-full sm:w-64"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-orange-500 text-white font-medium rounded-r-md hover:bg-orange-600 transition"
            onClick={() => {
              const newList = filteredList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredList1(newList);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="filter-btn px-4 py-2 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 transition w-full sm:w-auto"
          onClick={() => {
            const topRatedList = filteredList.filter((res) => res.info.avgRating > 4.2);
            setFilteredList(filteredList);
            setFilteredList1(filteredList1);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      {/* Restaurants */}
      <div className="rescontainer grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredList1.map((restaurant, index) => {
          if (!restaurant || !restaurant.info) return null;
          return <RestroCard key={restaurant.info.id || index} resData={restaurant.info} />;
        })}
      </div>
    </div>
  );
};

export default Body;
