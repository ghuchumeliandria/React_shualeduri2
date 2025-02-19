import edit from "../../../assets/images/edit.png";

function EditBtn(props) {
  return (
    <>
      <div className="absolute top-7 right-6 md:static">
        <button
          onClick={() => props.Edit(props.commentId, props.comment)}
          className="flex gap-1.5 items-center text-[#5357B6] font-bold">
          {" "}
          <img src={edit} alt="" />
          edit
        </button>
      </div>
    </>
  );
}
export default EditBtn;
