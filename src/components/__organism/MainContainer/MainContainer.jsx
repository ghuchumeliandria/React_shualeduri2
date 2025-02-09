import React from "react";
import Comment from "../../__molecules/Comment/Comment";
import AddComment from "../../__molecules/AddComment/AddComment";

function MainContainer(){
    return(
        <>
        <div className="flex flex-col gap-[20px]   max-w-[730px] mx-auto  h-[100vh]">
            <Comment />
            <AddComment />
        </div>
        </>
    )
}
export default MainContainer;