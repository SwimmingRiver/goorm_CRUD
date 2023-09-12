
import './App.css';
import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { itemsReducer } from './Reducer/items';


      

function App() {
const [item,setItem]=useState('');
const [budget,setBudget]=useState(0);
const list = useSelector((state)=>state.item);
const dispatch = useDispatch();
const [editMode,setEditMode]=useState(false);
const [total,setTotal]=useState();
const [selectedId,setSelectedId] =useState(0);
useEffect(()=>{
  setTotal(0);
  list.map((el)=>setTotal((prev)=>prev+=el.budget));
},[list]);
const Submit=()=>{
  if(editMode){
    console.log(selectedId)
   dispatch(itemsReducer.actions.EDIT_ITEMS({
      id:selectedId,
      item:item,
      budget:+budget,
    }));
    
  }
  else{
  dispatch(itemsReducer.actions.ADD_ITEMS({
    id:list.length>0?list[list.length-1].id+1:0,
    item,
    budget:+budget
  }))}
  setItem('');
  setBudget(0);
  setEditMode(false)
}

const Card=(props)=>{
  const dispatch = useDispatch()
  const Edit=()=>{
    setItem(props.item);
    setBudget(props.budget);
    setEditMode(true);
    setSelectedId(props.id);
    console.log(editMode);
  };

  const Delete=()=>{
    dispatch(itemsReducer.actions.DELETE_ITEMS(props.id))
  };
  return(<div className="CardWrappr">
    
    <h1>{props.item}</h1>
    <h1>{props.budget}</h1>
    <div>
    <button onClick={Edit}>edit</button>
    <button onClick={Delete}>delete</button>
    </div>
  </div>)
  };
  return (
    <div className="App">
      <header>
        <h2>메세지 수정/삭제</h2>
        <h1>예산 계산기</h1>
      </header>

      <div className='Wrapper'>
       <div id="item">
        <div>
        <h2>지출항목</h2>
        <input value={item} type='text' placeholder='예)렌트비' onChange={(e)=>{setItem(e.target.value)}}/>
        </div>
       <div>
       <h2>비용</h2>
        <input value={budget} type='number' onChange={(e)=>{setBudget(e.target.value)}}/>
       </div>
        
      </div>
      
      <button onClick={Submit}>{editMode?"수정":"제출"}</button>
        
      <div>
        {list.map((i,index)=><Card key={index} id={i.id} item={i.item} budget={i.budget}/>)}
      </div>
       </div>
   <h1>총 지출:{total}원</h1>
    </div>
  );
}

export default App;
