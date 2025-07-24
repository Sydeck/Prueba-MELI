import { renderHook, act } from '@testing-library/react';
import { useQuantity } from '../useQuantity';

describe('useQuantity', () => {
  it('should initialize with default value 1', () => {
    const { result } = renderHook(() => useQuantity());
    expect(result.current.qty).toBe(1);
  });

  it('should not exceed max value', () => {
    const { result } = renderHook(() => useQuantity(1, 3));
    act(() => {
      result.current.inc();
      result.current.inc();
      result.current.inc();
      result.current.inc();
    });
    expect(result.current.qty).toBe(3);
  });

  it('should not go below 1', () => {
    const { result } = renderHook(() => useQuantity(2, 5));
    act(() => result.current.dec());
    act(() => result.current.dec());
    act(() => result.current.dec());
    expect(result.current.qty).toBe(1);
  });

  it('should set value safely within range', () => {
    const { result } = renderHook(() => useQuantity(1, 5));
    act(() => result.current.setQty(10));
    expect(result.current.qty).toBe(5);
    act(() => result.current.setQty(0));
    expect(result.current.qty).toBe(1);
  });
});
