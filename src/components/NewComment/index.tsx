import "./style.scss";
import { useState } from "react";

import Button from "../Button";
import Avatar from "../Avatar";
import IProps from "../../interfaces/INewComment";
import { ICommentsData } from "interfaces/IComment";

export default function NewComment({
  picture,
  altText,
  btnText,
  comments,
  setComments,
  data,
}: IProps) {
  const [textareaValue, setTextAreaValue] = useState<string>("");
  const textarea = document.getElementById(
    "new-comment__textarea"
  ) as HTMLTextAreaElement;
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
    if (textarea.value === "") {
      setTextareaIsEmpty(true);
      return;
    }

    setTextareaIsEmpty(false);
    addNewComment(textareaValue);
    textarea.value = "";
  };

  return (
    <div
      id="new-comment"
      className={`new-comment ${
        textareaIsEmpty ? "new-comment--with-error" : ""
      } mb-5`}
    >
      <div className="d-flex justify-content-between">
        <Avatar picture={picture} altText={altText} />

        <textarea
          id="new-comment__textarea"
          className={`form-control w-75 text-secondary ${textareaIsEmpty ? "border-danger" : ""}`}
          rows={3}
          placeholder="Add a new comment..."
          onChange={() => setTextAreaValue(textarea.value)}
        />

        <Button
          id="new-comment__btn"
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
