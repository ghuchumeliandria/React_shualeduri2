import CommentBtns from "../CommentBtns/CommentBtns";
import img from "../../../assets/images/p-picture.png";
import ReactTimeAgo from "react-time-ago";

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
              <div
                key={key}
                className="flex flex-col gap-5  p-[24px] rounded-[8px] w-full bg-white">
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
            );
          })}
        </div>
      </div>
    </>
  );
}
export default Comment;
