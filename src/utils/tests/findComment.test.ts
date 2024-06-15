import { findComment } from '../findComment';
import { mock_comments } from './mock.utils';

describe('findComment function', () => {
  it('should return the correct comment for the given id', () => {
    const foundedComment = findComment({
      id: mock_comments[0].id,
      state: mock_comments,
    });
    const expectedFoundedComment = mock_comments[0];

    expect(foundedComment).toBe(expectedFoundedComment);
  });

  it('should return the correct index of the comment for the given id', () => {
    const foundedCommentIndex = findComment({
      id: mock_comments[0].id,
      state: mock_comments,
      method: 'findIndex',
    });

    expect(foundedCommentIndex).toBe(0);
  });

  it('should throw an error when passing an invalid ID', () => {
    expect(() =>
      findComment({
        id: 'id--1',
        state: mock_comments,
      })
    ).toThrow(`Comment with ID id--1 not founded.`);
  });
});
