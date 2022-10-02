import ICommentsData from "./ICommentsData";

export default interface IData {
    currentUser: {
        image: {
            png?: string;
            webp?: string;
        }
    };

    comments: ICommentsData[];
};
  