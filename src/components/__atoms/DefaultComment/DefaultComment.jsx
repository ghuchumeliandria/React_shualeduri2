import React from "react";
import img from "../../../assets/images/niki.png";
import CommentBtns from "../../__molecules/CommentBtns/CommentBtns";
function DefaultComment(){
    return(
        <>
        <div className="">
          <div className="flex flex-col gap-5  p-[24px] rounded-[8px] w-full bg-white relative">
            <div className="flex gap-4 items-center">
              <img src={img} alt="" className="w-8 h-8 rounded-[30px] " />
              <p>Niki Sukiasyan</p>
              <p>2 months ago</p>
            </div>

            <p>
              Impressive! Though it seems the drag feature could be improved.
              But overall it looks incredible. You’ve nailed the design and the
              responsiveness at various breakpoints works really well.
            </p>
            <CommentBtns />
          </div>
        </div> 
        </>
    )
}
export default DefaultComment;