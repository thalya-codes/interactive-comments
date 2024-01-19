
export interface ICommentDataBase {
  id: string;
  content: string;
  createdAt: string;
  score: number;
  replyingTo?: string;
  user: {
    image: { png: string; webp: string };
    username: string;
  };
  replies?: ICommentDataBase[] | [],
  isDeleting?: boolean;
  isEditing?: boolean;
  isReplying?: boolean;
  hasAlreadyVoted?: boolean;
}

export interface ICommentData {
  currentUser: {
    image: {png: string, webp: string},
    username: string;
  }
  comments: ICommentDataBase[]
}

export interface ICreateNewComment {
  content: string;
  replyingTo?: string;
}