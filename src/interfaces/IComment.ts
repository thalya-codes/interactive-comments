import React from 'react';

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

    replies: [];

    replyingTo?: string;
};

export interface IRepliesData {

}
export interface IProps {
    comments: ICommentsData[];
    comment: ICommentsData;
    isReply: boolean; 
    setComments: React.Dispatch<React.SetStateAction<ICommentsData[]>>
};