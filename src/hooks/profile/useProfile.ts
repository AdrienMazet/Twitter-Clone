import { ChangeEvent, useContext, useState } from "react";
import { Context } from "../context/useContextProvider";

const useProfile = () => {
  const [newUsername, setNewUsername] = useState("");
  const { username, handleUsernameChange } = useContext(Context);

  const handleNewUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewUsername(event.target.value);
  };

  const handleChangeUsername = () => {
    handleUsernameChange(newUsername);
  };

  return {
    username,
    newUsername,
    handleNewUsernameChange,
    handleChangeUsername,
  };
};

export default useProfile;
