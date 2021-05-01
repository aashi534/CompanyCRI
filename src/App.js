import React,{ Component } from 'react';
//import {BrowserRouter,Route} from 'react-router-dom';
import './App.css';


const ColoredLine = ({ color }) => (
  <hr
      style={{
          color: color,
          backgroundColor: color,
          height: 5
      }}
  />
);

class App extends Component{
  
  render(){
    return(    
      <div className="App">
        <div className="icon">
        <img className="logo" alt="title" src="/images/logo.png"/>
        </div>
        <div className="picture">
          <img className="img1" alt="title" src="/images/1.png" />
          <div className="prize">
          <span className="title"> C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</span>
          <br/>
          <span className="des1"> C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</span>
      <span className="des2">C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. </span>
      
          <img className="img2" alt="title" src="/images/2.png" />
          <span className="gov">Government of India has awarded the<b> "National Energy Conservation Award 2018". </b>Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</span>
          </div>   
       </div>
       <div className="pipe">
       <span className="in">INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. </span>
          <img className="pump" alt="title" src="/images/3.png"/>
          <span style={{fontFamily:"Georgia, 'Times New Roman', Times, serif",fontSize:15}}>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </span>
          <br/>
          <div style={{ borderTop: "2px solid #ff0000 ", marginLeft: 20, marginRight: 20 }}></div>
          <br/>
          <span style={{fontFamily:"Georgia, 'Times New Roman', Times, serif",fontSize:15}}><b>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</b></span>
          <br/>
          <span>CHEMICALS & PROCESS | POWER | WATER & WASTE WATER | OILS & GAS | PHARMA | SUGARS & DISTILLERIES | PAPER & PULP | MARINE & DEFENCE | METAL & MINING | FOOD & BEVERAGE | PETROCHEMICAL & REFINERIES | SOLAR | BUILDING | HVAC | FIRE FIGHTING | AGRICULTURE & RESIDENTIAL</span>
          </div>
          <img className="footer" src="/images/foot.png" />
       
      </div>
        
    );
  }
}
export default App;

/*import Todos from './Todos';
import AddToDo from './AddToDo';*/
/*import Ninjas from './Ninjas';
import Ninja from './Ninja';
import AddNinja from './AddNinja';

class App extends Component {
  state={
    ninjas:[
      {name:"Ryu" ,age:"25" ,belt:"black",id:1}
    ]
  }
  addNinja=(ninja)=>{
    ninja.id=Math.random();
    let ninjas=[...this.state.ninjas,ninja]
    this.setState({
      ninjas:ninjas
    })
  }
  deleteNinja=(id)=>{
      let ninjas=this.state.ninjas.filter(ninja=>{
        return ninja.id!==id
      });
      this.setState({
        ninjas:ninjas
      })
  }
  comoponentDidMount(){
    console.log('component mounted');
  }
  componentDidUpdate(prevProps,prevState){
    console.log('component updated');
    console.log(prevProps,prevState);
  }
  render() {
  
  return (
   
     <div>
       <h1> My first React App!</h1>
       <Ninjas ninjas={this.state.ninjas} />
       <Ninja ninjas={this.state.ninjas} />
       <Ninja deleteNinja={this.deleteNinja} ninjas={this.state.ninjas}/>
        <AddNinja addNinja={this.addNinja}/>
     </div>
  
  );
}
}

export default App;*/
/*class App extends Component{
  state={
    todos:[
      {id:1,content:"Study"},
      {id:2,content:"Read news"}
    ]
  }
  deleteTodo=(id)=>{
    console.log(id);
    const todos=this.state.todos.filter(todo=>{
      return todo.id!==id
    });
    this.setState({
      todos:todos
    })
  }
  addTodo=(todo)=>{
    todo.id=Math.random();
    let todos=[...this.state.todos,todo];
    this.setState({
      todos:todos
    })
  }
  render(){
    return(
      <div className="todo-app container">
          <h1 className="center blue-text">Todo</h1>
          <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
          <AddToDo />
      </div>
    )
  }
}
<div className="footer">
            <hr style={{width:"90%"}}/>
            
            <div className="iconContainer">
                <a href="">
                <i className="fab fa-instagram-square"></i>
                </a>
                <a href="">                
                <i className="fab fa-facebook-square"></i> 
                </a>
                <a href="">
                <i className="fab fa-twitter-square"></i>
                </a>
            </div>
        </div>

export default App;*/
