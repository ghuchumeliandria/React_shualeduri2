import PlusImg from "../../../assets/images/+.png";
import MinusImg from "../../../assets/images/-.png";
import React, { useState } from "react";

function LikeBtn() {
    const [count,setCount] = useState(0)

    function increase(){
        setCount(count => count +=1 )
    }
    function decrease(){
        setCount(function(count){
            if(count > 0 ){
               return count -=1
            }else{
               return count = 0
            }
        } )
    }


  return (
    <>
      <div className="flex gap-[13px] bg-[#F5F6FA] px-[14px] py-[11px] w-[100px] rounded-[10px] items-center ">
        <button onClick={increase} className="cursor-pointer">
          <img src={PlusImg} alt="" className=" w-[10px] h-[10px]" />
        </button >
        <p className=" text-[#5357B6] font-normal ">{count}</p>
        <button onClick={decrease} className="cursor-pointer">
          <img src={MinusImg} alt="" className="w-[10px] h-[2.5px]" />
        </button>
      </div>
    </>
  );
}
export default LikeBtn;
