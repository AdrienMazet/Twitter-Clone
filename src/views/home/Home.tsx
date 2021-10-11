import Feed from "../../components/feed/Feed";
import TweetForm from "../../components/tweet-form/TweetForm";
import useHome from "../../hooks/home/useHome";
import "../../styles/home/home.css";

const Home = () => {
  const {
    username,
    tweets,
    likedTweets,
    handlePostTweet,
    handleDeleteTweet,
    handleToggleLikedTweet,
  } = useHome();
  return (
    <>
      <TweetForm onSubmit={handlePostTweet} username={username} />
      <div className="separator" />
      <Feed
        tweets={tweets}
        likedTweets={likedTweets}
        onRetweet={handlePostTweet}
        onDelete={handleDeleteTweet}
        onToggleLikedTweet={handleToggleLikedTweet}
      />
    </>
  );
};

export default Home;
