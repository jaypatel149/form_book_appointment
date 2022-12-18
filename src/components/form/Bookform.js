import React, { useEffect, useState } from "react";
import "../FormAppointment.css";
import { DataUser } from "../data";

const Bookform = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(DataUser);
  }, []);

  const HandlerChange = (item) => {
    let nameItem = data.map((user) => {
      if (user.id === item.id) {
        return { ...user, selected: !user.selected };
      } else {
        return user;
      }
    });
    setData(nameItem);
  };

  return (
    <div className="px-3 row" >
      <div  className="grid">
        {data.map((user, index) => {
          return (
            <div key={index} className='text-center '>
              <div
                onClick={() => HandlerChange(user)}
                style={{
                  color: user.selected === false ? "#4d4b4b" : "#f7ad3e",
                }}
              >
                <span className="icon">
                  <ion-icon name="checkmark-outline"></ion-icon>
                </span>
                <span
                  style={{
                    marginLeft: "8px",
                    fontSize: ".9rem",
                    cursor: "pointer",
                  }}
                >
                  {user.name}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Bookform;
