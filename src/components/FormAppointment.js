import React, { useState, useEffect } from "react";
import "./FormAppointment.css";
import { NameData } from "./data";
import Bookform from "./form/Bookform";

const FormAppointment = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(NameData);
  }, []);

  const handlerChange = (item) => {
    let nameItem = data.map((user) =>{
        if(user.id === item.id){
            return {...user, selected : !user.selected}
        }else{
            return user;
        }
    })
    setData(nameItem)
  };

  return (
    <div>
    <h2 className=" py-3 text-center ">Book an Appointment</h2>
      <Bookform/>
    <div className="container-md py-5">
      <form className="row g-3">
        {data.map((user, index) => {
          return (
            <div className="col-sm-12 col-md-6 col-lg-3 " key={index}>
              <div
                className="btn "
                onClick={()=>handlerChange(user)}
                style={{
                  backgroundColor: user.selected === false ? "white" : "#f7ad3e",
                  border: user.selected === true ? "none" : ' ',
                }}
              >
                <span className="btn__link">
                  {user.selected === false ? (
                    <ion-icon style={{fontSize:'1.4rem',color:'#161515',fontWeight: 'bold' }} name="add-outline"></ion-icon>
                  ) : (
                    <ion-icon style={{fontSize:'1.4rem',color:'#161515',fontWeight: 'bold' }}  name="checkmark-outline"></ion-icon>
                  )}
                  <span>{user.name}</span>
                </span>
              </div>
            </div>
          );
        })}
        <div className="col-12">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              I don't Know which one I need!
            </label>
          </div>
          <hr />
        </div>
        <div className="col-12 ">
          <div style={{ textAlign: "end" }}>
            <button className="btn btn-primary" type="submit">
              Continue
            </button>
          </div>
        </div>
      </form>
    </div>
    </div>
  );
};

export default FormAppointment;
