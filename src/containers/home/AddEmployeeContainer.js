import { connect } from 'react-redux';
import AddEmployeeComponent from '../../components/home/AddEmployeeComponent';
import {nameState,phoneNumberState,shiftState} from '../../services/home/Action'


const mapStateToProps = (state) => ({
    empData : state.empDataReducer
  });
  
const mapDispatchToProps = (dispatch) => ({ 
    nameState: (name) => dispatch(nameState(name)),
    phoneNumberState: (phoneNumber) => dispatch(phoneNumberState(phoneNumber)),
    shiftState: (shift) => dispatch(shiftState(shift))
});

const AddEmployeeContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddEmployeeComponent);
  

export default AddEmployeeContainer;  