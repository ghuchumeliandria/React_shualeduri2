import React from "react";
import profileImg from '../../../assets/images/me.jpg'
import SendButton from "../../__atoms/__Buttons/SendButton";
function ComTextArea(props) {
  return (
    <>
      <div className="w-full bg-white  rounded-lg md:max-w-[622px]">
        <form
          className="p-4 flex flex-col bg-white gap-4 rounded-lg"
          onSubmit={(e) => props.Push(e, props.commentId)}>
          <textarea
            name="postContent"
            type="text"
            value={props.inputValue}
            onChange={(e) => props.setInputValue(e.target.value)}
            placeholder="Add a comment"
            className="w-full h-24 px-6 py-3 outline-none resize-none border-[1px] border-[#E9EBF0] rounded-lg"
          />
          <div className="flex items-center justify-between w-full">
            <img
              src={profileImg}
              className="w-8 h-8 rounded-[30px] "
              alt="self-picture"
            />
            <SendButton />
          </div>
        </form>
      </div>
    </>
  );
}
export default ComTextArea;
