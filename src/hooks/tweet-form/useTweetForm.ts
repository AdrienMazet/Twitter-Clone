import { useState } from "react";

const useTweetForm = (onSubmit: (content: string) => void) => {
  const [newTweet, setNewTweet] = useState("");

  const handleNewTweetValueChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    if (event.target.value.length <= 25) {
      setNewTweet(event.target.value);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(newTweet);
    setNewTweet("");
  };

  return { newTweet, handleNewTweetValueChange, handleSubmit };
};

export default useTweetForm;
