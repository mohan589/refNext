import { Layout } from 'antd';
import { Card } from 'antd';

const { Content } = Layout;

const ContentComponent = ({ children }) => {
  return (
    <Content
      style={{
        margin: '20px 20px',
      }}
    >
      <Card
        style={{
          width: '100%',
          height: '100%'
        }}
      >
        { children }
      </Card>
    </Content>
  );
};
export default ContentComponent;