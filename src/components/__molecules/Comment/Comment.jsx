import CommentBtns from "../CommentBtns/CommentBtns";
import ReactTimeAgo from "react-time-ago";
import { useState, useRef, useEffect } from "react";
import vaxoImg from "../../../assets/images/vaxo.png";
import profileImg from "../../../assets/images/me.jpg";
import ComTextArea from "../../__atoms/CommentTextArea/ComTextArea";
import DefaultComment from "../../__atoms/DefaultComment/DefaultComment";
import DeleteItemBtn from "../../__atoms/__Buttons/DeleteItemBtn";

function Comment(props) {
  const divRef = useRef(null);
  const [inputValue, setInputValue] = useState("");
  const [showReply, setShowReply] = useState({});
  const [showEdit, setShowEdit] = useState({});
  const [editValue, setEditValue] = useState({});
  const [showDelete, setShowDelete] = useState(false);

  function showDeleteBox(){
    setShowDelete(true)
  }
  useEffect(() =>{

    function OutsideClick(e) {
      if (!divRef.current.contains(e.target)) {
        setShowDelete(false);
      }
    }
    document.addEventListener("mousedown", OutsideClick);
  },[])


  function Push(e, commentId) {
    e.preventDefault();
    if (inputValue.trim() === "") return;
    const newReply = {
      comment: inputValue,
      id: Date.now(),
      name: "Andria",
      reply: [],
    };

    const updatedArr = props.commentsArr.map((com) => {
      if (commentId === com.id) {
        return {
          ...com,
          reply: [...com.reply, newReply],
        };
      }
      return com;
    });

    props.setCommentsArr(updatedArr);
    setInputValue("");
  }

  const ShowReply = (commentId) => {
    setShowReply((show) => ({
      ...show,
      [commentId]: !show[commentId],
    }));
  };

  const ScndReply = (e, commentId) => {
    e.preventDefault();
    const scndReply = {
      comment: inputValue,
      id: Date.now(),
      name: "Andria",
    };

    const scndReplyArr = props.commentsArr.map((com) => {
      return {
        ...com,
        reply: com.reply.map((reply) => {
          if (reply.id === commentId) {
            return {
              ...reply,
              reply: [...reply.reply, scndReply],
            };
          }
          return reply;
        }),
      };
    });
    props.setCommentsArr(scndReplyArr);
    setInputValue("");
  };

  const Edit = (commentId, comment) => {
    setShowEdit((id) => ({
      ...id,
      [commentId]: !id[commentId],
    }));

    setEditValue((prev) => ({
      ...prev,
      [commentId]: comment,
    }));
  };

  const SaveComment = (e, commentId) => {
    e.preventDefault();

    const EditedArray = props.commentsArr.map((com) => {
      if (com.id === commentId) {
        return { ...com, comment: editValue[commentId] };
      }
      return com;
    });

    props.setCommentsArr(EditedArray);
    setShowEdit((id) => ({
      ...id,
      [commentId]: false,
    }));
  };

  const EditChange = (e, commentId) => {
    setEditValue((prev) => ({
      ...prev,
      [commentId]: e.target.value,
    }));
  };

  return (
    <>
      <div className="flex flex-col gap-5  ">
        <DefaultComment />
        <div className="w-full  h-auto  flex flex-col gap-4">
          {props.commentsArr.map((comment, key) => {
            return (
              <div className="flex flex-col gap-4" key={key}>
                <div className="flex flex-col gap-5  p-[24px] rounded-[8px] w-full bg-white relative">
                  <div className="flex gap-4 items-center">
                    <img
                      src={vaxoImg}
                      className="w-8 h-8 rounded-[30px] "
                      alt=""
                    />
                    <p>{comment.name}</p>
                    <p>
                      <ReactTimeAgo date={comment.id} locale="en-US" />
                    </p>
                  </div>
                  <div className="">
                    {showEdit[comment.id] ? (
                      <div className="w-full">
                        <form
                          className="w-full"
                          onSubmit={(e) => SaveComment(e, comment.id)}>
                          <textarea 
                            value={editValue[comment.id]}
                            className="w-full h-24 px-6 py-3 outline-none resize-none border-[1px] border-[#E9EBF0] rounded-lg"
                            onChange={(e) => EditChange(e, comment.id)}
                          />
                          <button className="w-[104px] bg-[#5357B6] h-12 text-white font-bold rounded-[8px] cursor-pointer absolute bottom-7 right-5.5">Update</button>
                        </form>
                      </div>
                    ) : (
                      <p>{comment.comment}</p>
                      
                    )}
                  </div>
                  {showEdit[comment.id] ? <p className="h-[40px]"></p> :
                  <CommentBtns
                  filter={comment.comment}
                  commentsArr={props.commentsArr}
                  setCommentsArr={props.setCommentsArr}
                  reply={() => ShowReply(comment.id)}
                  Edit={Edit}
                  commentId={comment.id}
                  comment={comment.comment}
                  DeleteItem={showDeleteBox}
                  />
                }
                </div>
                

                {showDelete && (
                  <div className="absolute top-0 left-0 bottom-0 right-0 bg-[rgba(0,0,0,0.5)]">
                    <div className="w-full max-w-[400px] px-[20px] h-full  m-auto flex items-center">
                      <div
                        className="w-full h-[252px] bg-white p-8 rounded-[8px] flex flex-col gap-5 "
                        ref={divRef}>     
                        <h1 className="text-[20px] md:text-[24px] text-[#334253]">Delete comment</h1>
                        <p className="text-[#67727E] leading-6">Are you sure you want to delete this comment? This will remove the comment and can’t be undone.</p>
                        
                        <DeleteItemBtn filter={comment.comment} commentsArr={props.commentsArr} setCommentsArr={props.setCommentsArr} setShowDelete={setShowDelete} />
                        </div>
                    </div>
                  </div>
                )}
                <div className="w-full   pl-4 border-l-[2px] border-[#e9ebf0cf] flex flex-col gap-4 md:pl-[43px] md:ml-[43px] ">
                  {comment.reply.map((reply, key) => (
                    <div className="flex flex-col gap-4  " key={key}>
                      <div className="flex flex-col gap-5  p-[24px] rounded-[8px] w-full bg-white md:max-w-[622px] relative ">
                        <div className="flex gap-4 items-center">
                          <img
                            src={profileImg}
                            className="w-8 h-8 rounded-[30px] "
                            alt=""
                          />
                          <p>{reply.name}</p>
                          <p>
                            <ReactTimeAgo date={reply.id} locale="en-US" />
                          </p>
                        </div>

                        <p className="text-[#67727e]">
                          <span className="text-[#5357B6]">
                            @{comment.name}
                          </span>{" "}
                          {reply.comment}
                        </p>
                        <CommentBtns
                          filter={reply.id}
                          commentsArr={props.commentsArr}
                          setCommentsArr={props.setCommentsArr}
                          reply={() => ShowReply(reply.id)}
                        />
                      </div>
                    </div>
                  ))}

                  <div className="">
                    {comment.reply.map((index) => {
                      <h1 key={index}>{index.comment}</h1>;
                      <ComTextArea
                        Push={ScndReply}
                        commentId={index.id}
                        inputValue={inputValue}
                        setInputValue={setInputValue}
                      />;
                    })}
                  </div>

                  {showReply[comment.id] && (
                    <ComTextArea
                      Push={Push}
                      commentId={comment.id}
                      inputValue={inputValue}
                      setInputValue={setInputValue}
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default Comment;
