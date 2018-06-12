import { connect } from 'react-redux';
import AddEmployeeComponent from '../../components/home/AddEmployeeComponent';
import {nameState,phoneNumberState,shiftState,createUser} from '../../services/home/Action'


const mapStateToProps = (state) => ({
    empData : state.empDataReducer
  });
  
const mapDispatchToProps = (dispatch) => ({ 
    nameState: (name) => dispatch(nameState(name)),
    phoneNumberState: (phoneNumber) => dispatch(phoneNumberState(phoneNumber)),
    shiftState: (shift) => dispatch(shiftState(shift)),
    createUser: (name,phoneNumber,shift) => dispatch(createUser(name,phoneNumber,shift))
});

const AddEmployeeContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddEmployeeComponent);
  

export default AddEmployeeContainer;  