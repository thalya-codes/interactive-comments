import { renderHook } from '@testing-library/react';
import { useModal } from '../useModal';
import { act } from 'react-dom/test-utils';
import { IRenderedHook } from './interfaces/common';
import { IUseModal } from './interfaces/IUseModal';

describe('useModal tests', () => {
  let renderedUseModal: IRenderedHook<IUseModal>;

  beforeEach(() => {
    renderedUseModal = renderHook(() => useModal());
  });

  it('should be return showModal, onShowModal , onHideModal correctly', () => {
    const { result } = renderedUseModal;
    const { showModal, onHideModal, onShowModal } =
      result.current;

    expect(showModal).toBeNull();
    expect(typeof onShowModal).toBe('function');
    expect(typeof onHideModal).toBe('function');
  });

  it("should be add 'overflow-hidden' class into body and alter 'showModal' state to true", () => {
    const { result } = renderHook(() => useModal());

    act(() => result.current.onShowModal());

    expect(result.current.showModal).toBeTruthy();

    expect(document.body.classList.value).toBe(
      'overflow-hidden'
    );
  });

  it("should be remove 'overflow-hidden' class from the body and alter 'showModal' state to false", () => {
    const { result } = renderedUseModal;

    act(() => {
      result.current.onShowModal();
      result.current.onHideModal();
    });

    expect(result.current.showModal).toBeFalsy();

    expect(document.body.classList.value).not.toBe(
      'overflow-hidden'
    );
  });
});
