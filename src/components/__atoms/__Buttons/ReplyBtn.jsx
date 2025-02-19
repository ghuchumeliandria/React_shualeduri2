import React, { useState } from "react";
import ReplyImg from '../../../assets/images/Reply.png'
function ReplyBtn(props){
        
    

    return(
        <>
        <div className="">
        <button className="flex gap-[8px] text-[16px] items-center text-[#5357B6] font-bold cursor-pointer" onClick={props.reply} >
            <img src={ReplyImg} alt="" /> 
            Reply
        </button>
        </div>
        </>
    )
}
export default ReplyBtn;