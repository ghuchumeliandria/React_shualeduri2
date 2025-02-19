import React, { useState, useEffect } from "react";
import Comment from "../../__molecules/Comment/Comment";
import AddComment from "../../__molecules/AddComment/AddComment";


function MainContainer() {
  const [commentBody, setCommentBody] = useState("");
  const [commentsArr, setCommentsArr] = useState([]);
  const[reply ,setReply] = useState([])
  const CommmentObject = {
    id: Date.now(),
    comment: commentBody,
    name : "Vaxo",
    reply: reply
  };

  useEffect(() => {
    const GetItemFromComment = JSON.parse(localStorage.getItem("item")) || [];
    setCommentsArr(GetItemFromComment);
  }, []);

  useEffect(() => {
    if (commentsArr.length > 0) {
      localStorage.setItem("item", JSON.stringify(commentsArr));
    }
  }, [commentsArr]);

  return (
    <>
      <div className="flex flex-col gap-[20px] h-[80vh] overflow-x-hidden overflow-y-scroll rounded-2xl max-w-[730px] mx-auto   ">
        <Comment
          commentsArr={commentsArr}
          setCommentsArr={setCommentsArr}
          commentBody={commentBody}
          setCommentBody={setCommentBody}
          CommmentObject={CommmentObject}
          setReply={setReply}
          reply={reply}
        />
        <AddComment
          commentBody={commentBody}
          setCommentBody={setCommentBody}
          commentsArr={commentsArr}
          setCommentsArr={setCommentsArr}
          CommmentObject={CommmentObject}
        />
      </div>
    </>
  );
}
export default MainContainer;
