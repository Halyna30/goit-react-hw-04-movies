import PropTypes from 'prop-types';
import s from './FriendList.module.css';

const FriendList = ({ friends }) => {
  const itemLi = friends.map(friend => {
    return (
      <li className={s.item} key={friend.id}>
        <span
          className={friend.isOnline ? s.statusOnline : s.statusOffline}
        ></span>
        <img className={s.avatar} src={friend.avatar} alt="avatar" width="48" />
        <p className={s.name}>{friend.name}</p>
      </li>
    );
  });
  return <ul className={s.friendList}>{itemLi}</ul>;
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default FriendList;
