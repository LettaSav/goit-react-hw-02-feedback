import styles from './Statistics.module.css';

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

export default StatisticsHandler;
