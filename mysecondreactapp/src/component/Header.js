import React from 'react'


class Header extends React.Component{
    constructor(){
        super()

        this.state ={
            title:'React App',
            keyword :'Enter the user input'
        }

    }

   handleChange = (event) => {
       console.log(event.target.value)
       this.setState({
           keyword:event.target.value ? event.target.value : 'Enter the user input'
        })
   }

    render(){
        return (
            <div>
                    <h1>Welcome to {this.state.title}</h1>
                    <input onChange={this.handleChange}/>
                    <div> {this.state.keyword}</div>
            </div>
        )
    }
}

export default Header