import React, { Component } from 'react';

class Details extends Component {
	render() {
		let details = this.props.details;
		return(
			<div className="row border_bottom_1 cursor_pointer" onClick={(e) => this.props.getFlapOn(e, this.props.getIndex)}>
              <div className="col-sm-6 col-xs-6 mobile_width_50">
                <h4 className="font_family font_22 font_weight_400 color_fay left_align">
                  {details.name}
                </h4>
              </div>
              <div className="col-sm-6 col-xs-6 mobile_width_50">
                <h4 className="font_family font_22 font_weight_400 color_fay right_align">
                  {details.count}
                </h4>
              </div>
            </div>
		);
	}
}

export default Details;