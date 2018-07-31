import React from 'react'
import { findDOMNode } from 'react-dom'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Drawer from 'material-ui/Drawer'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import ExpandMoreIcon from 'material-ui-icons/ExpandMore'
import ExpandLessIcon from 'material-ui-icons/ExpandLess'
import Collapse from 'material-ui/transitions/Collapse'
import Popover from 'material-ui/Popover'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import IconButton from 'material-ui/IconButton'
import Hidden from 'material-ui/Hidden'
import Divider from 'material-ui/Divider'
import Tooltip from 'material-ui/Tooltip'
import MenuIcon from 'material-ui-icons/Menu'
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft'
import ChevronRightIcon from 'material-ui-icons/ChevronRight'
import FactBookContent from './FactBookContent'
import Home from 'material-ui-icons/Home'
import Place from 'material-ui-icons/Place'
import Phone from 'material-ui-icons/Phone'
import Email from 'material-ui-icons/Email'
import Poll from 'material-ui-icons/Poll'
// import Launch from 'material-ui-icons/Launch'
import ReactGA from 'react-ga' // https://github.com/react-ga/react-gaimport React, { Component } from 'react'


const drawerWidth = 215

const styles = theme => ({
  root: {
    flexGrow: 1,
    minHeight: '100%',
    width: '100%',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    fontSize: '2rem', 
  },
  nested: {
    paddingLeft: theme.spacing.unit * 2,
  },
  flex: {
    flex: 1,
  },
  appBar: {
    position: 'absolute',
    marginLeft: drawerWidth,
    fontSize: '2rem', 
    fontWeight: 'bold', 
    height: '64px',
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      height: '70px',
      fontSize: '2rem', 
      fontWeight: 'bold', 
    },
  },
  footer: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    height: '100%',
    [theme.breakpoints.up('md')]: {
      position: 'relative',
    },
  },
  drawerItemText: {
    fontSize: '2rem', 
    fontWeight: 'bold', 
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    // padding: theme.spacing.unit * 3,
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit * 2,
    width: '100%',
    fontSize: '1.5rem', 
    [theme.breakpoints.up('md')]: {
      fontSize: '2.5rem', 
    },
  },
})

const items = [
  {id: 1, title: 'Population'},
  {id: 11, title: 'Faculty and Staff'},
  {id: 2, title: 'Teacher Education'},
  {id: 3, title: 'International'}
]

class ResponsiveDrawer extends React.Component {

  // constructor(props) {
  //     super({})
  //     /* Initialize the state. */
  //     this.state = {
  //       open: true,
  //       content_id: 0,
  //       content_title: ''
  //     }
  // }

  state = {
    open: true,
    nested1Open: false,
    popOverOpen: false,
    anchorEl: null,
    anchorReference: 'anchorEl',
    anchorOriginVertical: 'bottom',
    anchorOriginHorizontal: 'center',
    content_id: 0,
    content_title: 'NTNU Fact Book'
  }
  buttonAbout = null

  handleDrawerToggle = () => {this.setState({ mobileOpen: !this.state.mobileOpen })}
  handleDrawerClose = () => {this.setState({ open: false })}
  
  handlePopOverToggle = () => {this.setState({ 
      popOverOpen: !this.state.popOverOpen ,
      anchorEl: findDOMNode(this.buttonAbout),
    })
  }
  handlePopOverClose = () => {this.setState({ popOverOpen: false })}
  
  openNTNU = () => { 
    // window.open('http://www.ntnu.edu.tw', '_blank') //Open in new window
    window.location.href = 'http://www.ntnu.edu.tw'
  }
  openYearReport = () => { 
    // window.open('http://yreport.iro.ntnu.edu.tw', '_blank') 
    window.open('http://yreport.iro.ntnu.edu.tw', '_self') 
  }
  sendMail = () => { 
    // window.open('mailto:skylock@ntnu.edu.tw','_blank') //Open in new window
    window.location.href = 'mailto:skylock@ntnu.edu.tw'
  }
  openGA = () => { 
    window.open('https://analytics.google.com/analytics/web/#/embed/report-home/a10706568w173171605p172579701', '_blank') 
  }

  handleListItemClick = (event, id, title) => {
    // console.table(e)
    // console.log('title='+title)
    // Simulate url change since we have no routes in this case.
    ReactGA.pageview('/' + title)

    switch (id) {
      case 1:
        this.setState({ 
          mobileOpen: !this.state.mobileOpen, 
          nested1Open: !this.state.nested1Open, 
          content_id: id, 
          content_title: title 
        })
      default:
        this.setState({ mobileOpen: !this.state.mobileOpen, content_id: id, content_title: title })
    }
    // alert('You click')
  }

