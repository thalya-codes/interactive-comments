export interface IPayload {
  id: string;
  content: string;
  parentId?: string;
}

export interface ICommentActionContentPayload<
  Payload = IPayload,
> {
  type: string;
  payload: Payload;
}

export interface ICommentActionIdPayload {
  type: string;
  payload: {
    id: string;
    parentId?: string;
  };
}

export interface IReplyCommentActionPayload
  extends IPayload {
  replyingTo: string;
}
