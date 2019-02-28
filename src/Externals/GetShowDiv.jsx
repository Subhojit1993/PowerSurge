import React, { Component } from 'react';
import SubtractIcon from '../Icons/minus-symbol.png';
import AddIcon from '../Icons/add.png';

class GetShowDiv extends Component {
	render() {
		let details = this.props.details;
		return(
			<div className={"animated" + this.props.animationIn}>
	          <div className="row">
	              <div className="col-sm-3 col-xs-3 custom_2 mobile_width_33">
	                <img src={AddIcon} className="icon_size_11 cursor_pointer padding_10 cursor_pointer" onClick={(e) => this.props.simpleAction(e, details.id, "plus", this.props.get_params)} />
	              </div>
	              <div className="col-sm-6 col-xs-6 custom_2 mobile_width_33">
	                <img 
	                  src={details.img_url} 
	                  className="img_size_1" 
	                />
	              </div>
	              <div className="col-sm-3 col-xs-3 custom_2 mobile_width_33">
	                <img src={SubtractIcon} className="icon_size_11 cursor_pointer padding_10 cursor_pointer" onClick={(e) => this.props.simpleAction(e, details.id, "minus", this.props.get_params)} />
	              </div>
	          </div>
	        </div>
		)
	}
}

export default GetShowDiv;