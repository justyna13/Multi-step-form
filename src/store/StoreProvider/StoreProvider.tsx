import React, { createContext, useState } from 'react';

export const AppStateContext = createContext({});

export function AppProvider({ children }: { children: React.ReactNode }) {
  const value = useState({});
  return (
    <AppStateContext.Provider value={value}>
      {children}
    </AppStateContext.Provider>
  );
}
