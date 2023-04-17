import React, { useState } from "react";
import ToDoList from "./ToDoList";

const App = () => {
  const [item, setItem] = useState();
  const [newItem, setNewItem] = useState([]);

  const itemEvent = (event) => {
    setItem(event.target.value);
  };

  const AddItems = () => {
    setNewItem((oldItems) => {
      return [...oldItems, item];
    });
    setItem("");
  };

  const deleteItem = (id) => {
    // console.log('Deleted');
    setNewItem((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1> ToDo List </h1>
          <br />
          <input
            type="text"
            value={item}
            placeholder="  Add An Items  "
            onChange={itemEvent}
          />
          <button className="btn" onClick={AddItems}>+</button>

          <ul type="none" className="ul_div">
            {newItem.map((itemval, index) => {
              return (
                <ToDoList
                  key={index}
                  id={index}
                  text={itemval}
                  onSelect={deleteItem}
                />
              );
            })}
          </ul>
        </div>
      </div>
      <footer>
        <p style={{ marginTop: "5rem" }}> © 2023 Vishal Bade. All Rights Reserved | Terms and Conditions </p>
      </footer>
    </>
  );
};

export default App;
