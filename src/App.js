
import './App.css';
import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { itemsReducer } from './Reducer/items';


function App() {
const [item,setItem]=useState('');
const [budget,setBudget]=useState(0);
const [editMode,setEditMode]=useState(false);
const [total,setTotal]=useState();
const [selectedId,setSelectedId] =useState(0);
const [messageOn,setMessageOn]=useState('');

const list = useSelector((state)=>state.item);
const dispatch = useDispatch();

useEffect(()=>{
  setTotal(0);
  list.map((el)=>setTotal((prev)=>prev+=el.budget));
},[list]);
const Submit=(e)=>{
  e.preventDefault();
  if(editMode){
   dispatch(itemsReducer.actions.EDIT_ITEMS({
      id:selectedId,
      item:item,
      budget:+budget,
    }));
    setMessageOn("수정");
  }
  else{
  dispatch(itemsReducer.actions.ADD_ITEMS({
    id:list.length>0?list[list.length-1].id+1:0,
    item,
    budget:+budget
  }))
  setMessageOn("생성");
}
  setItem('');
  setBudget(0);
  setEditMode(false)
}

const Reset=()=>{
  dispatch(itemsReducer.actions.RESET_ITEMS());
}

const Card=(props)=>{
      const dispatch = useDispatch()
      const Edit=()=>{
        setItem(props.item);
        setBudget(props.budget);
        setEditMode(true);
        setSelectedId(props.id);
      };

      const Delete=()=>{
        dispatch(itemsReducer.actions.DELETE_ITEMS(props.id))
        setMessageOn("삭제");
      };
      return(
      <div className="CardWrapper">
        <h1>{props.item}</h1>
        <h1>{props.budget}</h1>
        <div id='btnGroup'>
        <button onClick={Edit}><span class="material-symbols-outlined">edit</span></button>
        <button onClick={Delete}><span id='delete' class="material-symbols-outlined">delete</span></button>
        </div>
      </div>)
      };



  const MessageBox=()=>{
    if(messageOn === "생성"){
      return <h1 id='messageBox'>아이템이 생성되었습니다.</h1>
    }
    if(messageOn === "수정"){
      return <h1 id='messageBox'>아이템이 수정되었습니다.</h1>
    }
    if(messageOn === "삭제"){
      return <h1 id='deleteBox'>아이템이 삭제되었습니다.</h1>
    }
  }
  
useEffect(()=>{
  setTimeout(()=>{setMessageOn("")},2000)
},[messageOn]);

  return (
    <div className="App">
      <header>
        {messageOn===""?null:<MessageBox/>}
        <h1>예산 계산기</h1>
      </header>

      <div className='Wrapper'>
      <form onSubmit={Submit}>
       <div id="item">
        <div>
        <h2>지출항목</h2>
        <input required value={item} type='text' placeholder='예)렌트비' onChange={(e)=>{setItem(e.target.value)}}/>
        </div>

       <div>
       <h2>비용</h2>
        <input value={budget} type='number' onChange={(e)=>{setBudget(e.target.value)}}/>
       </div>
       </div>
      
     
      <button id='submit'>
      {editMode?<p>수정</p>:<p>제출</p>}
      <span id='send' class="material-symbols-outlined">send</span>
      </button>
      </form>
      <div id='list'>
        {list.map((i,index)=><Card key={index} id={i.id} item={i.item} budget={i.budget}/>)}
      </div>

      <div>
      <button id='resetBtn' onClick={Reset}><p>목록 지우기</p><span id='resetIcon' class="material-symbols-outlined">delete</span></button>
      </div>
     
       </div>
   <h1 id='total'>총 지출:{total}원</h1>
    </div>
  );
}

export default App;
