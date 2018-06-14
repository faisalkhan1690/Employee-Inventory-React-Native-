import { connect } from 'react-redux';
import AddEmployeeComponent from '../../components/home/AddEmployeeComponent';
import {nameState,phoneNumberState,shiftState,createUser,updateUser,deleteUser} from '../../services/home/Action'


const mapStateToProps = (state) => ({
    empData : state.empDataReducer
  });
  
const mapDispatchToProps = (dispatch) => ({ 
    nameState: (name) => dispatch(nameState(name)),
    phoneNumberState: (phoneNumber) => dispatch(phoneNumberState(phoneNumber)),
    shiftState: (shift) => dispatch(shiftState(shift)),
    createUser: (name,phoneNumber,shift) => dispatch(createUser(name,phoneNumber,shift)),
    updateUser: (name,phoneNumber,shift,empId) => dispatch(updateUser(name,phoneNumber,shift,empId)),
    deleteUser: (empId) => dispatch(deleteUser(empId))
});

const AddEmployeeContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddEmployeeComponent);
  

export default AddEmployeeContainer;  