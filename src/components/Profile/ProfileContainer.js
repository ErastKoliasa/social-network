import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getStatusThunkCreator, getUserProfileThunkCreator, updateStatusThunkCreator } from '../../redux/profilePageReducer';
import { useParams } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.params.userId;
    if (!userId) {
      userId = 27242;
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }
  render() {
    return (
      <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
    )
  }
}

const AuthRedirectComponent = withAuthRedirect(ProfileContainer);

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status
});

const mapDispatchToProps = (dispatch) => ({
  getUserProfile: (user) => dispatch(getUserProfileThunkCreator(user)),
  getStatus: (userId) => dispatch(getStatusThunkCreator(userId)),
  updateStatus: (status) => dispatch(updateStatusThunkCreator(status))
});

const WithURLContainerComponent = (props) => {
  return <AuthRedirectComponent {...props} params={useParams()} />
}

export default connect(mapStateToProps, mapDispatchToProps)(WithURLContainerComponent);