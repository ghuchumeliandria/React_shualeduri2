
import React, {  useState,  } from "react";

function SendBtn(props) {
  const [isTrue, setIsTrue] = useState(true);
  
  function SendComment(e) {
    e.preventDefault();

      if (props.commentBody.length == 0) {
        setIsTrue(false);
        console.log("carielia");
      } else {
        setIsTrue(true);
        
        const pushItem = [...props.commentsArr, props.CommmentObject]
        props.setCommentsArr(pushItem)
        
        localStorage.setItem("item", JSON.stringify(pushItem));

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
