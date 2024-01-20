export interface ICommentActionContentPayload {
  type: string;
  payload: {
    id: string;
    content: string;
  };
}

export interface ICommentActionIdPayload {
  type: string;
  payload: { id: string; };
}
