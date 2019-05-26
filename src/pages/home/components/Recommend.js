import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RecommendWapper, RecommendList } from '../style';

class Recommend extends Component {
  render() {
    const { list }=this.props;
    return (
      <RecommendWapper>
        {
          list.map((item) => {
            return(
              <RecommendList key={item.get('id')}>
                {item.get('title')}&nbsp;&nbsp;>
              </RecommendList>
            )
          })
        }
      </RecommendWapper>
    )
  }
}

const mapStatetoprops = (state) => ({
  list: state.get('home').get('RecommendList'),
})
export default connect(mapStatetoprops, null)(Recommend);