  render() {
    const { classes, theme } = this.props
    const { open } = this.state

    const drawer = (
      <div>
        {/* <div className={classes.toolbar} /> */}
        <div className={classes.toolbar}>
          <List component="nav">
            <ListItem button onClick={(e) => this.handleListItemClick(e, 0, 'NTNU Fact Book')}>
              <ListItemIcon>
                <Home/>
              </ListItemIcon>
              <ListItemText primary='Home' classes={{ primary: classes.drawerItemText }} />
            </ListItem>  
          </List>
        </div>
        <Divider />
        {/* <List component="nav">
          {items.map((item) => (
            item.id === 1 ?
              <ListItem button
                key={item.id} 
                onClick={(e) => this.handleListItemClick(e, item.id, item.title)}>
                <ListItemText primary={item.title} />
                {this.state.nested1Open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </ListItem>
            :
              <ListItem button
                key={item.id} 
                onClick={(e) => this.handleListItemClick(e, item.id, item.title)}>
                <ListItemText primary={item.title} />
              </ListItem>
          ))}
        </List> */}

        <List component="nav">
          <ListItem button onClick={(e) => this.handleListItemClick(e, 1, 'Population')}>
            <ListItemText primary='Population' classes={{ primary: classes.drawerItemText }}/>
            {this.state.nested1Open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItem> 
          <Collapse in={this.state.nested1Open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested} onClick={(e) => this.handleListItemClick(e, 11, 'Faculty and Staff')}>
                <ListItemText inset primary='Faculty and Staff' classes={{ primary: classes.drawerItemText }} />
              </ListItem>
            </List>
          </Collapse> 
          <ListItem button onClick={(e) => this.handleListItemClick(e, 2, 'Teacher Education')}>
            <ListItemText primary='Teacher Education' classes={{ primary: classes.drawerItemText }} />
          </ListItem>  
          <ListItem button onClick={(e) => this.handleListItemClick(e, 3, 'International')}>
            <ListItemText primary='International' classes={{ primary: classes.drawerItemText }} />
          </ListItem>  
          <Divider />
          <Tooltip title='To see detailed report about NTNU, will open in same window' placement='bottom'>
            <ListItem button className={classes.nested} onClick={e => this.openYearReport()}>
              <ListItemText inset primary={'Year Report'} classes={{ primary: classes.drawerItemText }} />
            </ListItem>
          </Tooltip>
        </List>
        <Divider />
      </div>
    )
    console.log(window.location.pathname)
    // switch (window.location.pathname) {
    //   case 'Population':
    //     this.handleListItemClick(1, 'Population')
    //   case 'Faculty and Staff':
    //     this.handleListItemClick(11, 'Faculty and Staff')
    //   case 'Teacher Education':
    //     this.handleListItemClick(2, 'Teacher Education')
    //   case 'International':
    //     this.handleListItemClick(3, 'International')
    //   default:
    //     this.handleListItemClick(0, 'NTNU Fact Book')
    // }

    return (
      <div className={classes.root}>
        <AppBar className={classes.appBar} style={{ backgroundColor: '#7F0015'}}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.navIconHide}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="display1" color="inherit" className={classes.flex} noWrap>
              {this.state.content_title}
            </Typography>
            <Button color="inherit" ref={node => {this.buttonAbout = node}} onClick={this.handlePopOverToggle}>
            about us
            </Button>
            <Popover
              open={this.state.popOverOpen}
              onClose={this.handlePopOverClose}
              anchorEl={this.state.anchorEl}
              anchorReference={this.state.anchorReference}
              anchorOrigin={{
                vertical: this.state.anchorOriginVertical,
                horizontal: this.state.anchorOriginHorizontal,
              }}
              // anchorPosition={{ top: positionTop, left: positionLeft }}
              // transformOrigin={{
              //   vertical: transformOriginVertical,
              //   horizontal: transformOriginHorizontal,
              // }}
            >
              <List>
                <ListItem>
                  <ListItemIcon>
                    <Home/>
                  </ListItemIcon>
                  <ListItemText primary='Office of Institutional Research' classes={{ primary: classes.drawerItemText }} />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Home/>
                  </ListItemIcon>
                  <ListItemText primary='National Taiwan Normal University' classes={{ primary: classes.drawerItemText }} />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Place/>
                  </ListItemIcon>
                  <ListItemText primary='162, Section 1, Heping E. Rd., Taipei City 106, Taiwan' classes={{ primary: classes.drawerItemText }} />
                </ListItem>
                <ListItem button onClick={this.sendMail}>
                  <ListItemIcon>
                    <Email/>
                  </ListItemIcon>
                  <ListItemText primary='skylock@ntnu.edu.tw' classes={{ primary: classes.drawerItemText }} />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Phone/>
                  </ListItemIcon>
                  <ListItemText primary='+886-2-7734-1391' classes={{ primary: classes.drawerItemText }} />
                </ListItem>
                <ListItem button onClick={this.openGA}>
                  <ListItemIcon>
                    <Poll/>
                  </ListItemIcon>
                  <ListItemText primary='GA Report' classes={{ primary: classes.drawerItemText }} />
                </ListItem>
              </List>
            </Popover>
          </Toolbar>
        </AppBar>
        {/* For mobile device */}
        <Hidden mdUp>
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={this.state.mobileOpen}
            onClose={this.handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
         {/* For other bigger device */}
        <Hidden smDown implementation="css">
          <Drawer
            variant="permanent"
            open={open}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
          {/* <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </div> */}
            {drawer}
          </Drawer>
        </Hidden>
        <FactBookContent classes={classes} content_id={this.state.content_id} content_title={this.state.content_title}/>
      </div>
    )
  }
}

ResponsiveDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
}

export default withStyles(styles, { withTheme: true })(ResponsiveDrawer)