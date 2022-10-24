
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

export interface ICommentsData   {
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

    replies: [];

    replyingTo?: string;
};

export interface Props {
    data: IData;
    id: string;
}