import CommentBtns from "../CommentBtns/CommentBtns";
import img from "../../../assets/images/p-picture.png";
import ReactTimeAgo from "react-time-ago";
import SendBtn from "../../__atoms/__Buttons/SendBtn";
function Comment(props) {
  return (
    <>
      <div className="flex flex-col gap-5">
        <div className="">
          <div className="flex flex-col gap-5  p-[24px] rounded-[8px] w-full bg-white">
            <div className="flex gap-4 items-center">
              <img src={img} alt="" />
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
        <div className="w-full  h-auto  flex flex-col gap-4">
          {props.commentsArr.map((comment, key) => {
            return (
              <div className="flex flex-col gap-4" key={key}>
                <div className="flex flex-col gap-5  p-[24px] rounded-[8px] w-full bg-white">
                  <div className="flex gap-4 items-center">
                    <img src={comment.picture} alt="" />
                    <p>{comment.name}</p>
                    <p>
                      <ReactTimeAgo date={comment.time} locale="en-US" />
                    </p>
                  </div>

                  <p>{comment.comment}</p>
                  <CommentBtns
                    filter={comment.comment}
                    commentsArr={props.commentsArr}
                    setCommentsArr={props.setCommentsArr}
                  />
                </div>
                {/*Reply Div */}
                {props.commentTrue && (
                  <div className="w-full   pl-4 border-l-[2px] border-[#e9ebf0cf] flex flex-col gap-4 ">
                    <div className="w-full bg-white  rounded-lg">

                    
                    <form className="p-4 flex flex-col bg-white gap-4 rounded-lg">
                      <textarea
                        name="postContent"
                        type="text"
                        value={props.commentBody}
                        onChange={(e) => props.setCommentBody(e.target.value)}
                        placeholder="Add a comment"
                        className="w-full h-24 px-6 py-3 outline-none resize-none border-[1px] border-[#E9EBF0] rounded-lg"
                      />
                      <div className="flex items-center justify-between w-full">
                        <img src={img} alt="self-picture" />
                        <SendBtn />
                      </div>
                    </form>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default Comment;
