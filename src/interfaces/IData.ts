import ICommentsData from "./ICommentsData";

export default interface IData {
    currentUser: {
        image: {
            png?: string;
            webp?: string;
        }

        username: string
    };

    comments: ICommentsData[];
};
  