// import { connect } from 'react-redux';
//
// import { login, logout, signup, clearErrors } from '../../../actions/session_actions';
// // import { clearErrors } from '../../actions/error_actions';
// import SessionForm from './session_form';
//
//
// const mapStateToProps = ({ session }) => ({
//   loggedIn: Boolean(session.currentUser),
//   errors: session.errors
// });
//
// const mapDispatchToProps = (dispatch, { formType }) => {
//   const processForm = (formType === 'login') ? login : signup;
//   return {
//     clearErrors: () => dispatch(clearErrors()),
//     processForm: user => dispatch(processForm(user)),
//     formType
//   };
// };
//
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(SessionForm);
