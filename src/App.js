import './App.css';
import React,{useState} from 'react';

function App() {
var [children,setChildren]=useState(0);
const [adult, setAdult] = useState(1);
const [room, setRoom] = useState(1);

const addRoom=()=>{  
  var newRoom=room+1;
  if(room<5){
  setRoom(newRoom);
  if((adult+children)<newRoom){
    const newAdult=adult+(newRoom-(adult+children));
    setAdult(newAdult);
  }
  }
  else{
    setRoom(5);
  }
}

const subRoom=()=>{
  var newRoom=room-1;
  if(room>1){
    setRoom(newRoom);
    if((adult+children)>(room-1)*4){
      const totalRemain=(adult+children)-(room-1)*4;
      if(children>=totalRemain){
        const newChildren=children-totalRemain;
        setChildren(newChildren);
      }
      else if(children>0 && children<totalRemain){
        const newAdult=adult-(totalRemain-children);
        setAdult(newAdult);
        setChildren(0);
      }
      else if(children===0){
        const newAdult=adult-totalRemain;
        setAdult(newAdult);
      }
    }
  }
}
const addAdult=()=>{
  const newAdult=adult+1;
  if((adult+children)<room*4){
    setAdult(newAdult);
  }
  else if((newAdult+children)>room*4)
  {
    const newRoom=room+1;
    setRoom(newRoom);
    setAdult(newAdult);
  }
}
const subAdult=()=>{
  const newAdult=adult-1;
  if(adult>1){
    
    if(adult===room && children===0){
      const newRoom=room-1;
      setRoom(newRoom);
    }
    else if((children+newAdult)<room){
      const newRoom=room-1;
      setRoom(newRoom);
    }
    setAdult(newAdult);
  }
}
const addChild=()=>{
  const newChildren=children+1;
  if((adult+children)<room*4){
    setChildren(newChildren);
  }
  else if((newChildren+adult)>room*4)
  {
    const newRoom=room+1;
    setRoom(newRoom);
    setChildren(newChildren);
  }
}

const subChild=()=>{
  const newChildren=children-1;
  if(children>0){
    
    if((newChildren+adult)<room){
      const newRoom=room-1;
      setRoom(newRoom);
    }
    setChildren(newChildren);
  }
}
  return (
    <div className="App">
      <div className="heading"><i class="fas fa-users"></i> Choose no of <b>People</b> </div>
      <div className="room">
        <div className="row">
          <div className="col">
            <i class="fas fa-bed"></i>Rooms
          </div>
          <div className="col">
            {room>1?<div className="btn sub" onClick={subRoom}>-</div>:<div className="btn sub off">-</div>}
            <span>{room}</span>
            {room<5?<div className="btn add" onClick={addRoom}>+</div>:<div className="btn add off">+</div>}
            
          </div>

        </div>
        <div className="row">
        <div className="col">
        <i class="fas fa-user"></i>Adults
        </div>
        <div className="col">

          {(adult>1)?<div className="btn sub" onClick={subAdult}>-</div>:<div className="btn sub off">-</div>}

            <span>{adult}</span>

         {(children+adult)!==20?<div className="btn add" onClick={addAdult}>+</div>:<div className="btn add off">+</div>}

        </div>

        </div>
        <div className="row">
        <div className="col">
        <i class="fas fa-child"></i>Children
        </div>
        <div className="col">
          {children>0?<div className="btn sub" onClick={subChild}>-</div>:<div className="btn sub off">-</div>}
        
        <span>{children}</span>
        {(children+adult)===20?<div className="btn add off">+</div>:<div className="btn add" onClick={addChild}>+</div>}
        
        </div>

        </div>

      </div>
    </div>
  );
}

export default App;
