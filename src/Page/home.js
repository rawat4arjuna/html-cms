import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import { Action } from "../redux/Action/userAction";
export default function Home() {
  // const dispatch = useDispatch()
  // dispatch(Action)
  // const res = useSelector(state =>state.reducer.result)
  // const [num,setNum] =useState({})
  // useEffect(  ()=>{
  //     console.log("pppp",res)
  //     setNum(res)
  //    return () => {};
  // },[])

  // const { success,error } = useSelector((state) => state.data);
  function allowDrop(ev) {
    ev.preventDefault();
  }

  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }

  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    console.log(data);
    ev.target.appendChild(document.getElementById(data));
  }
  return (
    <div>
      <p
        id="p1"
        draggable={true}
        onDragStart={(e) => {
          drag(e);
        }}
      >
        Arjun
      </p>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          display: "grid",
          placeItems: "center",
        }}
      >
        <div
          id="div1"
          style={{
            height: "200px",
            width: "200px",
            backgroundColor: "red",
          }}
          onDrop={(e) => {
            drop(e);
          }}
          onDragOver={(e) => {
            allowDrop(e);
          }}
        ></div>
      </div>
    </div>
  );
}
