import React from "react";

const App = () => {
  const inputChnaging = (elem) => {
    console.log("input is changing");
  };

  return (
    <div className="inp">
      <input onChange={(elem)=>{
        console.log(elem.nativeEvent.data)
      }} type="text" placeholder="enter name" />
    </div>
  );
};

export default App;
