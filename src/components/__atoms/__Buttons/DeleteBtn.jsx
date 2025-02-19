import React from "react";
import icon from "../../../assets/images/delete-icon.png";
function DeleteBtn(props) {

  return (
    <>
      <div className="">
        <button className="flex gap-[5px] items-center text-[#ED6368] font-bold" onClick={props.DeleteItem}>
          {" "}
          <img src={icon} alt="" />
          Delete 
        </button>
      </div>
    </>
  );
}

export default DeleteBtn;
