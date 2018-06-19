import PasswordEditPage from '../components/signin/PasswordEditPage';
import { connect } from 'react-redux';
import deviseActions from '../actions/devise';
import queryString from 'query-string'

const mapStateToProps = (state, { location }) => {
  return {
    token: queryString.parse(location.search).reset_password_token,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    editPassword(password, passwordConfirmation, resetPasswordToken) {
      dispatch(deviseActions.editPassword({password, passwordConfirmation, resetPasswordToken}));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PasswordEditPage);