import React, { useState } from 'react';

import { Layout, theme } from 'antd';
const { Header, Content, Footer } = Layout;
import SiderComponent from './SiderComponent'
import ContentComponent from './ContentComponent';

const NavComponent = ({children}) => {
  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <SiderComponent/>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <ContentComponent>
          {children}
        </ContentComponent>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          All Rights Reserved For FIR App 2024
        </Footer>
      </Layout>
    </Layout>
  );
};
export default NavComponent;