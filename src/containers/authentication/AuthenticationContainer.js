import { connect } from 'react-redux';
import LoginComponent from '../../components/authentication/LoginComponent'
import { emailState} from '../../services/authentication/Action';
 

const mapStateToProps = (state) => ({
  authenticationData : state.authenticatioReducer
});

const mapDispatchToProps = (dispatch) => ({ 
  emailState: (emailID) => dispatch(emailState(emailID)),
});

const AuthenticationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginComponent);

export default AuthenticationContainer;  