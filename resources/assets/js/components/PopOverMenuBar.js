import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

export default class PopOverMenuBar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };

    //Boilerplate code for binding methods with `this`
    this.handleClick = this.handleClick.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
  }

  handleClick(event) {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose() {
    this.setState({
      open: false,
    });
  };

  render() {
    return (
      <div>
        {/* <RaisedButton
          onClick={this.handleClick}
          label="Click me"
        /> */}
        <AppBar
          title="Dashboard"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onClick={this.handleClick}
        />
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
        >
          <Menu>
            <MenuItem primaryText="Population" />
            <MenuItem primaryText="Financial" />
          </Menu>
        </Popover>
      </div>
    );
  }
}