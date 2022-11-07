import React from 'react';
import PropTypes from 'prop-types';

type ChildrenType = {
  children: React.ReactNode
};

export const StoreContext = React.createContext({
  test: [''] 
});

export const StoreProvider = (({ children }: ChildrenType) => {
  const [test] = React.useState(['']);
  //const test =  "world"

  const store = {
    test: test,
  };

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
});
