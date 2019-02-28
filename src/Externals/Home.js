import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Slider from "react-slick";
import PrevArrow from '../Icons/left-arrow.png';
import NextArrow from '../Icons/right-arrow.png';
import getData from '../JSON/getData';

function GetNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img 
      src={NextArrow}
      className={className}
      style={{ ...style}}
      onClick={onClick}
    />
  );
}

function GetPrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img 
      src={PrevArrow}
      className={className}
      style={{ ...style}}
      onClick={onClick}
    />
  );
}

class Home extends Component {
	render() {

		const get_post_settings = {
	      dots: true,
	      infinite: true,
	      speed: 500,
	      slidesToShow: 1,
	      slidesToScroll: 1,
	      autoplay: false,
	      useCss: true,
	      className: "get_post_settings_carousel",
	      nextArrow: <GetNextArrow />,
	      prevArrow: <GetPrevArrow />
	    };

	    let carouselDiv = '';

	    if(getData && getData.length > 0) {

	    	let post_contents = getData.map((data, index) => {
	    		return(
	    			<div key={data.id}>
	    				<div className="custom_2">
	    					<img src={data.img_url} className="img_size_1" />
	    				</div>
	    				<h4 className="font_family font_18 color_yy font_weight_600">
	    					{data.name}
	    				</h4>
	    			</div>
	    		);
	    	});

	    	carouselDiv = (
	    		<Slider {...get_post_settings}>
					{post_contents}
				</Slider>
	    	);
	    }

		return(
			<div className="App flex_centarize height_100">
				<div className="get_box_shadow custom_1 mobile_width_gain">
		        	<div className="background_1 border_top_right">
		          		<div className="row">
		            		<div className="col-sm-4 mobile_width_33">
		              			<h4 className="font_family font_26 font_weight_600 padding_35 margin_0 color_white center_align border_bottom_2 mobile_font_18">
		                			Home
		              			</h4>
		            		</div>
		            		<div className="col-sm-4 mobile_width_33">
		              			<Link to="/">
		              				<h4 className="font_family font_20 font_weight_600 get_padding_1 margin_0 color_white center_align mobile_font_18">
		                				Stations
		              				</h4>
		              			</Link>
		            		</div>
		            		<div className="col-sm-4 mobile_width_33">
		              			<Link to="/about">
		              				<h4 className="font_family font_20 font_weight_600 padding_35 margin_0 color_white center_align mobile_font_18">
		                				About
		              				</h4>
		              			</Link>
		            		</div>
		          		</div>
		        	</div>
		        	<div className="background_2 custom_4">
		        		<p className="font_family font_18 padding_15 color_white center_align">
		        			Power Surge
		        		</p>
		        	</div>
		        	<div>
		        		{carouselDiv}
		        	</div>
		        	<div className="background_3 custom_4">
		        		<div className="padding_4">
			          		<h4 className="font_family font_22 font_weight_600 color_yy center_align">
			          			No shortage
			          		</h4>
		          		</div>
		        	</div>
		      	</div>
			</div>
		);
	}
}

export default Home;