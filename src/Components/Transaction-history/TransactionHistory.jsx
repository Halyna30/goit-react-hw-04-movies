import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  const trList = items.map(item => {
    return (
      <tr key={item.id} className={s.tr}>
        <td className={s.cell}>{item.type}</td>
        <td className={s.cell}>{item.amount}</td>
        <td className={s.cell}>{item.currency}</td>
      </tr>
    );
  });
  return (
    <table className={s.transactionHistory}>
      <thead className={s.tableTitle}>
        <tr>
          <th className={(s.cell, s.tableTitle)}>Type</th>
          <th className={(s.cell, s.tableTitle)}>Amount</th>
          <th className={(s.cell, s.tableTitle)}>Currency</th>
        </tr>
      </thead>

      <tbody>{trList}</tbody>
    </table>
  );
};

export default TransactionHistory;
