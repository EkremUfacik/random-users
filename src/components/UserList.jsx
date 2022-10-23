import React from "react";

const UserList = ({ addPerson }) => {
  return (
    <table className="table table-striped rounded-bottom">
      <thead className="table-dark">
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody className="user-list">
        {addPerson.map((item, index) => {
          const { name, email, phone, dob } = item;
          return (
            <tr key={index}>
              <td>
                {name.first} {name.last}
              </td>
              <td>{email}</td>
              <td>{phone}</td>
              <td>{dob.age}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default UserList;
