import React from 'react';
import { Tabs } from 'antd';
import { TabsProps } from 'antd';
import Cb from './Cb'
import Mv from './Mv'

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps['items'] = [
  {
    key: '1',
    label: `Tab 1`,
    children: `Content of Tab Pane 1`,
  },
  {
    key: '2',
    label: `Cumhurbaşkanlığı`,
    children: <Cb />,
  },
];

const App = () => <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;

export default App;