import "./styles.css";
import React, { useState } from "react";
import AddUser from "./components/AddUser/AddUser";
import UserList from "./components/UserList/UserList";

export default function App() {
  const [UserDetails, setUserDetails] = useState([
    { id: 1, username: "Ayushman", age: "20", gender: "male" },
    { id: 2, username: "Rupam", age: "24", gender: "female" },
  ]);
  return (
    <div>
      <h1 style={{ textAlign: "center" }}> My Friends Directory</h1>
      <AddUser setUserDetails={setUserDetails} />
      <UserList userData={UserDetails} />
    </div>
  );
}
