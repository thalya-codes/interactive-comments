import { ICommentDataBase } from "@/interfaces/ICommentsData";

export interface ICommentBaseTestParams {
  state: ICommentDataBase[];
  comment: ICommentDataBase;
  parentId?: string;
  expectedScore?: number;
}
