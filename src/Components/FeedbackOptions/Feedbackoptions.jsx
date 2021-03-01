import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option => (
    <button
      className={styles.feedbackBtn}
      key={option}
      onClick={() => onLeaveFeedback(option)}
    >
      {option}
    </button>
  ));
};

export default FeedbackOptions;
