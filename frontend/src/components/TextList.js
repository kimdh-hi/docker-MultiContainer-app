import React from "react";

function TextList(props) {
  return (
    <div>
      <ol>
        {props.textList &&
          props.textList.map((item, idx) => <li key={idx}>{item}</li>)}
      </ol>
    </div>
  );
}

export default TextList;
