import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

function getColor() {
  const r = function () {
    return Math.floor(Math.random() * 256);
  };
  return 'rgb(' + r() + ',' + r() + ',' + r() + ')';
}

const Statistics = ({ stats }) => (
  <ul className={styles.statList}>
    {stats.map(stat => (
      <li
        key={stat.id}
        className={styles.item}
        style={{ backgroundColor: getColor() }}
      >
        <span className={styles.label}>{stat.label}</span>
        <span className={styles.percentage}>{stat.percentage}</span>
      </li>
    ))}
  </ul>
);

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Statistics;
