import React from 'react'
import View from './view'
import { connect } from 'react-redux'
import { switchMenu } from '../../store/actions/index'


const Container = (props) => <View {...props}></View>

const mapStateToProps = (state, ownProps) => ({
    isOpen: state.common.isOpenMenu
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    switchMenu: () => dispatch(switchMenu(false))
})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Container)