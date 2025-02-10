import React, { useState , useEffect } from "react";
import Comment from "../../__molecules/Comment/Comment";
import AddComment from "../../__molecules/AddComment/AddComment";
// import img from "../../../assets/images/p-picture.png";

function MainContainer() {
  const [commentBody, setCommentBody] = useState("");
  const [commentTrue, isCommentTrue] = useState(false);
  const [commentsArr, setCommentsArr] = useState('');

  const CommentsArr = []
  useEffect(() =>{
      const GetItemFromComment = JSON.parse(localStorage.getItem("item")) || [];
      setCommentsArr(GetItemFromComment)
  },[])

  return (
    <>
      <div className="flex flex-col gap-[20px]   max-w-[730px] mx-auto  h-[100vh]">
        <Comment CommentsArr={commentsArr} commentTrue={commentTrue} />
        <AddComment
          isCommentTrue={isCommentTrue}
          commentBody={commentBody}
          setCommentBody={setCommentBody}
          commentsArr={commentsArr}
          setCommentsArr={setCommentsArr}
        />
      </div>
    </>
  );
}
export default MainContainer;
