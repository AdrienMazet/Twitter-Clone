import "../../styles/tweet/tweet.css";
import Avatar from "../avatar/Avatar";

type TweetProps = {
  username: string;
  createdOn: string;
  children: React.ReactNode | React.ReactNode[];
};

const Tweet = ({ username, createdOn, children }: TweetProps) => (
  <div className="tweet">
    <Avatar username={username} />
    <div>
      <div className="tweet-header">
        <span className="tweet-username">@{username}</span>·
        <span className="tweet-created-on">
          {new Date(createdOn).toLocaleString("fr")}
        </span>
      </div>
      <div className="tweet-content">{children}</div>
    </div>
  </div>
);

export default Tweet;
