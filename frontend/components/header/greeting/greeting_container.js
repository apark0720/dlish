import {
  connect
} from 'react-redux';
import {
  login,
  logout
} from '../../../actions/session_actions';
import Greeting from './greeting';

const mapStateToProps = ({
  session
}) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  login: (user) => dispatch(login(user)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);
