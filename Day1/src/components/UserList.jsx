import React from "react";

const UserList = () => {
  const users = [
    {
      ide: 1,
      nam: "John Doe",
      age: 30,
    },
    {
      ide: 2,
      nam: "Jane Smith",
      age: 25,
    },
    {
      ide: 3,
      nam: "Sam Brown",
      age: 28,
    },
  ];
  return (
    <div>
      {users.map(({ ide, nam, age }) => (
        <div key={Math.random()}>
          <h1>
            Users{" "}
            {ide == "1"
              ? ide + "st"
              : ide == "2"
              ? ide + "nd"
              : ide == "3"
              ? ide + "rd"
              : ide + "th"}
          </h1>
          <p>Id: {ide}</p>
          <p>Name: {nam}</p>
          <p>Age: {age}</p>
        </div>
      ))}
    </div>
  );
};

export default UserList;
