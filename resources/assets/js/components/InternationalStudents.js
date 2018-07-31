import React from 'react';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';


export default class InternationalStudents extends React.Component {
  // state = {resize: false}

  componentDidMount() {
    window.getLoginAndInitViz('views/FactBook/InternationalStudents', this.vizContainer);

    // const divElement = document.getElementById('viz1523872312506');
    // const vizElement = divElement.getElementsByTagName('object')[0];   
    // // console.log('vizElement:');
    // // console.log(vizElement);   
    // if ( divElement.offsetWidth > 800 ) {
    //   console.log('offsetWidth > 800');
    //   vizElement.style.minWidth='667px';
    //   vizElement.style.maxWidth='980px';
    //   vizElement.style.width='100%';
    //   vizElement.style.minHeight='402px';
    //   vizElement.style.maxHeight='747px';
    //   vizElement.style.height=(divElement.offsetWidth*0.75)+'px';
    // } else if ( divElement.offsetWidth > 500 ) {
    //   console.log('offsetWidth > 500 & < 800');
    //   vizElement.style.minWidth='667px';
    //   vizElement.style.maxWidth='980px';
    //   vizElement.style.width='100%';
    //   vizElement.style.minHeight='402px';
    //   vizElement.style.maxHeight='747px';
    //   vizElement.style.height=(divElement.offsetWidth*0.75)+'px';
    // } else {
    //   // alert('offsetWidth < 500');
    //   console.log('offsetWidth < 500');
    //   vizElement.style.width='100%';
    //   vizElement.style.height=(divElement.offsetWidth*1.77)+'px';
    // }
    // const scriptElement = document.createElement("script");
    // scriptElement.src = "./js/viz_v1.js";
    // vizElement.parentNode.insertBefore(scriptElement, vizElement);
  }

  componentDidUpdate() {
    // const divElement = document.getElementById('viz1523872312506');
    // // console.log('divElement:');
    // // console.log(divElement); 
    // const vizElement = divElement.getElementsByTagName('iframe')[0];   
    // // console.log('vizElement:');
    // // console.log(vizElement); 
    // // console.log('window.innerWidth:'+window.innerWidth);
    // if ( window.innerWidth > 980 ) {
    //   console.log('window.innerWidth > 800');
    //   vizElement.style.minWidth='667px';
    //   vizElement.style.maxWidth='980px';
    //   vizElement.style.width='100%';
    //   vizElement.style.minHeight='402px';
    //   vizElement.style.maxHeight='747px';
    //   vizElement.style.height=(divElement.offsetWidth*0.75)+'px';
    // } else if ( window.innerWidth > 500 ) {
    //   console.log('window.innerWidth > 500 & < 980');
    //   vizElement.style.minWidth='667px';
    //   vizElement.style.maxWidth='980px';
    //   vizElement.style.width='100%';
    //   vizElement.style.minHeight='402px';
    //   vizElement.style.maxHeight='747px';
    //   vizElement.style.height=(divElement.offsetWidth*0.75)+'px';
    // } else {
    //   console.log('window.innerWidth < 500');
    //   vizElement.style.width='100%';
    //   vizElement.style.height=(divElement.offsetWidth*1.77)+'px';
    // }
    // const scriptElement = document.createElement("script");
    // scriptElement.src = "./js/viz_v1.js";
    // vizElement.parentNode.insertBefore(scriptElement, vizElement);
  }

  render() {
    return (
      <div className={this.props.classes.content}>
        <div className={this.props.classes.toolbar} />
        <Grid item xs={12}>
          <Typography variant="display2">
          {'The population about our students from all over the world within 2005~2015. You can view from different entering year or college or department.'}
          </Typography>

          <div ref={(div) => { this.vizContainer = div; }}></div>
        </Grid>
        
        {/* <div className='tableauPlaceholder' id='viz1523872312506' 
          ref={(ref) => { this.toDate = ref; }}
          style={{
            position: "relative",
          }}
        >
          <noscript>
            <a href='#'>
              <img alt='International' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Fa&#47;FactBook-InternationalStudents&#47;Dashboard&#47;1_rss.png' style={{border: 'none' }}/>
            </a>
          </noscript>
          <object className='tableauViz' style={{ display: 'none' }} >
            <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> 
            <param name='embed_code_version' value='3' />
            <param name='site_root' value='' />
            <param name='name' value='FactBook-InternationalStudents&#47;Dashboard' />
            <param name='tabs' value='no' />
            <param name='toolbar' value='yes' />
            <param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Fa&#47;FactBook-InternationalStudents&#47;Dashboard&#47;1.png' /> 
            <param name='animate_transition' value='yes' />
            <param name='display_static_image' value='yes' />
            <param name='display_spinner' value='yes' />
            <param name='display_overlay' value='yes' />
            <param name='display_count' value='yes' />
          </object>
        </div> */}
      </div>
    );
  }
}