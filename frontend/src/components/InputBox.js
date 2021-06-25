import { React, useState } from "react";
import axios from "axios";

function InputBox(props) {
  const [Value, setValue] = useState("");

  const submitHandler = event => {
    event.preventDefault();
    let body = {
      value: Value,
    };
    axios.post("/api/value", body).then(response => {
      if (response.data.success) {
        props.setList([...props.List], response.data.value);
        setValue("");
      } else {
        alert("Error");
      }
    });
  };

  const changeHandler = event => {
    setValue(event.currentTarget.value);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          style={{ width: "200px", height: "25px" }}
          type="text"
          onChange={changeHandler}
        />
        <button style={{ height: "30px" }} type="submit">
          확인
        </button>
      </form>
    </div>
  );
}

export default InputBox;
