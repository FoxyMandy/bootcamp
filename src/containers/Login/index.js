import { connect } from "react-redux";
import Login from "../../components/Login";
import { login } from "../../actions/user";

export default connect(
  state => ({ loginReducer: state.loginReducer }),
  { login }
)(Login);
