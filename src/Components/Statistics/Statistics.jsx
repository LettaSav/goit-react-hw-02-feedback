import styles from './Statistics.module.css';

import PropTypes from 'prop-types';

const StatisticsHandler = ({ good, neutral, bad, total, totalPositive }) => {
  return (
    <ul className={styles.stat_name}>
      <li className={styles.stat_item}>Good: {good}</li>
      <li className={styles.stat_item}>Neutural: {neutral} </li>
      <li className={styles.stat_item}>Bad:{bad} </li>
      <li className={styles.stat_item}>Total: {total} </li>
      <li className={styles.stat_item}>Positive feedback : {totalPositive}%</li>
    </ul>
  );
};
StatisticsHandler.propTypes = {
  stats: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    totalPositive: PropTypes.number.isRequired,
  }),
};
export default StatisticsHandler;
