import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalForm from './components/JournalForm/JournalForm';
import JournalList from './components/JournalList/JournalList';
import Body from './layouts/Body/Body';
import LeftPanel from './layouts/LeftPanel/LeftPanel';

const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('data'));
    if (data) {
      setItems(
        data.map(item => ({
          ...item,
          date: new Date(item.date)
        }))
      );
    }
  }, []);

  useEffect(() => {
    if (items.length) {
      console.log('Запись');
      localStorage.setItem('data', JSON.stringify(items));
    }
  }, [items]);

  const addItem = item => {
    setItems(oldItems => [
      ...oldItems,
      {
        id: oldItems.length > 0 ? Math.max(...oldItems.map(i => i.id)) + 1 : 1,
        post: item.post,
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
