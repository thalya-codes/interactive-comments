export default interface ICommentsData {
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
};