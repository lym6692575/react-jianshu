import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { WriterWapper, WriterHeader, WriteInfoSwitch, WriterList, WriteLi } from '../style';
import { actionCreators } from './store';

class Write extends PureComponent {
	getWriteList() {
		const { WriterItem } = this.props;
		return (
			<WriterList>
				{
					WriterItem.map((item) => {
						return (
							<WriteLi key={item.get('id')}>
								<span className='right'>+ 关注</span>
								<img
									className='WriterProfilePhoto'
									alt=''
									src={item.get('imgUrl')}
								/>
								<span className='list'>{item.get('WriterName')}</span>
								<span className='liked'>
									写了{item.get('WriterWordNub')}字 · {item.get('WriterLiked')}k喜欢
							</span>
							</WriteLi>
						)
					})
				}
			</WriterList>
		)
	}
	render() {
		const { handleChangeWrite } = this.props;
		return (
			<WriterWapper>
				<WriterHeader>
					<WriteInfoSwitch
						onClick={handleChangeWrite}
					>
						<i className="iconfont spin" >&#xe852;</i>
						换一批
						</WriteInfoSwitch>
					推荐作者
					</WriterHeader>
				{this.getWriteList()}
			</WriterWapper>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		WriterItem: state.getIn(['home', 'WriterItem']),
		page: state.getIn(['home', 'page']),
		totalPage: state.getIn(['home', 'totalPage'])
	}

}
const mapDispatchToProps = (dispatch) => {
	return {
		handleChangeWrite() {
			console.log('1');
			dispatch(actionCreators.getChangeWriter());
		}
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Write);