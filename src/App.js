import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import { simpleAction, buttonAction } from './actions/simpleAction';
import './App.css';
import Details from './Externals/Details.js';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import GetShowDiv from './Externals/GetShowDiv';
import getData from './JSON/getData';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const style = {
  container: {
    position: 'relative',
  },
  refresh: {
    display: 'inline-block',
    position: 'relative',
  },
};

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isFlag1: false,
      storedIndex: 0,
      getData: [],
      closeAll: false
    };
  }

  componentDidMount() {
    this.setState({ getData });
  }

  getFlapOn = (e, getIndex) => {
    if(this.state.storedIndex == getIndex) {
      this.setState({
        closeAll: !this.state.closeAll
      });
    }
    else {
      this.setState({
        storedIndex: getIndex,
        closeAll: false
      });
    }
  };

  simpleAction = (e, button_id, cal_type, details) => {
    let get_details = details;
    if(get_details.length > 0) {
      get_details.map((response, index) => {
        if(response.id == button_id) {
          if(cal_type == 'plus') {
            response.count = response.count + 1;
          }
          else if(cal_type == "minus") {
            response.count = response.count - 1;
          }
        }
      })
    }
   this.setState({ getData: get_details });
  };

  render() {
    let animationIn = " fadeOutUp";
    let currently_playing = "";
    let isElement = (
        <div style={{textAlign: 'center'}}>
              <div style={style.container}>
                <RefreshIndicator
                  size={50}
                  left={0}
                  top={20}
                  status="loading"
                  loadingColor="#D03A50"
                  style={style.refresh}
                />
              </div>
            <br/>
        </div>
    );

    let get_params = this.state.getData;

    if(get_params && get_params.length > 0) {
      let result = get_params;
      isElement = result.map((element, index) => {

        let showDiv = '';

        if(index == this.state.storedIndex && !this.state.closeAll) {
          animationIn = " fadeInDown";

          showDiv = (
            <GetShowDiv
              animationIn={animationIn}
              simpleAction={this.simpleAction} 
              details={element}
              get_params={get_params}
            />
          );

          currently_playing = (
            <div className="padding_4">
              <h5 className="font_family font_22 font_weight_600 color_yy center_align">
                Currently Playing
              </h5>
              <h5 className="font_family font_20 font_weight_600 color_white center_align">
                {element.name}
              </h5>
            </div>
          );
        }

        return(
          <div key={element.id} className="inner_padding_8">
            <Details
              getFlapOn={this.getFlapOn} 
              details={element}
              getIndex={index}
            />
            {showDiv}
          </div>
        );
      });
    }

    return (
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
                <h4 className="font_family font_26 font_weight_600 get_padding_1 margin_0 color_white center_align border_bottom_2 mobile_font_18">
                  Stations
                </h4>
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
          <div className="background_2 custom_3">
            {isElement}
          </div>
          <div className="background_3 custom_4">
            {currently_playing}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
 ...state.simpleReducer
})

const mapDispatchToProps = dispatch => ({
 simpleAction: () => dispatch(simpleAction()),
})


export default connect(mapStateToProps, mapDispatchToProps)(App);


