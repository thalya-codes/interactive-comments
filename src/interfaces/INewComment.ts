import React from 'react';
import IAvatar from "./IAvatar";
import { ICommentsData, IData } from './IComment';

export default interface IProps extends IAvatar{
    btnText: string;
    data: IData;
    comments: ICommentsData[],
    setComments: React.Dispatch<React.SetStateAction<ICommentsData[]>>
}