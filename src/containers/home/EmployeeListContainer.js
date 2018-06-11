import { connect } from 'react-redux';
import EmployeeListCompoment from '../../components/home/EmployeeListCompoment';
import {emailState,empIdState} from '../../services/home/Reducer'


const mapStateToProps = (state) => ({
    empsDataData : state.empDataReducer
  });
  
const mapDispatchToProps = (dispatch) => ({ 
    emailState: (emailID) => dispatch(emailState(emailID)),
});

const EmployeeListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(EmployeeListCompoment);
  

export default EmployeeListContainer;  