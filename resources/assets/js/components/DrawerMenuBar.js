import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
// import ChevronLeftIcon from 'material-ui-icons/ChevronLeft';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

export default class DrawerMenuBar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      open: true,
    };

    //Boilerplate code for binding methods with `this`
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle(event) {
    this.setState({open: !this.state.open});
  };

  render() {
    if (screen.availWidth < 720) {
      this.setState({open: !this.state.open});
    }

    return (
      <div>
        <AppBar
          title="Dashboard"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onClick={this.handleToggle}
          onTouchTap={this.handleToggle}
        />
        <Drawer open={this.state.open}>
          {/* <div>
            <IconButton onClick={this.handleToggle}>
              <ChevronLeftIcon />
            </IconButton>
          </div> */}
          <MenuItem>Population</MenuItem>
          <MenuItem>Financial</MenuItem>
        </Drawer>
      </div>
    );
  }
}