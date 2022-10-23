import React, { useEffect, useState } from "react";
import Card from "./Card";
import UserList from "./UserList";

const Home = () => {
  const url = `https://randomuser.me/api/`;
  const [person, setPerson] = useState();
  const [addPerson, setAddPerson] = useState([]);

  const handleClick = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPerson(data.results[0]))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    handleClick();
    // eslint-disable-next-line
  }, []);

  const handleAddUser = () => {
    if (!addPerson.includes(person)) {
      setAddPerson([...addPerson, person]);
    }
  };

  return (
    <div className="content">
      {person && <Card {...person} />}
      <div className="buttons p-4 rounded-bottom">
        <button className="random-btn" onClick={handleClick}>
          Random User
        </button>
        <button className="add-btn" onClick={handleAddUser}>
          Add User
        </button>
      </div>

      <div>{addPerson.length > 0 && <UserList addPerson={addPerson} />}</div>
    </div>
  );
};

export default Home;
