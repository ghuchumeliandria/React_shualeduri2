import React from "react";
import PlusImg from '../../../assets/images/+.png'
import MinusImg from '../../../assets/images/-.png'
function CommentBtns(){
    return(
        <>
            <div className="flex gap-[13px] bg-[#F5F6FA] px-[14px] py-[11px] w-[100px] rounded-[10px] items-center ">
                <img src={PlusImg} alt="" className=" w-[10px] h-[10px]" />
                <p className=" text-[#5357B6] font-normal ">12</p>
                <img src={MinusImg} alt="" className="w-[10px] h-[2.5px]" />
            </div>
        </>
    )
}

export default CommentBtns;