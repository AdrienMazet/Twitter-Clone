import "../../styles/avatar/avatar.css";

type AvatarProps = {
  username: string;
};

const Avatar = ({ username }: AvatarProps) => (
  <div className="avatar">{username.charAt(0)}</div>
);

export default Avatar;
