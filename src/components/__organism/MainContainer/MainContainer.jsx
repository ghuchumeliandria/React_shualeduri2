import React, { useState, useEffect } from "react";
import Comment from "../../__molecules/Comment/Comment";
import AddComment from "../../__molecules/AddComment/AddComment";
// import img from "../../../assets/images/p-picture.png";

function MainContainer() {
  const [commentBody, setCommentBody] = useState("");
  const [commentTrue, isCommentTrue] = useState(false);
  const [commentsArr, setCommentsArr] = useState([]);

  // {
  //   comment:
  //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum nostrum sequi quam magnam incidunt? Illum eum nesciunt libero eveniet natus cupiditate, qui aliquam magni doloremque accusamus voluptatum numquam, maxime deserunt",
  //   picture: img,
  //   name: "Niki Sukiasyan",
  // },
  useEffect(() => {
    const GetItemFromComment = JSON.parse(localStorage.getItem("item")) || [];
    setCommentsArr(GetItemFromComment);
  }, []);

  return (
    <>
      <div className="flex flex-col gap-[20px]   max-w-[730px] mx-auto  h-[100vh]">
        <Comment
          commentsArr={commentsArr}
          commentTrue={commentTrue}
          setCommentsArr={setCommentsArr}
        />
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
