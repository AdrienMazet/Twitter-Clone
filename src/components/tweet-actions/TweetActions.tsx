import { FaComment, FaHeart, FaRetweet, FaTimes } from "react-icons/fa";
import "../../styles/tweet-actions/tweet-actions.css";

type TweetActionsProps = {
  isLiked: boolean;
  nbComments: number;
  nbRetweets: number;
  nbLikes: number;
  onRetweet: () => void;
  onDelete: () => void;
  onToggleLikedTweet: () => void;
};

const TweetActions = ({
  isLiked,
  nbComments,
  nbRetweets,
  nbLikes,
  onRetweet,
  onDelete,
  onToggleLikedTweet,
}: TweetActionsProps) => (
  <ul className="tweet-actions">
    <li>
      <button type="button" className="tweet-actions-button">
        <FaComment size="18" /> {nbComments}
      </button>
    </li>
    <li>
      <button
        type="button"
        className="tweet-actions-button"
        onClick={onRetweet}
      >
        <FaRetweet size="25" /> {nbRetweets}
      </button>
    </li>
    <li>
      <button
        type="button"
        className="tweet-actions-button"
        onClick={onToggleLikedTweet}
      >
        <FaHeart size="18" color={isLiked ? "rgb(224, 36, 94)" : ""} />{" "}
        {isLiked ? nbLikes + 1 : nbLikes}
      </button>
    </li>
    <li>
      <button type="button" className="tweet-actions-button" onClick={onDelete}>
        <FaTimes size="18" />
      </button>
    </li>
  </ul>
);

export default TweetActions;
