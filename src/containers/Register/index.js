import { connect } from "react-redux";
import Register from "../../components/Register";
import { register } from "../../actions/user";

export default connect(
  state => ({ registerReducer: state.registerReducer }),
  { register }
)(Register);
