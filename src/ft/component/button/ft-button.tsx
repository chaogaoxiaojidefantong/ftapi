import React, { Component, Fragment } from 'react';
import '../../style/button/ft-button.less'
class FtButton extends Component{
    
  componentDidUpdate(){
    
  }
  componentWillMount(){
     
  }
    render(){
        
        return(
            <Fragment>
                <button>{this.props.children}</button>
            </Fragment>
        )
    }
}
export default FtButton;