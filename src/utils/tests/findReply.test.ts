import { IComment } from '@/interfaces/IComment';
import { findReply } from '../findReply';
import {
  mock_comments,
  mock_parent_comment,
  mock_reply_comment,
} from './mock.utils';

jest.mock('../findComment', () => ({
  findComment: () => mock_parent_comment,
}));

describe('findReply function', () => {
  it('should return a reply with the given ID', () => {
    const foundedReply = findReply<IComment>({
      id: mock_reply_comment.id,
      parentId: mock_parent_comment.id,
      state: mock_comments,
    });

    expect(foundedReply).toEqual(mock_reply_comment);
  });

  it('should return the correct index of the reply for the given id', () => {
    const foundedReplyIndex = findReply({
      id: mock_reply_comment.id,
      parentId: mock_parent_comment.id,
      state: mock_comments,
      method: 'findIndex',
    });

    expect(foundedReplyIndex).toBe(0);
  });

  it('should throw an error when passing an invalid ID', () => {
    expect(() =>
      findReply({
        id: 'invalid-id',
        parentId: mock_parent_comment.id,
        state: mock_comments,
      })
    ).toThrow(/^Reply with ID invalid-id not founded.$/);
  });
});
