// import { comment } from "postcss";
import React, { useState,  } from "react";

function SendBtn(props) {
  const [isTrue, setIsTrue] = useState(true);
  function SendComment(e) {
    e.preventDefault();

    if (props.commentBody.length == 0) {
      setIsTrue(false);
      console.log("carielia");
    } else {
      setIsTrue(true);
      props.commentsArr.push(props.CommmentObject)
      localStorage.setItem("item", JSON.stringify(props.commentsArr));
      props.isCommentTrue(true);
    }

    props.setCommentBody("");
  }

  return (
    <>
      <button
        className="w-[104px] h-12 bg-[#5357B6] text-white rounded-lg cursor-pointer"
        onClick={SendComment}>
        SEND
      </button>
    </>
  );
}
export default SendBtn;
