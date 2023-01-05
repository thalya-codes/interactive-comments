
export interface IData {
    currentUser: {
        image: {
            png?: string;
            webp?: string;
        }

        username: string
    };

    comments: ICommentsData[];
};

export interface ICommentsData {
    id: number;
    content: string;
    createdAt: string;
    score: number;

    user: {
        image: {
            png?: string;
            webp?: string;
        };
        
        username: string;
    };  

    replies: ICommentsData[];

    replyingTo?: string;
};

export interface IProps {
    comment: ICommentsData;
    deleteComment: (id:number, isReply: boolean) => void;
    isReply: boolean;    
};