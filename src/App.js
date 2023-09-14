
import './App.css';
import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { itemsReducer } from './Reducer/items';

import MessageBox from './Components/MessageBox';
import Form from './Components/Form';
import ItemList from './Components/ItemList';
import Card from './Components/Card';

function App() {
  const [item, setItem] = useState('');
  const [budget, setBudget] = useState(0);
  const [editMode, setEditMode] = useState(false);
  const [total, setTotal] = useState();
  const [selectedId, setSelectedId] = useState(0);
  const [messageOn, setMessageOn] = useState('');

  const list = useSelector((state) => state.item);
  const dispatch = useDispatch();

  useEffect(() => {
    setTotal(0);
    list.map((el) => setTotal((prev) => prev += el.budget));
  }, [list]);

  const Submit = (e) => {
    e.preventDefault();
    if (editMode) {
      dispatch(itemsReducer.actions.EDIT_ITEMS({
        id: selectedId,
        item: item,
        budget: +budget,
      }));
      setMessageOn("수정");
    }
    else {
      dispatch(itemsReducer.actions.ADD_ITEMS({
        id: list.length > 0 ? list[list.length - 1].id + 1 : 0,
        item,
        budget: +budget
      }))
      setMessageOn("생성");
    }
    setItem('');
    setBudget(0);
    setEditMode(false)
  }

  const Reset = () => {
    dispatch(itemsReducer.actions.RESET_ITEMS());
  }






  useEffect(() => {
    setTimeout(() => { setMessageOn("") }, 2000)
  }, [messageOn]);

  return (
    <div className="App">
      <header>
        {messageOn === "" ? null : <MessageBox messageOn={messageOn} />}
        <h1>예산 계산기</h1>
      </header>

      <div className='Wrapper'>
        <Form item={item}
          setItem={setItem}
          budget={budget}
          setBudget={setBudget}
          editMode={editMode}
          setEditMode={setEditMode}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
          setMessageOn={setMessageOn}
          Submit={Submit}
          Reset={Reset} />

        <ItemList list={list}
          setItem={setItem}
          setBudget={setBudget}
          setEditMode={setEditMode}
          setSelectedId={setSelectedId}
          setMessageOn={setMessageOn}
          itemsReducer={itemsReducer}
          Card={Card}
        />
        <div>
          <button id='resetBtn' onClick={Reset}>
            <p>목록 지우기</p>
            <span id='resetIcon' class="material-symbols-outlined">delete</span>
            </button>
        </div>
      </div>
      <h1 id='total'>총 지출:{total}원</h1>
    </div>
  );
}

export default App;
