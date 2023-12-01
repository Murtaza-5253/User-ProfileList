import React, { useState } from "react";
import AddUser from "./components/UserForm/AddUser";
import UsersList from "./components/UserForm/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);
  const AddUserHandler = (uName, uAge) => {
    setUsersList((prevUsers) => {
      return [
        ...prevUsers,
        {
          name: uName,
          age: uAge,
          id: Math.random().toString(),
        },
      ];
    });
  };
  let content = null
  if(usersList.length>0){
    content = <UsersList users={usersList} />
  }
  return (
    <div>
      <AddUser onAddUser={AddUserHandler} />
     
        {content}
      
      
    </div>
  );
}

export default App;
