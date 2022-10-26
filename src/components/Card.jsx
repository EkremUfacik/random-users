import "./Card.css";
import {
  FcAddressBook,
  FcPhoneAndroid,
  FcHome,
  FcBusinessContact,
  FcBookmark,
} from "react-icons/fc";
import { useEffect, useState } from "react";

const Card = (person) => {
  const {
    picture,
    name: { first, last },
    email,
    phone,
    location,
    dob,
  } = person;

  const [text, setText] = useState({});

  const { content, desc } = text;

  useEffect(() => {
    setText({
      content: [first + " " + last],
      desc: "name",
    });
    // eslint-disable-next-line
  }, [person]);

  // const showInfo = (text, info) => {
  //   return (
  //     (document.getElementById("p1").innerText = `My ${text} is`),
  //     (document.getElementById("p2").innerText = info)
  //   );
  // };

  console.log(text);

  return (
    <div className="info text-center pb-3">
      <div className="img-div">
        <img className="img rounded-circle m-4" src={picture.large} alt="img" />
      </div>

      <div className="mt-3">
        <p id="p1" className="">
          My {desc || "name"} is
        </p>
        <p id="p2" className="">
          {content || [first + " " + last]}
        </p>
      </div>

      <div className="d-flex gap-4 justify-content-evenly">
        <div className="logo">
          <FcBusinessContact
            onMouseOver={() =>
              setText({
                content: [first + " " + last],
                desc: "name",
              })
            }
          />
        </div>
        <div className="logo">
          <FcAddressBook
            onMouseOver={() => setText({ content: email, desc: "email" })}
          />
        </div>
        <div className="logo">
          <FcPhoneAndroid
            onMouseOver={() => setText({ content: phone, desc: "phone" })}
          />
        </div>
        <div className="logo">
          <FcHome
            onMouseOver={() =>
              setText({
                content: [location.city + " / " + location.country],
                desc: "address",
              })
            }
          />
        </div>
        <div className="logo">
          <FcBookmark
            onMouseOver={() => setText({ content: dob.age, desc: "age" })}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
