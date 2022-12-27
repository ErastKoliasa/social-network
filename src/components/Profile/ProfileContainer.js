import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getUserProfileThunkCreator } from '../../redux/profilePageReducer';
import { useParams } from 'react-router-dom';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.params.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.getUserProfile(userId)
  }
  render() {
    return (
      <Profile profile={this.props.profile}/>
    )
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile
});

const mapDispatchToProps = (dispatch) => ({
  getUserProfile: (user) => dispatch(getUserProfileThunkCreator(user))
});

const WithURLContainerComponent = (props) => {
  return <ProfileContainer {...props} params={useParams()} />
}

export default connect(mapStateToProps, mapDispatchToProps)(WithURLContainerComponent);