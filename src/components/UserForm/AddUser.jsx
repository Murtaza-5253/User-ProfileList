import React, { useState } from "react";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import classes from "./AddUser.module.css";
import ErrorModal from "../Modal/ErrorModal";
const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

  const userChangeHandler = (e) => {
    setUserName(e.target.value);
  };
  const ageChangeHandler = (e) => {
    setAge(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (userName.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid Age and Username!",
      });
      return;
    }
    if (+age < 1) {
      setError({
        title: "Invlaid age",
        message: "Please enter a valid Age",
      });
      return;
    }
    // const inputData = {
    //     userName:userName,
    //     age:age
    // }
    props.onAddUser(userName, age);
    setUserName("");
    setAge("");
    // console.log(inputData)
  };
  const errorHandler = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}

      <Card className={classes.input}>
        <form onSubmit={submitHandler}>
          <label>Username</label>
          <input type="text" onChange={userChangeHandler} value={userName} />
          <label>Age(Years)</label>
          <input type="number" onChange={ageChangeHandler} value={age} />
          <Button type="submit">Add</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
