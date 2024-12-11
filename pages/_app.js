import React from 'react';
import { ConfigProvider } from 'antd';
import theme from './theme/themeConfig';
import '../styles/globals.css'
import ErrorBoundary from '../components/ErrorBoundary';

const App = ({ Component, pageProps }) => {
  const Layout = Component.layout || (({ children }) => <>{children}</>);

  return (
    <ErrorBoundary>
      <ConfigProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ConfigProvider>
    </ErrorBoundary>
  )
};

export default App;