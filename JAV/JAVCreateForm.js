import React, { useState } from "react";

// onAddItem là 1 function, gọi ở chỗ nào
// onAddItem = addItem ở bên Tutorial
export default function JAVCreateForm({ onAddItem }) {
  const [name, setName] = useState("");

  const handleCreateItem = (event) => {
    event.preventDefault();

    if (!name) {
      alert("Nhập vào tên");
      return;
    } else {
      onAddItem(name); // addItem(name)
    }
    setName("");
  };

  return (
    <form onSubmit={handleCreateItem}>
      <input
        value={name}
        type="text"
        onChange={(event) => setName(event.target.value)}
      />
      <button>Thêm</button>
    </form>
  );
}
