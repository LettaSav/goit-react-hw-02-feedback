import style from './Notification.module.css';

import PropTypes from 'prop-types';

const Notifications = ({ message }) => {
  return <p className={style.message}>{message}</p>;
};

Notifications.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notifications;
