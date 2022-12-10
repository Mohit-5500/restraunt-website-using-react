import React, { useState } from "react";
import "./styles.css";
import menu from "./menuApi";
import MenuCard from "./MenuCard";
import NavBar from "./NavBar";

const uniqueList=[
    ...new Set(
        menu.map((curElem)=>{
            return curElem.category;
        })
    ),"All"
]

const Restraunt = () => {
  const [menuData, setMenuData] = useState(menu);
  const[menuList,setMenuList]=useState(uniqueList)
  const filterItem = (category) => {
    if(category=="All"){
        setMenuData(menu)
        return
    }
    const updatedList = menu.filter((curElem) => {
      return curElem.category === category;
    });
    setMenuData(updatedList);
  };
  return (
    <>
      <NavBar filterItem={filterItem} menuList={menuList}/>
      <MenuCard menuData={menuData}/>
    </>
  );
};

export default Restraunt;
