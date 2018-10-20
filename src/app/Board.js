import React, { Component } from 'react';
import '../styles/Board.css'
import Square from './Square'


class Board extends Component {

	constructor(props){
		super(props);
		this.state = {
			squares: this.props.squares,
			bgColors: this.props.bgColors

		}
	}

	handleChange(index, value){
		this.props.onChange(index,value)
	}

  render() {
    return (
    <div>
	      <div>
		      <div className='Row'>
		      	<Square index={0} bgColor={this.state.bgColors[0]} value={this.state.squares[0]} onChange={this.handleChange.bind(this)} className="Box top-left"/>
		      	<Square index={1} bgColor={this.state.bgColors[1]} value={this.state.squares[1]} onChange={this.handleChange.bind(this)} className="Box top"/>
		      	<Square index={2} bgColor={this.state.bgColors[2]} value={this.state.squares[2]} onChange={this.handleChange.bind(this)} className="Box top-right"/>
		      	<Square index={3} bgColor={this.state.bgColors[3]} value={this.state.squares[3]} onChange={this.handleChange.bind(this)} className="Box top-left"/>
		      	<Square index={4} bgColor={this.state.bgColors[4]} value={this.state.squares[4]} onChange={this.handleChange.bind(this)} className="Box top"/>
		      	<Square index={5} bgColor={this.state.bgColors[5]} value={this.state.squares[5]} onChange={this.handleChange.bind(this)} className="Box top-right"/>
		      	<Square index={6} bgColor={this.state.bgColors[6]} value={this.state.squares[6]} onChange={this.handleChange.bind(this)} className="Box top-left"/>
		      	<Square index={7} bgColor={this.state.bgColors[7]} value={this.state.squares[7]} onChange={this.handleChange.bind(this)} className="Box top"/>
		      	<Square index={8} bgColor={this.state.bgColors[8]} value={this.state.squares[8]} onChange={this.handleChange.bind(this)} className="Box top-right"/>
		      </div>
		      <div className='Row'>
		      	<Square index={9} bgColor={this.state.bgColors[9]} value={this.state.squares[9]} onChange={this.handleChange.bind(this)} className="Box left"/>
		      	<Square index={10} bgColor={this.state.bgColors[10]} value={this.state.squares[10]} onChange={this.handleChange.bind(this)} className="Box"/>
		      	<Square index={11} bgColor={this.state.bgColors[11]} value={this.state.squares[11]} onChange={this.handleChange.bind(this)} className="Box right"/>
		      	<Square index={12} bgColor={this.state.bgColors[12]} value={this.state.squares[12]} onChange={this.handleChange.bind(this)} className="Box left"/>
		      	<Square index={13} bgColor={this.state.bgColors[13]} value={this.state.squares[13]} onChange={this.handleChange.bind(this)} className="Box"/>
		      	<Square index={14} bgColor={this.state.bgColors[14]} value={this.state.squares[14]} onChange={this.handleChange.bind(this)} className="Box right"/>
		      	<Square index={15} bgColor={this.state.bgColors[15]} value={this.state.squares[15]} onChange={this.handleChange.bind(this)} className="Box left"/>
		      	<Square index={16} bgColor={this.state.bgColors[16]} value={this.state.squares[16]} onChange={this.handleChange.bind(this)} className="Box"/>
		      	<Square index={17} bgColor={this.state.bgColors[17]} value={this.state.squares[17]} onChange={this.handleChange.bind(this)} className="Box right"/>
		      </div>
		      <div className='Row'>
		      	<Square index={18} bgColor={this.state.bgColors[18]} value={this.state.squares[18]} onChange={this.handleChange.bind(this)} className="Box bottom-left"/>
		      	<Square index={19} bgColor={this.state.bgColors[19]} value={this.state.squares[19]} onChange={this.handleChange.bind(this)} className="Box bottom"/>
		      	<Square index={20} bgColor={this.state.bgColors[20]} value={this.state.squares[20]} onChange={this.handleChange.bind(this)} className="Box bottom-right"/>
		      	<Square index={21} bgColor={this.state.bgColors[21]} value={this.state.squares[21]} onChange={this.handleChange.bind(this)} className="Box bottom-left"/>
		      	<Square index={22} bgColor={this.state.bgColors[22]} value={this.state.squares[22]} onChange={this.handleChange.bind(this)} className="Box bottom"/>
		      	<Square index={23} bgColor={this.state.bgColors[23]} value={this.state.squares[23]} onChange={this.handleChange.bind(this)} className="Box bottom-right"/>
		      	<Square index={24} bgColor={this.state.bgColors[24]} value={this.state.squares[24]} onChange={this.handleChange.bind(this)} className="Box bottom-left"/>
		      	<Square index={25} bgColor={this.state.bgColors[25]} value={this.state.squares[25]} onChange={this.handleChange.bind(this)} className="Box bottom"/>
		      	<Square index={26} bgColor={this.state.bgColors[26]} value={this.state.squares[26]} onChange={this.handleChange.bind(this)} className="Box bottom-right"/>
		      </div>
	      </div>
	      <div>
		      <div className='Row'>
		      	<Square index={27} bgColor={this.state.bgColors[27]} value={this.state.squares[27]} onChange={this.handleChange.bind(this)} className="Box top-left"/>
		      	<Square index={28} bgColor={this.state.bgColors[28]} value={this.state.squares[28]} onChange={this.handleChange.bind(this)} className="Box top"/>
		      	<Square index={29} bgColor={this.state.bgColors[29]} value={this.state.squares[29]} onChange={this.handleChange.bind(this)} className="Box top-right"/>
		      	<Square index={30} bgColor={this.state.bgColors[30]} value={this.state.squares[30]} onChange={this.handleChange.bind(this)} className="Box top-left"/>
		      	<Square index={31} bgColor={this.state.bgColors[31]} value={this.state.squares[31]} onChange={this.handleChange.bind(this)} className="Box top"/>
		      	<Square index={32} bgColor={this.state.bgColors[32]} value={this.state.squares[32]} onChange={this.handleChange.bind(this)} className="Box top-right"/>
		      	<Square index={33} bgColor={this.state.bgColors[33]} value={this.state.squares[33]} onChange={this.handleChange.bind(this)} className="Box top-left"/>
		      	<Square index={34} bgColor={this.state.bgColors[34]} value={this.state.squares[34]} onChange={this.handleChange.bind(this)} className="Box top"/>
		      	<Square index={35} bgColor={this.state.bgColors[35]} value={this.state.squares[35]} onChange={this.handleChange.bind(this)} className="Box top-right"/>
		      </div>
		      <div className='Row'>
		      	<Square index={36} bgColor={this.state.bgColors[36]} value={this.state.squares[36]} onChange={this.handleChange.bind(this)} className="Box left"/>
		      	<Square index={37} bgColor={this.state.bgColors[37]} value={this.state.squares[37]} onChange={this.handleChange.bind(this)} className="Box"/>
		      	<Square index={38} bgColor={this.state.bgColors[38]} value={this.state.squares[38]} onChange={this.handleChange.bind(this)} className="Box right"/>
		      	<Square index={39} bgColor={this.state.bgColors[39]} value={this.state.squares[39]} onChange={this.handleChange.bind(this)} className="Box left"/>
		      	<Square index={40} bgColor={this.state.bgColors[40]} value={this.state.squares[40]} onChange={this.handleChange.bind(this)} className="Box"/>
		      	<Square index={41} bgColor={this.state.bgColors[41]} value={this.state.squares[41]} onChange={this.handleChange.bind(this)} className="Box right"/>
		      	<Square index={42} bgColor={this.state.bgColors[42]} value={this.state.squares[42]} onChange={this.handleChange.bind(this)} className="Box left"/>
		      	<Square index={43} bgColor={this.state.bgColors[43]} value={this.state.squares[43]} onChange={this.handleChange.bind(this)} className="Box"/>
		      	<Square index={44} bgColor={this.state.bgColors[44]} value={this.state.squares[44]} onChange={this.handleChange.bind(this)} className="Box right"/>
		      </div>
		      <div className='Row'>
		      	<Square index={45} bgColor={this.state.bgColors[45]} value={this.state.squares[45]} onChange={this.handleChange.bind(this)} className="Box bottom-left"/>
		      	<Square index={46} bgColor={this.state.bgColors[46]} value={this.state.squares[46]} onChange={this.handleChange.bind(this)} className="Box bottom"/>
		      	<Square index={47} bgColor={this.state.bgColors[47]} value={this.state.squares[47]} onChange={this.handleChange.bind(this)} className="Box bottom-right"/>
		      	<Square index={48} bgColor={this.state.bgColors[48]} value={this.state.squares[48]} onChange={this.handleChange.bind(this)} className="Box bottom-left"/>
		      	<Square index={49} bgColor={this.state.bgColors[49]} value={this.state.squares[49]} onChange={this.handleChange.bind(this)} className="Box bottom"/>
		      	<Square index={50} bgColor={this.state.bgColors[50]} value={this.state.squares[50]} onChange={this.handleChange.bind(this)} className="Box bottom-right"/>
		      	<Square index={51} bgColor={this.state.bgColors[51]} value={this.state.squares[51]} onChange={this.handleChange.bind(this)} className="Box bottom-left"/>
		      	<Square index={52} bgColor={this.state.bgColors[52]} value={this.state.squares[52]} onChange={this.handleChange.bind(this)} className="Box bottom"/>
		      	<Square index={53} bgColor={this.state.bgColors[53]} value={this.state.squares[53]} onChange={this.handleChange.bind(this)} className="Box bottom-right"/>
		      </div>
	      </div>
	      <div>
		      <div className='Row'>
		      	<Square index={54} bgColor={this.state.bgColors[54]} value={this.state.squares[54]} onChange={this.handleChange.bind(this)} className="Box top-left"/>
		      	<Square index={55} bgColor={this.state.bgColors[55]} value={this.state.squares[55]} onChange={this.handleChange.bind(this)} className="Box top"/>
		      	<Square index={56} bgColor={this.state.bgColors[56]} value={this.state.squares[56]} onChange={this.handleChange.bind(this)} className="Box top-right"/>
		      	<Square index={57} bgColor={this.state.bgColors[57]} value={this.state.squares[57]} onChange={this.handleChange.bind(this)} className="Box top-left"/>
		      	<Square index={58} bgColor={this.state.bgColors[58]} value={this.state.squares[58]} onChange={this.handleChange.bind(this)} className="Box top"/>
		      	<Square index={59} bgColor={this.state.bgColors[59]} value={this.state.squares[59]} onChange={this.handleChange.bind(this)} className="Box top-right"/>
		      	<Square index={60} bgColor={this.state.bgColors[60]} value={this.state.squares[60]} onChange={this.handleChange.bind(this)} className="Box top-left"/>
		      	<Square index={61} bgColor={this.state.bgColors[61]} value={this.state.squares[61]} onChange={this.handleChange.bind(this)} className="Box top"/>
		      	<Square index={62} bgColor={this.state.bgColors[62]} value={this.state.squares[62]} onChange={this.handleChange.bind(this)} className="Box top-right"/>
		      </div>
		      <div className='Row'>
		      	<Square index={63} bgColor={this.state.bgColors[63]} value={this.state.squares[63]} onChange={this.handleChange.bind(this)} className="Box left"/>
		      	<Square index={64} bgColor={this.state.bgColors[64]} value={this.state.squares[64]} onChange={this.handleChange.bind(this)} className="Box"/>
		      	<Square index={65} bgColor={this.state.bgColors[65]} value={this.state.squares[65]} onChange={this.handleChange.bind(this)} className="Box right"/>
		      	<Square index={66} bgColor={this.state.bgColors[66]} value={this.state.squares[66]} onChange={this.handleChange.bind(this)} className="Box left"/>
		      	<Square index={67} bgColor={this.state.bgColors[67]} value={this.state.squares[67]} onChange={this.handleChange.bind(this)} className="Box"/>
		      	<Square index={68} bgColor={this.state.bgColors[68]} value={this.state.squares[68]} onChange={this.handleChange.bind(this)} className="Box right"/>
		      	<Square index={69} bgColor={this.state.bgColors[69]} value={this.state.squares[69]} onChange={this.handleChange.bind(this)} className="Box left"/>
		      	<Square index={70} bgColor={this.state.bgColors[70]} value={this.state.squares[70]} onChange={this.handleChange.bind(this)} className="Box"/>
		      	<Square index={71} bgColor={this.state.bgColors[71]} value={this.state.squares[71]} onChange={this.handleChange.bind(this)} className="Box right"/>
		      </div>
		      <div className='Row'>
		      	<Square index={72} bgColor={this.state.bgColors[72]} value={this.state.squares[72]} onChange={this.handleChange.bind(this)} className="Box bottom-left"/>
		      	<Square index={73} bgColor={this.state.bgColors[73]} value={this.state.squares[73]} onChange={this.handleChange.bind(this)} className="Box bottom"/>
		      	<Square index={74} bgColor={this.state.bgColors[74]} value={this.state.squares[74]} onChange={this.handleChange.bind(this)} className="Box bottom-right"/>
		      	<Square index={75} bgColor={this.state.bgColors[75]} value={this.state.squares[75]} onChange={this.handleChange.bind(this)} className="Box bottom-left"/>
		      	<Square index={76} bgColor={this.state.bgColors[76]} value={this.state.squares[76]} onChange={this.handleChange.bind(this)} className="Box bottom"/>
		      	<Square index={77} bgColor={this.state.bgColors[77]} value={this.state.squares[77]} onChange={this.handleChange.bind(this)} className="Box bottom-right"/>
		      	<Square index={78} bgColor={this.state.bgColors[78]} value={this.state.squares[78]} onChange={this.handleChange.bind(this)} className="Box bottom-left"/>
		      	<Square index={79} bgColor={this.state.bgColors[79]} value={this.state.squares[79]} onChange={this.handleChange.bind(this)} className="Box bottom"/>
		      	<Square index={80} bgColor={this.state.bgColors[80]} value={this.state.squares[80]} onChange={this.handleChange.bind(this)} className="Box bottom-right"/>
		      </div>
	      </div>
      </div>
    );
  }
}

export default Board;
