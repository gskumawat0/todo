import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props ){
    super(props);
    this.state = {
      inputVal : '',
      todo : []
    };
  }
  handleChange = (event)=>{
    this.setState({inputVal: event.target.value});  
  }

  delTodo = (i)=>{
	  this.setState({
		  todo: this.state.todo.filter((todo, idx)=> idx !== i)
	  })
  }
  
  handleSubmit = (e)=>{
	  e.preventDefault();
	  let {inputVal, todo} = this.state;
    if(inputVal && !todo.includes(inputVal) ){
		this.setState({
		  todo:[...this.state.todo, this.state.inputVal],
		  inputVal: ''
		});
	}
	else{
		this.setState({
			inputVal: ''
		})
	}
  }
  
  render() {
    let {todo} = this.state;
    
    return (
      <div className="main">
		  <h1 className='main-heading'>My ToDo</h1>
        <div className='todo'>
          <h1>Have fun and Complete below tasks </h1>
          {todo.length > 0 ?  <ul className='list-unstyled'>
            {todo.map((todo,i)=><li key={i}>{todo} <span className='del-btn' onClick={this.delTodo.bind(this, i)}>x</span></li>) }
          </ul> : <p className='p'>All Done. Take a break</p>}
        </div> 
        <form onSubmit={this.handleSubmit} className='form'>
          <input  type='text' value={this.state.inputVal} onChange={this.handleChange} placeholder='what are you planning to do'/>
          <button type='submit' className='btn-submit'> Add</button>
        </form>
      </div>
    );
  }
}

export default App ;
