import React from "react";
import LikeBtn from "../../__atoms/__Buttons/LikeBtn";
import ReplyBtn from "../../__atoms/__Buttons/ReplyBtn";
import DeleteBtn from '../../__atoms/__Buttons/DeleteBtn'
function CommentBtns(props){
    return(
        <>
            <div className="flex items-center justify-between">
                <LikeBtn />
                <div className="flex gap-6">
                <DeleteBtn filterId={props.filter} commentsArr={props.commentsArr} setCommentsArr={props.setCommentsArr} />
                <ReplyBtn />
                </div>
            </div>
        </>
    )
}

export default CommentBtns;