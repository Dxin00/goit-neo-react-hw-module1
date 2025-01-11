import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css";

const FriendList = ({ list }) => {
  return (
    <>
      <ul className={css.list}>
        {list.map((friend) => {
          return (
            <li key={friend.id} className={css.item}>
              <FriendListItem
                avatar={friend.avatar}
                name={friend.name}
                isOnline={friend.isOnline}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default FriendList;
