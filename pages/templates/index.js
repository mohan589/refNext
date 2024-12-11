import Page, { Tabs } from 'antd'
import DashboardLayout from '../../components/layouts/DashboardLayout';
import { Table } from 'antd';
import { Divider } from 'antd';
import { Button, Flex } from 'antd';
import TemplateTabs from '../../components/templates/TemplateTabs';



const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};

const Template = () => {

  return (
    <>
      <TemplateTabs />
  </>)
}

const TemplatesPage = () => (
  <Template/>
)

TemplatesPage.layout = DashboardLayout;

export default TemplatesPage;