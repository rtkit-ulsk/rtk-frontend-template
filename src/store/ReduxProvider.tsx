import { Provider } from 'react-redux';

import { store } from './store';

interface IReduxProviderProps {
  children: React.ReactNode;
}

const ReduxProvider = (props: IReduxProviderProps) => {
  return <Provider store={store}>{props.children}</Provider>;
};

export default ReduxProvider;
