import React from 'react';
import Router from './routes';

import {AppContextProvider} from './context/AppContextProvider';
function App(): JSX.Element {
  return (
    <AppContextProvider>
      <Router />
    </AppContextProvider>
  );
}

export default App;
