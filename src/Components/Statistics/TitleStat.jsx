import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const TitleStat = ({ title, children }) => (
  <section className={s.statistics}>
    {title && <h2 className={s.title}>{title}</h2>}
    {children}
  </section>
);

TitleStat.defaultProps = {
  title: '',
  children: [],
};

TitleStat.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default TitleStat;
