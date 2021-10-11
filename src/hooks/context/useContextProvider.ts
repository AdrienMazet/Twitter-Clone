import { createContext, useState } from "react";
import INITIAL_TWEETS from "../../assets/tweets.json";

const INITIAL_USERNAME = "Adrien";

export const Context = createContext({
  username: INITIAL_USERNAME,
  tweets: [] as Tweet[],
  likedTweets: [] as string[],
  handleUsernameChange: (_: string) => {},
  handleTweetsChange: (_: Tweet[]) => {},
  handleLikedTweetsChange: (_: string[]) => {},
});

const useContextProvider = () => {
  const [username, setUsername] = useState(INITIAL_USERNAME);
  const [tweets, setTweets] = useState<Tweet[]>(INITIAL_TWEETS);
  const [likedTweets, setLikedTweets] = useState<string[]>([]);

  const handleUsernameChange = (newUsername: string) => {
    setUsername(newUsername);
  };

  const handleTweetsChange = (newTweets: Tweet[]) => {
    setTweets(newTweets);
  };

  const handleLikedTweetsChange = (newLikedTweets: string[]) => {
    setLikedTweets(newLikedTweets);
  };

  return {
    username,
    tweets,
    likedTweets,
    handleUsernameChange,
    handleTweetsChange,
    handleLikedTweetsChange,
  };
};

export default useContextProvider;
