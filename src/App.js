import React from 'react';
import { Tabs } from 'antd';
import Cb2 from './components/Cb2'

const onChange = (key) => {
  console.log(key);
};

const items = [
  {
    key: '1',
    label: `Cumhurbaşkanlığı Seçimi`,
    children: <Cb2 />,
  }
];

const App = () => <Tabs defaultActiveKey="1" items={items} onChange={onChange}  className='text-white'/>;

export default App;