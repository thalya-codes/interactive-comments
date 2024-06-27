import { handleVotes } from '../../handleVotes';
import { ICommentBaseTestParams } from '../interfaces/IHandleVotes';

export function incrementAndAlterVoteStatus({
  comment,
  parentId,
  state,
  expectedScore,
}: ICommentBaseTestParams) {
  handleVotes({
    id: comment.id,
    state,
    action: 'ADD',
    parentId,
  });

  expect(comment.hasAlreadyVoted).toBeTruthy();
  expect(comment.score).toBe(expectedScore);
}

/**@description Ao executar a função handleVote passando um comentário/reply cujo o usuário atual já tenha votado, o valor do score e o status
 * do comentário/reply não devem ser alterados.
 *
 */
export function maintainScoreAndStatusVoteValue({
  comment,
  parentId,
  state,
}: ICommentBaseTestParams) {
  const originalScore = comment.score;

  handleVotes({
    id: comment.id,
    state,
    action: 'ADD',
    parentId,
  });

  expect(comment.hasAlreadyVoted).toBeTruthy();
  expect(comment.score).toBe(originalScore);
}

export function decrementVotesAndAlterVoteStatus({
  comment,
  state,
  parentId,
  expectedScore,
}: ICommentBaseTestParams) {
  handleVotes({
    id: comment.id,
    action: 'REMOVE',
    state,
    parentId,
  });

  expect(comment.hasAlreadyVoted).toBeFalsy();
  expect(comment.score).toBe(expectedScore);
}

/**@description Ao executar o handleVote consecutivamente o valor do voto e o status do comentário/reply deve ser decrementado
 * apenas uma vez.
 *
 */
export function decrementOnlyOnce({
  comment,
  state,
  parentId,
  expectedScore,
}: ICommentBaseTestParams) {
  handleVotes({
    id: comment.id,
    state,
    action: 'REMOVE',
    parentId,
  });

  handleVotes({
    id: comment.id,
    state,
    action: 'REMOVE',
    parentId,
  });

  expect(comment.score).toBe(expectedScore);
}

/**@description Ao executar o handleVote consecutivamente o valor do voto e o status do comentário/reply deve ser decrementado
 * apenas uma vez.
 *
 */
export function incrementOnlyOnce({
  comment,
  state,
  parentId,
  expectedScore,
}: ICommentBaseTestParams) {
  handleVotes({
    id: comment.id,
    state,
    action: 'ADD',
    parentId,
  });

  handleVotes({
    id: comment.id,
    state,
    action: 'ADD',
    parentId,
  });

  expect(comment.score).toBe(expectedScore);
}
