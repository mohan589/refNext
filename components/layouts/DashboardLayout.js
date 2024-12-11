import React from 'react';

import NavComponent from './NavComponent'

const DashboardLayout = ({ children }) => {
  return (
    <>
      <NavComponent>
        {children}
      </NavComponent>
    </>
  );
};

export default DashboardLayout;