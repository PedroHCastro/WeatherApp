import {store} from '../store';
import {Provider} from 'react-redux';

interface Props {
  children: React.ReactNode;
}

const ReduxProvider = ({children}: Props): JSX.Element => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
