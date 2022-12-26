import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { setUserProfileActionCreator } from '../../redux/profilePageReducer';
import { useParams } from 'react-router-dom';
import { profileAPI } from '../../api/profileAPI';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.params.userId;
    if (!userId) {
      userId = 2;
    }

    profileAPI.getProfile(userId).then(data => {
      this.props.setUserProfile(data);
    });
  }
  render() {
    return (
      <Profile {...this.props} profile={this.props.profile} />
    )
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile
});

const mapDispatchToProps = (dispatch) => ({
  setUserProfile: (user) => dispatch(setUserProfileActionCreator(user))
});

const WithURLContainerComponent = (props) => {
  return <ProfileContainer {...props} params={useParams()} />
}

export default connect(mapStateToProps, mapDispatchToProps)(WithURLContainerComponent);