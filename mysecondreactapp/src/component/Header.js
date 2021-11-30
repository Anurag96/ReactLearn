import React from 'react'


class Header extends React.Component{
  
  constructor(){
      super();

      this.state = {
          title: 'React Application',
          keyword:'User input here'
      }
  }

  handleChange = (event) => {
    // console.log(event);
    // console.log(event.target.value);
    this.setState({keyword:event.target.value ? event.target.value : 'User input here' });
  }
    render(){
        return (
            <div>
                   <center><h1>Welcome to {this.state.title}</h1>
                        <input type="text" onChange={this.handleChange}/>
                        <h2>{this.state.keyword}</h2>
                   </center>
                   <hr/>
            </div>
        )
    }
}

export default Header