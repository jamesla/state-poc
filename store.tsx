import React from 'react';

type ChildrenType = {
  children: React.ReactNode
};

export const StoreContext = React.createContext();

export const StoreProvider = (({ children }: ChildrenType) => {
  const [test] = React.useState(['world']);

  const store = {
    test,
  };

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
});
