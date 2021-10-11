import "../../styles/feed/feed.css";
import TweetActions from "../tweet-actions/TweetActions";
import Tweet from "../tweet/Tweet";

type FeedProps = {
  tweets: Tweet[];
  likedTweets: string[];
  onRetweet: (content: string) => void;
  onDelete: (tweetId: string) => void;
  onToggleLikedTweet: (tweetId: string) => void;
};

const Feed = ({
  tweets,
  likedTweets,
  onRetweet,
  onDelete,
  onToggleLikedTweet,
}: FeedProps) => (
  <ul className="feed">
    {tweets
      .sort(
        (a: Tweet, b: Tweet) =>
          new Date(b.created_on).getTime() - new Date(a.created_on).getTime()
      )
      .map((tweet) => (
        <li key={tweet.id} className="feed-item">
          <Tweet username={tweet.username} createdOn={tweet.created_on}>
            {tweet.content}
          </Tweet>
          <TweetActions
            isLiked={likedTweets.includes(tweet.id)}
            nbComments={tweet.comments_count}
            nbRetweets={tweet.retweets_count}
            nbLikes={tweet.likes_count}
            onRetweet={() =>
              onRetweet(`Retweeted from @${tweet.username}: "${tweet.content}"`)
            }
            onDelete={() => onDelete(tweet.id)}
            onToggleLikedTweet={() => onToggleLikedTweet(tweet.id)}
          />
        </li>
      ))}
  </ul>
);

export default Feed;
