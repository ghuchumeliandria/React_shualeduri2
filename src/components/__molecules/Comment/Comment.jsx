import CommentBtns from "../CommentBtns/CommentBtns";
function Comment(props) {
  return (
    <>
      {props.commentTrue && (
        <div className="w-full  h-auto  flex flex-col-reverse gap-4">
          {props.CommentsArr.map((comment, key) => {
            return (
              <div
                key={key}
                className="flex flex-col gap-5  p-[24px] rounded-[8px] w-full bg-white">
                <div className="flex gap-4 items-center">
                  <img src={comment.picture} alt="" />
                  <p>{comment.name}</p>
                  <p>{comment.time}</p>
                </div>

                <p>{comment.comment}</p>
                <CommentBtns />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
export default Comment;
