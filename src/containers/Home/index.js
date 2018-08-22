import { connect } from "react-redux";
import Home from "../../components/Home";
import { validateToken } from "../../actions/user";

export default connect(
  state => ({ loginReducer: state.loginReducer }),
  { validateToken }
)(Home);
