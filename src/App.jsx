import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalForm from './components/JournalForm/JournalForm';
import JournalList from './components/JournalList/JournalList';
import Body from './layouts/Body/Body';
import LeftPanel from './layouts/LeftPanel/LeftPanel';

const App = () => {
  const INITIAL_DATA = [
    // {
    //   id: 1,
    //   title: 'Подготовка к походу',
    //   text: 'Горные походы открывают удивительные природные ландшафты',
    //   date: new Date()
    // },
    // {
    //   id: 2,
    //   title: 'Поход в горы',
    //   text: 'Альпы очень красивые',
    //   date: new Date()
    // }
  ];

  const [items, setItems] = useState(INITIAL_DATA);

  const addItem = item => {
    setItems(oldItems => [
      ...oldItems,
      {
        id: oldItems > 0 ? Math.max(...oldItems.map(i => i.id)) + 1 : 1,
        text: item.text,
        title: item.title,
        date: new Date(item.date)
      }
    ]);
  };

  return (
    <div className="app">
      <LeftPanel>
        <Header />
        <JournalAddButton />
        <JournalList items={items}></JournalList>
      </LeftPanel>
      <Body>
        <JournalForm onSubmit={addItem} />
      </Body>
    </div>
  );
};

export default App;
