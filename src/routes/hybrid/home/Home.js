import React, {Component, PropTypes} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';


import Mask from '../../../components/Mask'

class Home extends Component {

  state = {
    fold  : false,
    isMask: false,
  };

  toggleFold = () => {
    this.setState({fold: !this.state.fold});
  };

  toggleMask = () => {
    this.setState({isMask: !this.state.isMask});
  };

  render() {


    return <div>
      <button onClick={this.toggleFold}>button</button>
      <button onClick={this.toggleMask}>Mask</button>
      <div className={this.state.fold ? s.descFold : s.descUnfold}>
        aaaa
        <br/>
        bbbb
        <br/>
        cccc
      </div>

      <Mask active={this.state.isMask}>
      </Mask>
    </div>
  }
}

export default withStyles(s)(Home);
