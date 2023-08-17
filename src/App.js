import logo from './logo.svg';
import './App.css';
import ItemList from './ItemList';
import Counter from './Counter';
import UserData from './Userfetch';
import Toggle from './Toggle';
import ParentComponent from './ParentComponent';
import Greeting from './Greeting';
import TaskList from './TaskList';
import MyButton from './MyButton';

function App() {
  const items=[{
    id:1,
    name:"Thaslima"
  },
{
    id:2,
    name:"Banu"
  }]
  return (
     <>
     <ItemList items={items}/>
     <Counter/>
     <UserData/>
     <Toggle/>
     <ParentComponent/>
     <Greeting/>
     <TaskList/>
     <MyButton/>
     </>
  );
}

export default App;
