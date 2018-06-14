import { connect } from 'react-redux';
import EmployeeListCompoment from '../../components/home/EmployeeListCompoment';
import {fetchEmpList} from '../../services/home/Action'


const mapStateToProps = (state) => ({
    empListData : state.empDataReducer
  });
  
const mapDispatchToProps = (dispatch) => ({ 
    fetchEmpList: () => dispatch(fetchEmpList()),
});

const EmployeeListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(EmployeeListCompoment);
  

export default EmployeeListContainer;  