
import './App.css';
import { useEffect, useState } from 'react';
import {Card} from './Card';
import { useDispatch, useSelector } from 'react-redux';
import { itemsReducer } from './Reducer/items';



function App() {
const [item,setItem]=useState('');
const [budget,setBudget]=useState(0);
const list = useSelector((state)=>state.item);
const dispatch = useDispatch();
const [total,setTotal]=useState();
useEffect(()=>{
  setTotal(0);
  list.map((el)=>setTotal((prev)=>prev+=el.budget));
},[list]);
const Submit=()=>{
  
  dispatch(itemsReducer.actions.ADD_ITEMS({
    id:list.length>0?list[list.length-1].id+1:0,
    item,
    budget:+budget
  }))
  setItem('');
  setBudget(0);
}

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
      
      <button onClick={Submit}>제출</button>
        
      <div>
        {list.map((i,index)=><Card key={index} id={i.id} item={i.item} budget={i.budget}/>)}
      </div>
       </div>
   <h1>총 지출:{total}원</h1>
    </div>
  );
}

export default App;
