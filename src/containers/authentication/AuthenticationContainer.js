import { connect } from 'react-redux';
import LoginComponent from '../../components/authentication/LoginComponent'
import { emailState,passwordState,loginUser} from '../../services/authentication/Action';
 

const mapStateToProps = (state) => ({
  authenticationData : state.authenticatioReducer
});

const mapDispatchToProps = (dispatch) => ({ 
  emailState: (emailID) => dispatch(emailState(emailID)),
  passwordState: (password) => dispatch(passwordState(password)),
  loginUser: (username,password) => dispatch(loginUser(username,password))
});

const AuthenticationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginComponent);

export default AuthenticationContainer;  