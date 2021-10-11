import { useContext } from "react";
import { Context } from "../context/useContextProvider";

const useHome = () => {
  const {
    username,
    tweets,
    likedTweets,
    handleTweetsChange,
    handleLikedTweetsChange,
  } = useContext(Context);

  const handlePostTweet = (content: string) => {
    const newTweet: Tweet = {
      content,
      username,
      id: "_" + Math.random().toString(36).substr(2, 9),
      created_on: new Date(Date.now()).toString(),
      comments_count: 0,
      retweets_count: 0,
      likes_count: 0,
    };
    handleTweetsChange([...tweets, newTweet]);
  };

  const handleDeleteTweet = (tweetId: string) => {
    handleTweetsChange(tweets.filter((tweet) => tweet.id !== tweetId));
  };

  const handleToggleLikedTweet = (tweetId: string) => {
    const foundIndex = likedTweets.indexOf(tweetId);
    if (foundIndex > -1) {
      handleLikedTweetsChange(
        likedTweets.filter((likedTweetID) => likedTweetID !== tweetId)
      );
    } else {
      handleLikedTweetsChange([...likedTweets, tweetId]);
    }
  };

  return {
    username,
    tweets,
    likedTweets,
    handlePostTweet,
    handleDeleteTweet,
    handleToggleLikedTweet,
  };
};

export default useHome;
