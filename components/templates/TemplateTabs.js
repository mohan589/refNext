import React from "react";
import { Tabs, Button, Table } from "antd";
import CreateTemplate from "./CreateTemplate";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ["descend"],
  },
  {
    title: "Age",
    dataIndex: "age",
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: "Address",
    dataIndex: "address",
  },
];

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
  },
  {
    key: "4",
    name: "Jim Red",
    age: 32,
    address: "London No. 2 Lake Park",
  },
];

const onChange = (key) => {
  console.log(key);
};

const TabContent = ({ tabKey }) => {
  const isTemplatesTab = tabKey === "Templates";
  return (
    <div>
      {isTemplatesTab && (
        <Table
          columns={columns}
          dataSource={data}
          onChange={onChange}
          pagination={{ pageSize: 5 }}
        />
      )}
      {tabKey === "New Template" && <CreateTemplate />}
    </div>
  );
};

const TemplateTabs = () => {
  const tabItems = [
    {
      key: "Templates",
      label: "Templates",
      children: <TabContent tabKey="Templates" />,
    },
    {
      key: "CreateTemplate",
      label: "Create Template",
      children: <TabContent tabKey="New Template" />,
    },
    {
      key: "Tab 3",
      label: "Tab 3",
      children: <TabContent tabKey="Tab 3" />,
    },
  ];

  return (
    <div style={{ padding: "24px", background: "#f0f2f5" }}>
      <Tabs
        items={tabItems}
        more={
          <div style={{ display: "flex", gap: "8px" }}>
            <Button>All Templates</Button>
            <Button type="primary">Create Template</Button>
          </div>
        }
      />
    </div>
  );
};

export default TemplateTabs;
