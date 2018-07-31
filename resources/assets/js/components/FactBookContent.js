import React from 'react'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import MenuIcon from 'material-ui-icons/Menu'
import Hidden from 'material-ui/Hidden'
import Grid from 'material-ui/Grid'
import ResponsiveEmbedYoutube from './ResponsiveEmbedYoutube'
import ResponsiveEmbedGoogleMap from './ResponsiveEmbedGoogleMap'
import Population from './Population'
import FacultyAndStaff from './FacultyAndStaff'
import TeacherEducation from './TeacherEducation'
import InternationalStudents from './InternationalStudents'
import NotifyBar from './NotifyBar';

const contentDefault = {
  display: 'flex', 
  justifyContent: 'center', 
  marginBottom: 20,
}

const linkButton = {
  height: '30%',
  minHeight: '200px',
  fontSize: '2rem',
  marginTop: '30%',
}

export default class FactBookContent extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      textWidth: '80%',
      odometerWidth: '100%',
      openNotifyBar: false,
      notifyDuration: null,
      notifyMsg: 'This is a message',
    }
  }

  handleNotifyBarOpen = (msg, notifyDuration) => {
    this.setState({ openNotifyBar: true, notifyMsg: msg, notifyDuration: notifyDuration })
  }

  handleNotifyBarClose = () => {
    this.setState({ openNotifyBar: false })
  }

  componentDidMount() {
    var el_students = document.querySelector('#odometer_students')
    var odometer = new Odometer({
      el: el_students,
      value: el_students.innerHTML,
    })
    odometer.update(15155)
    var el_teachers = document.querySelector('#odometer_teachers')
    odometer = new Odometer({
      el: el_teachers,
      value: el_teachers.innerHTML,
    })
    odometer.update(878)
    var el_staff = document.querySelector('#odometer_staff')
    odometer = new Odometer({
      el: el_staff,
      value: el_staff.innerHTML,
    })
    odometer.update(726)
    var msg = 'Tableau server are currently under maintainence, thanks!'
    this.handleNotifyBarOpen(msg, null)
  }

  componentDidUpdate() {
    var el_students = document.querySelector('#odometer_students')
    if (el_students) {
      var odometer = new Odometer({
        el: el_students,
        value: el_students.innerHTML,
      })
      odometer.update(15155)
    }
    var el_teachers = document.querySelector('#odometer_teachers')
    if (el_teachers) {
      var odometer = new Odometer({
        el: el_teachers,
        value: el_teachers.innerHTML,
      })
      odometer.update(878)
    }
    var el_staff = document.querySelector('#odometer_staff')
    if (el_staff) {
      var odometer = new Odometer({
        el: el_staff,
        value: el_staff.innerHTML,
      })
      odometer.update(726)
    }
  }

  renderDefault = () => (
    <main className={this.props.classes.content}>
      <div className={this.props.classes.toolbar} />
      {/* Overall population stats number increment animation */}
      <div style={contentDefault}>
        <span id="odometer_students" className="odometer">1</span>&nbsp;
        <span className="odometer-unit">Students</span>
      </div>
      <div style={contentDefault}>
        <span id="odometer_teachers" className="odometer">1</span>&nbsp;
        <span className="odometer-unit">Teachers</span>
      </div>
      <div style={contentDefault}>
        <span id="odometer_staff" className="odometer">1</span>&nbsp;
        <span className="odometer-unit">Staff</span>
      </div>
      {/* Responsivily embedded youtube video */}
      <div className="responsive-embed">
        <ResponsiveEmbedYoutube videoSrc="n6MJhKMs7gk"/>
      </div>
      {/* Brief description about IR and browsing instruction */}
      <div style={contentDefault}>
        <Grid item xs={12} md={5}>
          <Typography variant="display1">
            {'The Institutional Research section of the Office of the Research and Development provides analytical and research support to the President, Academic and Administration departments, Research laboratories and centers.'}
          </Typography>
          <Typography variant="display1" paragraph>
            {'You can view these reports or charts by click or touch the navigation menu '}
            <Hidden mdUp><MenuIcon /></Hidden>
            {' in the top-left corner.'}
          </Typography>
          <Typography variant="display3" paragraph>
            {'Where are we?'}
          </Typography>
          <Typography variant="display1">
            {'The map below is a static map, click or touch the map to load the interactive map.'}
          </Typography>
        </Grid>
      </div>
      {/* Responsivily embedded google map with static image */}
      <div id="embed_map_container" className="responsive-embed">
        <ResponsiveEmbedGoogleMap />
      </div>
      <NotifyBar 
        open={this.state.openNotifyBar} 
        notifyDuration={this.state.notifyDuration}
        msg={this.state.notifyMsg} 
        handleClose={this.handleNotifyBarClose}
      />
    </main>
  )

  render() {
    switch (this.props.content_id) {
      case 1:
        // return <Population classes={this.props.classes} textWidth={this.state.textWidth} />
      case 11:
        // return <FacultyAndStaff classes={this.props.classes} textWidth={this.state.textWidth} />
      case 2:
        // return <TeacherEducation classes={this.props.classes} textWidth={this.state.textWidth} />
      case 3:
        // return <InternationalStudents classes={this.props.classes} textWidth={this.state.textWidth} />
      default:
        return this.renderDefault()
    }
  }
}