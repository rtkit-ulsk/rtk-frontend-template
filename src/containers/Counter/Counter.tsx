import Button from 'components/Button';
import { useDispatch } from 'react-redux';
import { countSelector } from 'store/selectors/counterSelectors';
import { decrement, increment } from 'store/slices/counterSlice';

import s from './Counter.module.css';

const Counter = () => {
  const count = countSelector();
  const dispatch = useDispatch();
  return (
    <div className={s.root}>
      Application: ${count}
      <br />
      <Button onClick={() => dispatch(increment())}>+1</Button>
      <Button onClick={() => dispatch(decrement())}>-1</Button>
    </div>
  );
};

export default Counter;
