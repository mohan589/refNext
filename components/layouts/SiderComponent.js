import React, { useState } from 'react';
import {
  DesktopOutlined,
  PieChartOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import Link from 'next/link';
const { Sider } = Layout;

const SiderComponent = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { },
  } = theme.useToken();

  const items = [
    {
      key: '1',
      icon: <PieChartOutlined />,
      label: <Link href={'/templates'} >Templates</Link>,
    },
    {
      key: '2',
      icon: <DesktopOutlined />,
      label: <Link href={'/firs'} >FIR Info</Link>,
    },
    {
      key: 'sub2',
      label: 'User',
      icon: <UserOutlined />,
      children: [
        {
          key: '9',
          label: 'Option 9',
        },
        {
          key: '10',
          label: 'Option 10',
        },
        {
          key: 'sub3',
          label: 'Submenu',
          children: [
            {
              key: '11',
              label: 'Option 11',
            },
            {
              key: '12',
              label: 'Option 12',
            },
          ],
        },
      ],
    },
  ];
  return (
    <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
      <div className="demo-logo-vertical">FIR</div>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        items={items}
      />
    </Sider>
  );
};

export default SiderComponent;
