import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, search}) {

  const plantsToDisplay = plants
  .filter((plant)=>
    plant.name.toLowerCase().includes(search.toLowerCase())
  )
  .map((plant)=>{
    return(<PlantCard plant = {plant}></PlantCard>)
  })

  return (
    <ul className="cards">{plantsToDisplay}</ul>
  );
}

export default PlantList;
