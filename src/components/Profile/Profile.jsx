import css from "./Profile.module.css";
import { FaUserFriends } from "react-icons/fa";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import { useState } from "react";

const Profile = ({ name, tag, location, image, stats, message }) => {
  const [followers, setFollowers] = useState(stats.followers);
  const [views, setViews] = useState(stats.views);
  const [likes, setLikes] = useState(stats.likes);

  const handleFollowersClick = () => {
    setFollowers(prev => prev + 1);
  };

  const handleViewsClick = () => {
    setViews(prev => prev + 1);
  };

  const handleLikesClick = () => {
    setLikes(prev => prev + 1);
  };

  return (
    <div className={css.wrap}>
      <div className={css.profile}>
        <img className={css.image} src={image} alt={name} />
        <p className={css.name}>{name}</p>
        <h2 className={css.greeting}>{message}</h2>
        <p className={css.tag}>@{tag}</p>
        <p className={css.imageText}>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.item} onClick={handleFollowersClick}>
          <span className={css.spanTitle}>
            <FaUserFriends className={css.icon} />
          </span>
          <span className={css.spanValue}>{followers}</span>
        </li>
        <li className={css.item} onClick={handleViewsClick}>
          <span className={css.spanTitle}>
            <AiOutlineEye className={css.icon} />
          </span>
          <span className={css.spanValue}>{views}</span>
        </li>
        <li className={css.item} onClick={handleLikesClick}>
          <span className={css.spanTitle}>
            <AiOutlineLike className={css.icon} />
          </span>
          <span className={css.spanValue}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
