import { ICommentDataBase } from "@/interfaces/ICommentsData";
import { findReply } from "@/utils/findReply";
import { findComment } from "@/utils/findComment";
import { IHandleVotes } from "@/interfaces/IHandleVotes";

export function handleVotes({
    id,
    parentId,
    state,
    action = 'ADD'
}: IHandleVotes): void {
    const foundedComment = parentId
        ? findReply<ICommentDataBase>({
            id,
            parentId,
            state,
        })
        : findComment<ICommentDataBase>({
            id,
            state,
        });

    if (!foundedComment.hasAlreadyVoted && action === 'ADD') {
        foundedComment.score++
        foundedComment.hasAlreadyVoted = true;
        return;
    };

    if (foundedComment.hasAlreadyVoted && action === 'REMOVE') {
        foundedComment.score--
        foundedComment.hasAlreadyVoted = false;
    };
}