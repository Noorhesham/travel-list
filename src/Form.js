import { useState } from "react";
export default function Form({onAddItems}){
    const [description,setdescription]=useState('');
    const [quantity,setquantity]=useState(1);
    return  <form className="add-form" onSubmit={(e)=>{
      e.preventDefault();
      if(!description) return;
      const newItem={description,quantity,packed:false,id:Date.now()}
      onAddItems(newItem)
      setdescription('')
      setquantity(1)}}>
      <h3>what do you need for your 😊 trip ?</h3>
      <select value={quantity} onChange={e=>setquantity(+e.target.value)}>{Array.from({length:20},(_,i)=>i+1).map(i=><option value={i} key={i} >{i}</option>)}</select>
      <input type="text" placeholder="item.." value={description} onChange={e=>setdescription(e.target.value)}/>
      <button>Add item</button>
    </form>
  }