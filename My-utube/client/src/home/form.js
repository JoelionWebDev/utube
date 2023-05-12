import React, { useState } from "react";
import "./form.css";
import { useNavigate } from "react-router-dom";

function Form() {
  const [inputValue, setInputValue] = useState({ email: "" });
  const navigate = useNavigate();
  const setdata = (e) => {
    const { name, value } = e.target;
    setInputValue((newInput) => {
      return {
        ...newInput,
        [name]: value,
      };
    });
  };

  const addData = async (e) => {
    e.preventDefault();

    const { email } = inputValue;
    const res = await fetch("https://joetechoffical.onrender.com/register", {
      method: "POST",
      // mode: "no-cors",
      // credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    });
    const data = await res.json();

    if (res.status === 404 || !data) {
      console.log("error, page not found");
    } else {
      // navigate("/success");
      if (res.status === 500) {
        navigate("/duplicate");
      } else {
        navigate("/success");
      }
    }
  };

  return (
    <main className="formBody">
      <div className="form">
        <h2>notify me of new courses</h2>
        <div>
          <input
            value={inputValue.email}
            onChange={setdata}
            type="email"
            name="email"
            id="email"
            placeholder="Enter Email"
          />
        </div>
        <div>
          <button type="submit" onClick={addData}>
            Notify Me
          </button>
        </div>
      </div>
    </main>
  );
}

export default Form;
