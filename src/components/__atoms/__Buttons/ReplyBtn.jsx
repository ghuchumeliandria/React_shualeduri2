import React from "react";
import ReplyImg from '../../../assets/images/Reply.png'
function ReplyBtn(){
    return(
        <>
        <button className="flex gap-[8px] text-[16px] items-center text-[#5357B6] font-bold cursor-pointer" >
            <img src={ReplyImg} alt="" />
            Reply
        </button>
        </>
    )
}
export default ReplyBtn;