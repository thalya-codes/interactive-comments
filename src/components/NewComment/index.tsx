import "./style.scss";
import { useRef, useState } from "react";

import Button from "../Button";
import Avatar from "../Avatar";
import IProps from "../../interfaces/INewComment";
import { ICommentsData } from "interfaces/IComment";

export default function NewComment({
  id,
  picture,
  altText,
  btnText,
  comments,
  setComments,
  setEditing,
  data,
}: IProps) {

  const [textareaValue, setTextAreaValue] = useState<string>("");

  const refTextarea = useRef<HTMLTextAreaElement>(null);
  const [textareaIsEmpty, setTextareaIsEmpty] = useState<boolean>();

  const addNewComment = (content: string): void => {
    const currentDate = new Date();
    const formmatedDate = `${currentDate.getDay()}/${
      currentDate.getMonth() + 1
    }/${currentDate.getFullYear()}`;

    const newComment: ICommentsData = {
      id: Math.floor(Math.random() * 20),
      user: {
        image: {
          png: data.currentUser.image.png,
        },
        username: "juliusomo",
      },
      createdAt: formmatedDate,
      content,
      score: 0,
      replies: [],
      replyingTo: "",
    };

    setComments([...comments, newComment]);
    localStorage.setItem("comments", JSON.stringify([...comments, newComment]));
  };

  const handleOnClick = (): void => {
    const textarea = refTextarea.current;
    
    if (textarea === null) return;

    if (textarea.value === "") {
      setTextareaIsEmpty(true);
      return;
    }

    setTextareaIsEmpty(false);

    if (setEditing) {
      setEditing(false);
    } else {
      addNewComment(textareaValue);     
    }

    textarea.value = "";
  };

  return (
    <div
      id={id}
      className={`new-comment ${
        textareaIsEmpty ? "new-comment--with-error" : ""
      } mb-5`}
    >
      <div className="d-flex justify-content-between">
        <Avatar picture={picture} altText={altText} />

        <textarea
          id={`${id}__textarea`}
          className={`form-control w-75 text-secondary ${textareaIsEmpty ? "border-danger" : ""}`}
          rows={3}
          ref={refTextarea}
          placeholder="Add a new comment..."
          onChange={() => refTextarea.current !== null &&  setTextAreaValue(refTextarea.current.value)}
        />

        <Button
          id={`id__btn`}
          text={btnText}
          hasBackgroundColor={true}
          variant="primary"
          textIsUppercase={true}
          onClick={() => handleOnClick()}
        />
      </div>
      {textareaIsEmpty && (
        <p className="new-comment__error-message text-danger fw-bold  mt-2">
          *The field can't empty
        </p>
      )}
    </div>
  );
}
