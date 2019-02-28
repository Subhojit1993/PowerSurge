import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class About extends Component {
	render() {
		return(
			<div className="App flex_centarize height_100">
				<div className="get_box_shadow custom_1 mobile_width_gain">
		        	<div className="background_1 border_top_right">
		          		<div className="row">
		            		<div className="col-sm-4 mobile_width_33">
		              			<Link to="/home">
		              				<h4 className="font_family font_20 font_weight_600 padding_35 margin_0 color_white center_align mobile_font_18">
		                				Home
		              				</h4>
		              			</Link>
		            		</div>
		            		<div className="col-sm-4 mobile_width_33">
		              			<Link to="/">
		              				<h4 className="font_family font_20 font_weight_600 get_padding_1 margin_0 color_white center_align mobile_font_18">
		                				Stations
		              				</h4>
		              			</Link>
		            		</div>
		            		<div className="col-sm-4 mobile_width_33">
		              			<h4 className="font_family font_26 font_weight_600 padding_35 margin_0 color_white center_align border_bottom_2 mobile_font_18">
		                			About
		              			</h4>
		            		</div>
		          		</div>
		        	</div>
		        	<div className="background_2 custom_3 flex_centarize">
		        		<p className="font_family font_18 padding_15 color_white center_align">
		        			In general a surge is a transient wave of current, voltage or power in an electric circuit. ... Surges, or transients, are brief overvoltage spikes or disturbances on a power waveform that can damage, degrade, or destroy electronic equipment within any home, commercial building, industrial, or manufacturing facility.
		        		</p>
		        	</div>
		        	<div className="background_3 custom_4">
		        		<div className="padding_4">
			          		<h4 className="font_family font_22 font_weight_600 color_yy center_align">
			          			About Power Surge
			          		</h4>
		          		</div>
		        	</div>
		      	</div>
			</div>
		);
	}
}

export default About;