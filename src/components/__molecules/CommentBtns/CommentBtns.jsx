import React from "react";
import EditBtn from "../../__atoms/__Buttons/EditBtn";
import LikeBtn from "../../__atoms/__Buttons/LikeBtn";
import ReplyBtn from "../../__atoms/__Buttons/ReplyBtn";
import DeleteBtn from "../../__atoms/__Buttons/DeleteBtn";
function CommentBtns(props) {
  

  return (
    <>
     <div className="flex items-center justify-between">
        <LikeBtn />
        <div className="flex gap-6 md:absolute top-7 right-6">
          <EditBtn Edit={props.Edit} commentId={props.commentId} comment={props.comment} />
          <DeleteBtn DeleteItem={props.DeleteItem} />
          <ReplyBtn reply={props.reply} />

        </div>
      </div>
    </>
  );
}

export default CommentBtns;
