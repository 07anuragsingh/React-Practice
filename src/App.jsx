
// import './App.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
import Header, { Compo } from './Header'
import JSX from './JSX'
import UseCurlyBraces from './01CurlyBraces'
import ClickEvent from './02clickEvent_FunctionCall'
import Counter from './03States'
import Toggle from './04Toggle'
import MultipleCondition from './05MulipleCondition'
import Props from './06Props'
//import { useState } from 'react'
import ChildrenProps from './07ChildrenProps'
import OnChangeEvent from './08ControlledComponent'
import CheckboxHandle from './09CheckboxHandle'
import { RadioBnt, DropDwon } from './10Radio_and_DropDown'
import MapFn from './11MapFn'
import ReuseCompo from './12ReuseComponentUsingMapFn'
import ClockColor from './13.01ClockColor'
import NestedLoop from './14NestedLoops'
import UseEffectCompo from './18UseEffect'
import UserCard from './20CssInline'
import ExternalCss from './21ExternalCss'
import StyledComponent from './23StyledComponent'
import ReactBootstarp from './24React-Bootstrap'
import UseRefExample from './25UseRef';
import StopWatch from './26StopWatchUsingUseRef'
import UncontolledCompo from './27UncontrolledCompo'
import PassFn from './28PassingFnParent'
import SubmitForm from './31useFormStatus'
import UseTransition from './32useTransition'
import DerviedState from './33DerivedState'
import AddUser from './34StateLiftUpAddUser'
import DispayUser from './34StateLiftUpDisplayUser'
import UpdateObject from './35UpdateObject'
import UpdateArray from './36UpdateArray'
import UseAction from './37useActionState'



function App() {
  // Props variable
  // let name ="anurag"

  // props object
  // let obj ={
  //   name:"Aman",
  //   age:"30",
  //   Class:20
  // }


  // props Array
  // let college =["iit","Bit","Nit","iiit"]


  // Dynamic Props
  // const [student,updateStudent] = useState()


  //function Props
  // function handleClick(){
  //   alert("i am function props")
  // }


  //Lifting state
  // const [user,Setuser]=useState('');
  // const [name, setName] = useState('');

  //   const handleClick = ()=>{
  //       setName(user)
  //   }
  return (
    <>
      {/* <Compo/>
     <Header/> */}
      {/* <JSX/> */}
      {/* <UseCurlyBraces/> */}
      {/* <ClickEvent/> */}
      {/* <Counter/> */}
      {/* <Toggle/> */}
      {/* <MultipleCondition/> */}


      {/* <Props name={name} age={32}/> */}
      {/* <Props object={obj}/> */}
      {/* <Props ary={college[1]}/> */}
      {/* {student && <Props name={student}/>}
     <button onClick={()=>updateStudent("anme")}>Click To See name</button> */}

      {/* <Props fn={handleClick}/>
    <Props />  */}

      {/* <ChildrenProps color="red">
        <h2 className='heading'>Hello baby</h2>
      </ChildrenProps>

      <ChildrenProps >
        <h2 className='heading'>Hello baby 2</h2>
      </ChildrenProps>

      <ChildrenProps color="yellow">
        <h2 className='heading'>Hello baby3</h2>
        <h3 style={{color:"lightskyblue"}}>I LOBE U</h3>
      </ChildrenProps>

      <ChildrenProps >
        <h2 className='heading'>Hello baby 4</h2>
      </ChildrenProps> */}
      {/* <OnChangeEvent/>
      <CheckboxHandle/> */}
      {/* <RadioBnt/>
      <DropDwon/> */}
      {/* <MapFn/> */}
      {/* <ClockColor/> */}
      {/* <NestedLoop/> */}
      {/* <UseEffectCompo/> */}
      {/* <UserCard/> */}
      {/* <ExternalCss/> */}
      {/* <StyledComponent/> */}
      {/* <ReactBootstarp/> */}
      {/* <UseRefExample/> */}
      {/* <StopWatch/> */}
      {/* <UncontolledCompo/> */}
      {/* <PassFn/> */}
      {/* <UseRefExample/> */}
      {/* <SubmitForm/> */}
      {/* <UseTransition/> */}
      {/* <DerviedState/> */}
      {/* <AddUser Setuser={Setuser} handleClick={handleClick} />
      <DispayUser name={name} /> */}
      {/* <UpdateObject/> */}
      {/* <UpdateArray/> */}
      <UseAction/>

    </>
  )
}

export default App
