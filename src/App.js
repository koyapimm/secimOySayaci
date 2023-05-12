import React from 'react';
import { Tabs } from 'antd';
import { TabsProps } from 'antd';
import Cb from './components/Cb'
import Mv from './components/Mv'

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps['items'] = [
  {
    key: '1',
    label: `Cumhurbaşkanlığı Seçimi`,
    children: <Cb />,
  },
  {
    key: '2',
    label: `Milletvekilliği Seçimi`,
    children: <Mv />,
  },
];

const App = () => <Tabs defaultActiveKey="1" items={items} onChange={onChange}  className='text-white'/>;

export default App;