import React from 'react';
import Typography from 'material-ui/Typography';
import tableau from 'tableau-api'; 


export default class TeacherEducation extends React.Component {
  // state = {resize: false}
  constructor(props) {
    super(props);

    this.state = {
      resize: false,
    };
  }

  /**
   * Lsiten to window resize and set state to re-render react component
   */
  handleResize() {
    this.setState({resize: true});
  }

  initTableau(url) {
    const vizUrl = url+'?:embed=y&:display_count=yes';
    const vizContainer = this.vizContainer;  
    let vizWidth = '100%';
    let vizHeight = vizContainer.offsetWidth * 0.75;
    if (vizContainer.offsetWidth > 800) {

    } else if (vizContainer.offsetWidth > 800) {

    } else {
      vizHeight = vizContainer.offsetWidth * 1.77;
    }

    const options = {
      hideTabs: true,
      width: vizWidth,
      height: vizHeight,
      onFirstInteractive: () => {
        console.log('it works!');
        // const sheet = viz.getWorkbook().getActiveSheet().getWorksheets().get('Table');
        // const options = {
        //   ignoreAliases: false,
        //   ignoreSelection: false,
        //   includeAllColumns: false
        // };
        // sheet.getUnderlyingDataAsync(options).then((t) => {
        //   const tableauData = t.getData();
        //   let data = [];
        //   const pointCount = tableauData.length;
        //   for(let a = 0; a < pointCount; a++ ) {
        //     data = data.concat({
        //       x: tableauData[a][0].value,
        //       y: Math.round(tableauData[a][3].value,2)
        //     })
        //   };
        // })
      }
    };

    let viz = new window.tableau.Viz(vizContainer, url, options);
  }

  getTableauIFrame(url) {
    const vizUrl = url+'?:embed=y&:display_count=yes';
    const vizContainer = window;  
    let vizWidth = '100%';
    let vizHeight = vizContainer.innerWidth * 0.75;
    if (vizContainer.innerWidth > 800) {

    } else if (vizContainer.innerWidth > 800) {

    } else {
      vizHeight = vizContainer.innerWidth * 1.77;
    }
    const tableuFrame = <iframe src={vizUrl} width={vizWidth} height={vizHeight}></iframe>
    return tableuFrame
  }

  componentDidMount() {
    // console.table(this.vizContainer)
    // this.initTableau('http://public.tableau.com/views/FactBook-TeacherEducation/TeacherEducation');
    window.getLoginAndInitViz('views/FactBook/TeacherEducation', this.vizContainer);

    // const divElement = document.getElementById('viz1521093630762');
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
    // const scriptElement = document.createElement('script');
    // scriptElement.src = './js/viz_v1.js';
    // vizElement.parentNode.insertBefore(scriptElement, vizElement);
    
    // window.addEventListener('resize', this.handleResize.bind(this));
  }

  componentDidUpdate() {
    // window.getLoginAndInitViz('views/FactBook/TeacherEducation', this.vizContainer);
    // const divElement = document.getElementById('viz1521093630762');
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
    // const scriptElement = document.createElement('script');
    // scriptElement.src = './js/viz_v1.js';
    // vizElement.parentNode.insertBefore(scriptElement, vizElement);
  }

  render() {
    return (
      <div className={this.props.classes.content}>
        <div className={this.props.classes.toolbar} />
        <Typography variant='display1' paragraph style={{width: this.props.textWidth}}>
          {'The overall admission rate about our intern-teacher. Teacher education that endeavors to provide prospective teachers with well-established pre-service and intern programs as well as to provide in-service teachers with updated professional development programs.'}
        </Typography>
        
        <div ref={(div) => { this.vizContainer = div; }}></div>

        {/* <div ref={(div) => { this.vizContainer = div; }}>
          {this.getTableauIFrame('http://public.tableau.com/views/FactBook-TeacherEducation/TeacherEducation')}
        </div> */}

        {/* <div className='tableauPlaceholder' id='viz1521093630762' 
          ref={(div) => { this.vizContainer = div; }}
          style={{ position: 'relative' }}
        >
          <noscript>
            <a href='#'>
            <img alt='TeacherEducation ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Fa&#47;FactBook-TeacherEducation&#47;TeacherEducation&#47;1_rss.png' style={{border: 'none' }}/>
            </a>
          </noscript>
          <object className='tableauViz' style={{ display: 'none' }}>
            <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> 
            <param name='embed_code_version' value='3' />
            <param name='site_root' value='' />
            <param name='name' value='FactBook-TeacherEducation&#47;TeacherEducation' />
            <param name='tabs' value='no' />
            <param name='toolbar' value='yes' />
            <param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Fa&#47;FactBook-TeacherEducation&#47;TeacherEducation&#47;1.pn' /> 
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