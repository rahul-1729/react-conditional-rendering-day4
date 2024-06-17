import PropTypes from 'prop-types';

function UserGreeting(props){
    
    return props.isLoggedIn ? <h2 className ="Welcome-message">Welcome {props.username}</h2>: 
    <h2 className="login-prompt">Please log in to continue</h2>;
}
export default UserGreeting

UserGreeting.proptypes={
    isLoggedIN: PropTypes.bool,
    username: PropTypes.string

}
UserGreeting.defaultProps={
    isLoggedIN: false,
    username:"Guest"
}