import React, { Component } from 'react';
import '../styles/Square.css';

class Square extends Component {

	constructor(props){
		super(props);
		this.state = {
			index:this.props.index,
			value:this.props.value,
			bgColor:this.props.bgColor,
		};
	}

	handleClick = () => {
		if(this.state.bgColor == 'white'){
			this.setState({
				bgColor:'blue',
			})
		}else{
			this.setState({
				bgColor:'white',
			})
		}
	}

	handleChange = (event) => {
		this.props.onChange(this.state.index, event.target.value);
	}
 
  	render() {
	    return (
	      <input 
	      	className={this.props.className}
	      	style={{backgroundColor:this.props.bgColor}}
	      	onChange={this.handleChange}
	      	value={this.props.value}
	      />
    );
  }
}

export default Square;
