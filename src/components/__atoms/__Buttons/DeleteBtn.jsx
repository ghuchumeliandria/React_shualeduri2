import React from "react";
import icon from "../../../assets/images/delete-icon.png";
function DeleteBtn(props) {

    function DeleteItem(){
        console.log(props.filterId)
        const filteredArr = props.commentsArr.filter((item) =>{
            return item.comment !== props.filterId
        })
        localStorage.setItem("item", JSON.stringify(filteredArr))
        props.setCommentsArr(filteredArr)
    }

  return (
    <>
      <div className="">
        <button className="flex gap-[5px] items-center text-[#ED6368] font-bold" onClick={DeleteItem}>
          {" "}
          <img src={icon} alt="" />
          Delete 
        </button>
      </div>
    </>
  );
}

export default DeleteBtn;
