import Avatar from "../../components/avatar/Avatar";
import useProfile from "../../hooks/profile/useProfile";
import "../../styles/profile/profile.css";

const Profile = () => {
  const {
    username,
    newUsername,
    handleNewUsernameChange,
    handleChangeUsername,
  } = useProfile();
  return (
    <div className="profile">
      <Avatar username={username} />
      <h2>{username}</h2>
      <div>
        <input
          placeholder="New username..."
          value={newUsername}
          onChange={handleNewUsernameChange}
        />
        <button
          disabled={newUsername.length === 0}
          onClick={handleChangeUsername}
        >
          Change username
        </button>
      </div>
    </div>
  );
};

export default Profile;
