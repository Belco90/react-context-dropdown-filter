import React from 'react';

const DropdownContext = React.createContext();

const DropdownProvider = ({ children, ...remainingProps }) => (
  <DropdownContext.Provider value={remainingProps}>
    {children}
  </DropdownContext.Provider>
);

const withDropdownContext = Component => props => (
  <DropdownContext.Consumer>
    {context => {
      if (context === undefined) {
        throw new Error(
          'withDropdownContext must be used within a DropdownProvider'
        );
      }

      const { getComponentRef, onChange } = context;
      return <Component {...props} ref={getComponentRef} onChange={onChange} />;
    }}
  </DropdownContext.Consumer>
);

export { DropdownProvider, withDropdownContext };
