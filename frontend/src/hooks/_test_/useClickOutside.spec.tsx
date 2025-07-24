import { render, fireEvent } from '@testing-library/react';
import { useClickOutside } from '../useClickOutside';
import React from 'react';

describe('useClickOutside', () => {
  it('should call callback when clicking outside', () => {
    const callback = jest.fn();

    const TestComponent = () => {
      const ref = useClickOutside<HTMLDivElement>(callback);
      return (
        <div>
          <div ref={ref} data-testid="inside">
            Inside
          </div>
          <div data-testid="outside">Outside</div>
        </div>
      );
    };

    const { getByTestId } = render(<TestComponent />);
    const outside = getByTestId('outside');

    fireEvent.mouseDown(outside);
    expect(callback).toHaveBeenCalled();
  });

  it('should NOT call callback when clicking inside', () => {
    const callback = jest.fn();

    const TestComponent = () => {
      const ref = useClickOutside<HTMLDivElement>(callback);
      return (
        <div>
          <div ref={ref} data-testid="inside">
            Inside
          </div>
          <div data-testid="outside">Outside</div>
        </div>
      );
    };

    const { getByTestId } = render(<TestComponent />);
    const inside = getByTestId('inside');

    fireEvent.mouseDown(inside);
    expect(callback).not.toHaveBeenCalled();
  });
});
