import { useContext, useState } from "react";
import "./profileUpdatePage.scss";
//import { AuthContext } from "../../context/AuthContext"; // Commenting out backend related context import
//import apiRequest from "../../lib/apiRequest"; // Commenting out backend related API request import
//import { useNavigate } from "react-router-dom"; // Commenting out backend related navigation import
import UploadWidget from "../../components/uploadWidget/UploadWidget";

function ProfileUpdatePage() {
  // const { currentUser, updateUser } = useContext(AuthContext); // Commenting out backend related context usage
  const [error, setError] = useState("");
  const [avatar, setAvatar] = useState([]);

  //const navigate = useNavigate(); // Commenting out backend related navigation usage

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const { username, email, password } = Object.fromEntries(formData);

    /* 
    try {
      const res = await apiRequest.put(`/users/${currentUser.id}`, {
        username,
        email,
        password,
        avatar:avatar[0]
      });
      updateUser(res.data);
      navigate("/profile");
    } catch (err) {
      console.log(err);
      setError(err.response.data.message);
    } 
    */
  };

  return (
    <div className="profileUpdatePage">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Update Profile</h1>
          <div className="item">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              defaultValue={"currentUser.username"}
            />
          </div>
          <div className="item">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              defaultValue={"currentUser.email"}
            />
          </div>
          <div className="item">
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" />
          </div>
          <button>Update</button>
          {error && <span>error</span>}
        </form>
      </div>
      <div className="sideContainer">
        <img src={avatar[0] || "currentUser.avatar" || "/noavatar.jpg"} alt="" className="avatar" />
        <UploadWidget
          uwConfig={{
            cloudName: "lamadev",
            uploadPreset: "estate",
            multiple: false,
            maxImageFileSize: 2000000,
            folder: "avatars",
          }}
          setState={setAvatar}
        />
      </div>
    </div>
  );
}

export default ProfileUpdatePage;