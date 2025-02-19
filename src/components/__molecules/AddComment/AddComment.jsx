import img from "../../../assets/images/p-picture.png";
import SendBtn from "../../__atoms/__Buttons/SendBtn";


function AddComment(props) {
  
  return (
    <>
      <form className="p-4 flex flex-col bg-white gap-4 rounded-lg">
        <textarea
          name="postContent"
          type="text"
          value={props.commentBody}
          onChange={(e) => props.setCommentBody(e.target.value)}
          placeholder="Add a comment"
          className="w-full h-24 px-6 py-3 outline-none resize-none border-[1px] border-[lightgray] rounded-lg"
        />
        <div className="flex items-center justify-between w-full">
          <img src={img} alt="self-picture" />
          <SendBtn
            setCommentBody={props.setCommentBody}
            commentBody={props.commentBody}
            CommmentObject={props.CommmentObject}
            setCommentsArr={props.setCommentsArr}
            isCommentTrue={props.isCommentTrue}
            commentsArr={props.commentsArr}
          />
        </div>
        
      </form>
    </>
  );
}
export default AddComment;
