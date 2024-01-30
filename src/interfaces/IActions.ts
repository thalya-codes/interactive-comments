export interface ICommentActionContentPayload {
  type: string;
  payload: {
    id: string;
    content: string;
    parentId?: string;
  };
}

export interface ICommentActionIdPayload {
  type: string;
  payload: {
    id: string;
    parentId?: string;
  };
}
