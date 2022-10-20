import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants]=useState([])
  const [search, setSearch] = useState("")

  useEffect(()=>{
    fetch("http://localhost:6001/plants")
    .then((r)=>r.json())
    .then((plants)=>setPlants(plants))
  }, [])

  function handleAddPlant(newPlant){
    setPlants([...plants, newPlant])
  }

  function onSearch(search){
    setSearch(search)
  }

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant}/>
      <Search onSearch = {onSearch}/>
      <PlantList plants = {plants} search = {search}/>
    </main>
  );
}

export default PlantPage;
