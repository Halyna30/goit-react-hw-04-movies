import PropTypes from 'prop-types';
import s from './Profile.module.css';

const Profile = ({ name, tag, location, avatar, stats }) => {
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img
          src={avatar}
          alt="Аватар пользователя"
          className={s.avatar}
          width="150"
          height="150"
        />
        <p className={s.p}>{name}</p>
        <p className={s.p}>@{tag}</p>
        <p className={s.p}>{location}</p>
      </div>

      <ul className={s.stats}>
        <li>
          <span className={s.span}>Followers</span>
          <span className={s.span}>{stats.followers}</span>
        </li>
        <li>
          <span className={s.span}>Views</span>
          <span className={s.span}>{stats.views}</span>
        </li>
        <li>
          <span className={s.span}>Likes</span>
          <span className={s.span}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};

export default Profile;
