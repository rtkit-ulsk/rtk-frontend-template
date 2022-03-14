import Counter from 'containers/Counter';
import PokemonContainer from 'containers/PokemonContainer';
import ReduxProvider from 'store/ReduxProvider';

const App = () => {
  return (
    <ReduxProvider>
      <Counter />
      <PokemonContainer />
    </ReduxProvider>
  );
};

export default App;
