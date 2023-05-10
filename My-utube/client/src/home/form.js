import React, { useState } from "react";
import "./form.css";
import { Navigate, useNavigate } from "react-router-dom";

function Form() {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  const setdata = (e) => {
    setInputValue(e.target.value);
    const { name, value } = e.target;

    setInputValue((newInput) => {
      return {
        ...newInput,
        [name]: value,
      };
    });
    setInputValue("");
  };

  const addData = async (e) => {
    e.preventDefault();

    const { email } = inputValue;
    const res = await fetch("https://joetechoffical.onrender.com/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    });
    const data = await res.json();

    if (res.status === 404 || !data) {
      alert("error");
      console.log("error");
    } else {
      navigate("/success");
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
