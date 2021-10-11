import useTweetForm from "../../hooks/tweet-form/useTweetForm";
import "../../styles/tweet-form/tweet-form.css";
import Avatar from "../avatar/Avatar";

type TweetFormProps = {
  username: string;
  onSubmit: (content: string) => void;
};

const TweetForm = ({ username, onSubmit }: TweetFormProps) => {
  const { newTweet, handleNewTweetValueChange, handleSubmit } =
    useTweetForm(onSubmit);
  return (
    <form className="tweet-form" onSubmit={handleSubmit}>
      <div className="tweet-form-container">
        <Avatar username={username} />
        <textarea
          value={newTweet}
          onChange={handleNewTweetValueChange}
          className="tweet-form-textarea"
          placeholder="What's happening?"
        />
      </div>
      <div className="tweet-form-footer">
        <p>{newTweet.length} / 25</p>
        <button disabled={newTweet.length === 0} className="tweet-form-submit">
          Tweet
        </button>
      </div>
    </form>
  );
};

export default TweetForm;
