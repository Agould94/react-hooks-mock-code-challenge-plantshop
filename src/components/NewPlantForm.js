import React, {useState} from "react";

function NewPlantForm({onAddPlant}) {
  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [price, setPrice] = useState(0)

  function handleSubmit(e){
    e.preventDefault()
    const newPlant = {
      name: name,
      image: image,
      price: price
    }
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlant),
    })
    .then((r)=>r.json())
    .then((newPlant)=>onAddPlant(newPlant))
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit = {handleSubmit}>
        <input type="text" name="name" onChange={(e)=>setName(e.target.value)} placeholder="Plant name" />
        <input type="text" name="image" onChange={(e)=>setImage(e.target.value)} placeholder="Image URL" />
        <input type="number" name="price" onChange={(e)=>setPrice(e.target.value)} step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
