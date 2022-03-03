import Button from 'components/Button';
import PokemonContainer from 'containers/PokemonContainer';
import { useDispatch } from 'react-redux';
import { countSelector } from 'store/selectors/counterSelectors';
import { decrement, increment } from 'store/slices/counterSlice';

const App = () => {
  const count = countSelector();
  const dispatch = useDispatch();
  return (
    <div>
      Application: ${count}
      <br />
      <Button onClick={() => dispatch(increment())}>+1</Button>
      <Button onClick={() => dispatch(decrement())}>-1</Button>
      <PokemonContainer />
    </div>
  );
};

export default App;
