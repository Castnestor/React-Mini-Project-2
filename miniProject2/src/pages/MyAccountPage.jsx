import { useUserContext } from "../context/userContext";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import userAvatar from "../assets/userAvatar.png";

function MyAccount() {
  function SizeAvatars() {
    return (
      <Stack direction="row" spacing={2}>
        <Avatar
          className="avatar"
          alt="Remy Sharp"
          src={userAvatar}
          sx={{ width: 250, height: 250 }}
        />
      </Stack>
    );
  }

  const { logedUser } = useUserContext();

  if (!logedUser.name)
    return (
      <>
        <h3>You are not Logged in</h3>
      </>
    );

  return (
    <>
      <h1>My account</h1>
      <SizeAvatars />
      <div>
        <div className="userName">{logedUser.name}</div>
        <div className="userEmail">{logedUser.email}</div>
      </div>
    </>
  );
}

export default MyAccount;
