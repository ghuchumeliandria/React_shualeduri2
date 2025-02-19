import React from "react";

function DeleteItemBtn(props){
    function DeleteItem() {
        const filteredArr = props.commentsArr.map((com) => {
          return {
            ...com,
            reply: com.reply.filter((item) => item.id !== props.filter),
          };
        })
        .filter(comment => comment.comment !== props.filter);
    
        
    
        localStorage.setItem("item", JSON.stringify(filteredArr));
        props.setCommentsArr(filteredArr);

        props.setShowDelete(false)
      }
    return(
        <>

        <div className="flex gap-[14px]">
            <button onClick={() => props.setShowDelete(false)} className="w-full max-w-[165px] bg-[#67727E] rounded-[8px] text-white font-bold cursor-pointer ">NO,CANCEL</button>
            <button onClick={DeleteItem} className="w-full max-w-[165px] h-12 bg-[#ED6368] rounded-[8px] text-white font-bold cursor-pointer">YES,DELETE</button>
        </div>
        </>
    )
}

export default DeleteItemBtn;