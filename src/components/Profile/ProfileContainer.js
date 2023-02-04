import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getStatusThunkCreator, getUserProfileThunkCreator, savePhotoThunkcreator, updateStatusThunkCreator } from '../../redux/profilePageReducer';
import { useParams } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

class ProfileContainer extends React.Component {
  refreshProfile(){
    let userId = this.props.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }

  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    if(this.props.params.userId != prevProps.params.userId){
      this.refreshProfile();
    }
  }
  render() {
    return (
      <Profile {...this.props} 
               isOwner={!this.props.params.userId} 
               profile={this.props.profile} 
               status={this.props.status} 
               updateStatus={this.props.updateStatus}
               savePhoto={this.props.savePhoto}/>
    )
  }
}

const AuthRedirectComponent = withAuthRedirect(ProfileContainer);

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth
});

const mapDispatchToProps = (dispatch) => ({
  getUserProfile: (user) => dispatch(getUserProfileThunkCreator(user)),
  getStatus: (userId) => dispatch(getStatusThunkCreator(userId)),
  updateStatus: (status) => dispatch(updateStatusThunkCreator(status)),
  savePhoto: (file) => dispatch(savePhotoThunkcreator(file))
});

const WithURLContainerComponent = (props) => {
  return <AuthRedirectComponent {...props} params={useParams()} />
}

export default connect(mapStateToProps, mapDispatchToProps)(WithURLContainerComponent);