import React from "react";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import classes from "./AddUser.module.css";
const AddUser = () => {
    const submitHandler=(e)=>{
        e.preventDefault()
    }
  return (
    <Card className={classes.input}>
      <form onSubmit={submitHandler}>
        <label>Username</label>
        <input type="text" />
        <label>Age(Years)</label>
        <input type="text" />
        <Button type="submit">Add</Button>
      </form>
    </Card>
  );
};

export default AddUser;
