import React from "react";

function Alert(props) {
  const capitalize = (word) => {
    const str = word.toLowerCase();
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  return (
    props.alert && (
      <>
        <div className={`alert alert-${props.alert.typ} alert-dismissible fade show`} role="alert">
          <strong>{capitalize(props.alert.typ)}: </strong>
          {props.alert.msg}
          
        </div>
      </>
    )
  );
}

export default Alert;
