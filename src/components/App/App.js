import React, { useEffect, useState } from "react";
import Logo from "../Logo/Logo";
import Form from "../Form/Form";
import PackingList from "../PackingList/PackingList";
import Stats from "../Stats/Stats";
import ErrorHandler from "../error_handler"; // Import the ErrorHandler component

// Check if the window object is defined (browser environment)
if (typeof window !== "undefined") {
  require("./App.css");
}

export default function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Load items from local storage on mount
    const initialItems = [];
    const storedItems = JSON.parse(localStorage.getItem("packingListItems"));
    if (storedItems) {
      setItems(storedItems);
    } else {
      setItems(initialItems);
    }
  }, []);

  useEffect(() => {
    // Save items to local storage whenever they change
    if (items.length > 0) {
      localStorage.setItem("packingListItems", JSON.stringify(items));
    }
  }, [items]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    console.log(id);
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );

    if (confirmed) setItems([]);
    localStorage.removeItem("packingListItems");
  }

  return (
    <ErrorHandler>
      {/* Wrap the entire component with ErrorHandler */}
      <div className="app">
        <Logo />
        <Form onAddItems={handleAddItems} />
        <PackingList
          items={items}
          onDeleteItem={handleDeleteItem}
          onToggleItem={handleToggleItem}
          onClearList={handleClearList}
        />
        <Stats items={items} />
      </div>
    </ErrorHandler>
  );
}
