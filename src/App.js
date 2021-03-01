import StatisticsHandler from './Components/Statistics/Statistics';
import FeedbackOptions from './Components/FeedbackOptions/Feedbackoptions';
import Section from './Components/Section/Section';
import Notification from './Components/Notifictions/Notification';
import { useState } from 'react';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const AddFeedback = options => {
    switch (options) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + bad + neutral;
  };
  const countPositiveFeedbackPercentage = () => {
    return Math.round((good * 100) / countTotalFeedback() || 0);
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={AddFeedback}
        />
      </Section>
      {countTotalFeedback() === 0 ? (
        <Notification message="No feedback given" />
      ) : (
        <Section title="Statistics">
          <StatisticsHandler
            good={good}
            bad={bad}
            neutral={neutral}
            total={countTotalFeedback()}
            totalPositive={countPositiveFeedbackPercentage()}
          />
        </Section>
      )}
    </>
  );
}

export default App;
