import { Component } from "react";

class AppClass extends Component{
    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
    }
    handleClickInc = () => {
        this.setState((prevState) => ({count: prevState.count + 1}))
    }
    
    handleClickDec = () => {
        this.setState((prevState) => ({count: prevState.count - 1}))
    }

    handleClickReset = () => {
        this.setState({count: 0})
    }
    render() {
        return(
            <>
            <p>{this.state.count}</p>
            <button onClick={this.handleClickInc}>+</button>
            <button onClick={this.handleClickDec}>-</button>
            <button onClick={this.handleClickReset}>Reset</button>
            
            
            </>
        )
    }
}




export default AppClass