import React from "react";
import LikeBtn from "../../__atoms/__Buttons/LikeBtn";
import ReplyBtn from "../../__atoms/__Buttons/ReplyBtn";

function CommentBtns(){
    return(
        <>
            <div className="flex items-center justify-between">
                <LikeBtn />
                <ReplyBtn />
            </div>
        </>
    )
}

export default CommentBtns;