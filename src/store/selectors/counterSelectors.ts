import { useSelector } from 'react-redux';
import { RootState } from 'store/store';

export const countSelector = () => {
  return useSelector((state: RootState) => state.counter.value);
};
