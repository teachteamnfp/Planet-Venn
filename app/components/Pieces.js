import React from 'react';
import { Row, Col } from "react-grid-system";
import Drawer from 'material-ui/Drawer';
import RaisedButton from 'material-ui/RaisedButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Dialog from 'material-ui/Dialog';


import Rules from './Rules';
import Checklist from './Checklist';

var Pieces = React.createClass({
     getInitialState: function() {
        return (
            { 
                drawerOpen: false,
                rulesOpen: false,
                value1: 1,
                value2: 2
            }
        )
    },

    componentDidMount: function() {
        startGame();
    },
   
    handleDropDown1Change: function(event, index, value) {
        return (
            this.setState({ value1: value })
        )
    },

    handleDropDown2Change: function(event, index, value) {
        return (
            this.setState({ value2: value })
        )
    },

    handleDrawerToggle: function() {
        return(
            this.setState({ drawerOpen: !this.state.drawerOpen})
        )
    },

    handleRulesOpen: function() {
        return(
            this.setState({ rulesOpen: true })
        )
    },

    handleRulesClose: function() {
        return(
            this.setState({ rulesOpen: false })
        )
    },

    render: function () {


    return (
        <div className="container">
            <div id="make-a-guess">
                <Row>
                    
                    <Col sm={4}>
                        <DropDownMenu id="rule1guess" value={this.state.value1} onChange={this.handleDropDown1Change}>
                            <MenuItem value={1} primaryText="Red" />
                            <MenuItem value={2} primaryText="Green" />
                            <MenuItem  value={3} primaryText="Blue" />
                            <MenuItem  value={4} primaryText="Satellite" />
                            <MenuItem  value={5} primaryText="Alien" />
                            <MenuItem  value={6} primaryText="Sun" />
                            <MenuItem  value={7} primaryText="Big" />
                            <MenuItem  value={8} primaryText="Small" />
                        </DropDownMenu>
                    </Col>

                    <Col sm={4}>
                        <RaisedButton type="button" label="Guess" id="guesstherules" primary={true} className="button-spacing" />
                    </Col>

                    <Col sm={4}>
                        <DropDownMenu id="rule2guess" value={this.state.value2} onChange={this.handleDropDown2Change}>
                            <MenuItem value={1} primaryText="Red" />
                            <MenuItem value={2} primaryText="Green" />
                            <MenuItem  value={3} primaryText="Blue" />
                            <MenuItem  value={4} primaryText="Satellite" />
                            <MenuItem  value={5} primaryText="Alien" />
                            <MenuItem  value={6} primaryText="Sun" />
                            <MenuItem  value={7} primaryText="Big" />
                            <MenuItem  value={8} primaryText="Small" />
                        </DropDownMenu>
                    </Col>   
                </Row>
            </div>
            <div id="pieces-container">
                <img id="satBlueBig" className="big piece 1" data-shape="sat" data-color="blue" data-size="big" data-placed="false" src="./images/sat_still.gif" />
                <img id="alienGreenSmall" className="small piece 2" data-shape="alien" data-color="green" data-size="small" data-placed="false" src="./images/alien_still.gif" />
                <img id="sunRedBig" className="big piece 3" data-shape="sun" data-color="red" data-size="big" data-placed="false" src="./images/sun_still.gif" />
                <img id="sunBlueSmall" className="small piece 4" data-shape="sun" data-color="blue" data-size="small" data-placed="false" src="./images/sun_still.gif" />

                <img id="alienGreenBig" className="big piece 5" data-shape="alien" data-color="green" data-size="big" data-placed="false" src="./images/alien_still.gif" />
                <img id="satBlueSmall" className="small piece 6" data-shape="sat" data-color="blue" data-size="small" data-placed="false" src="./images/sat_still.gif" />
                <img id="sunGreenBig" className="big piece 7" data-shape="sun" data-color="green" data-size="big" data-placed="false" src="./images/sun_still.gif" />
                <img id="alienRedSmall" className="small piece 8" data-shape="alien" data-color="red" data-size="small" data-placed="false" src="./images/alien_still.gif" />

                <img id="alienBlueBig" className="big piece 9" data-shape="alien" data-color="blue" data-size="big" data-placed="false" src="./images/alien_still.gif" />
                <img id="satGreenSmall" className="small piece 10" data-shape="sat" data-color="green" data-size="small" data-placed="false" src="./images/sat_still.gif" />
                <img id="satRedBig" className="big piece 11" data-shape="sat" data-color="red" data-size="big" data-placed="false" src="./images/sat_still.gif" />
                <img id="sunRedSmall" className="small piece 12" data-shape="sun" data-color="red" data-size="small" data-placed="false" src="./images/sun_still.gif" />
            </div>
            <div id="button-container">

                <Row>  
                    <Col sm={4}>
                        <RaisedButton label="Reset Pieces" type="button" id="resetPieces" primary={true} className="button-spacing" />
                    </Col>

                     <Col sm={4}>
                        <RaisedButton label="Rules"  onTouchTap={this.handleRulesOpen} primary={true} className="button-spacing" />
                        <Dialog title="Planet Venn Rules" actions={<RaisedButton label="Close Rules" primary={true} onTouchTap={this.handleRulesClose} />} modal={false} open={this.state.rulesOpen} onRequestClose={this.handleRulesClose} >
                            <Rules />
                        </Dialog>
                    </Col>

                    <Col sm={4}>
                        <RaisedButton label="Checklist"  onTouchTap={this.handleDrawerToggle} primary={true} className="button-spacing" />
                        <Drawer open={this.state.drawerOpen} openSecondary={true} >
                            <Checklist />
                        </Drawer>
                    </Col>
         
                </Row>
            </div>
        </div>
    );
}
});

// Export the component back for use in other files
module.exports = Pieces;