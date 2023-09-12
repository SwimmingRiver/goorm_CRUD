
import './App.css';
import { useState } from 'react';



function App() {
const [item,setItem]=useState('');
const [budget,setBudget]=useState(0);
const Submit=()=>{
  console.log(item,budget);
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
       <div>
       <h2>지출항목</h2>
        <input value={item} type='text' placeholder='예)렌트비' onChange={(e)=>{setItem(e.target.value)}}/>
        <h2>비용</h2>
        <input value={budget} type='number' onChange={(e)=>{setBudget(e.target.value)}}/>
      <button onClick={Submit}>제출</button>
       </div>
        
      </div>
   
    </div>
  );
}

export default App;
