import { useState, useEffect } from "react";
const useRestaurantMenu =(resid)=>{
   const [resInfo, setResInfo] = useState(null);
 useEffect(()=>{
    fetchData();
 },[]);
 const fetchData = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=20.3007589&lng=85.82942589999999&restaurantId=${resid}&catalog_qa=undefined&submitAction=ENTER`
    );
    const json = await data.json();
    setResInfo(json.data);
  };
  return resInfo;

}

export default useRestaurantMenu;