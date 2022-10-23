import "./Card.css";
import {
  FcAddressBook,
  FcPhoneAndroid,
  FcHome,
  FcBusinessContact,
  FcBookmark,
} from "react-icons/fc";

const Card = (person) => {
  const {
    picture,
    name: { first, last },
    email,
    phone,
    location,
    dob,
  } = person;

  const showInfo = (text, info) => {
    return (
      (document.getElementById("p1").innerText = `My ${text} is`),
      (document.getElementById("p2").innerText = info)
    );
  };

  return (
    <div className="info text-center pb-3">
      <div className="img-div">
        <img className="img rounded-circle m-4" src={picture.large} alt="img" />
      </div>

      <div className="mt-3">
        <p id="p1" className="">
          {first}
        </p>
        <p id="p2" className="">
          {last}
        </p>
      </div>

      <div className="d-flex gap-4 justify-content-evenly">
        <div className="logo">
          <FcBusinessContact
            onMouseOver={() => showInfo("name", `${first} ${last}`)}
          />
        </div>
        <div className="logo">
          <FcAddressBook onMouseOver={() => showInfo("email", email)} />
        </div>
        <div className="logo">
          <FcPhoneAndroid onMouseOver={() => showInfo("phone", phone)} />
        </div>
        <div className="logo">
          <FcHome
            onMouseOver={() =>
              showInfo("adress", location.city + "/" + location.country)
            }
          />
        </div>
        <div className="logo">
          <FcBookmark onMouseOver={() => showInfo("age", dob.age)} />
        </div>
      </div>
    </div>
  );
};

export default Card;
