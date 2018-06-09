import { connect } from 'react-redux';
import EmployeeListComponent from '../home/EmployeeListComponent';
import {emailState,empIdState} from '../../services/home/Reducer'


const mapStateToProps = (state) => ({
    empDataData : state.empDataReducer
  });
  
const mapDispatchToProps = (dispatch) => ({ 
    emailState: (emailID) => dispatch(emailState(emailID)),
    empIdState: (empId) => dispatch(empIdState(empId)),
});

const AuthenticationContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(EmployeeListComponent);
  

export default EmployeeContainer;  