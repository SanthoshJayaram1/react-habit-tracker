import React from "react";
import { Link } from "react-router-dom";
import DayView from "./DayView";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";

const WeekView = () => {
  // call use selector hook for getting state from reducer
  let habitsState=useSelector((state)=>state.habits);
  
  // getting habit from habits state acording to local storage id and set it on habit
  let habit={}
  for(let i=0;i<habitsState.length;i++){
    if(habitsState[i].id===Number(localStorage.getItem("id"))){
      habit=habitsState[i];
    }
  }
  
  return (
    <>
      <Navbar name="Week View" />
      <h1 className="text-center" style={{textTransform:"capitalize"}}>{habit.name}</h1>
      <div className="days-container">
        {habit.weekProgress.map((day,index)=><DayView day={day} key={index}/>)}
      </div>
      <div className="d-grid gap-2 col-2 mx-auto mt-5">
        <button className="btn btn-primary" type="button">
          <Link to="/">Back to Home</Link>
        </button>
      </div>
    </>
  );
};

export default WeekView;
