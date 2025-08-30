import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Browse = () => {
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // navigation automatically handles from onAuthStateChange from body
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div>
      <button
        onClick={handleSignOut}
        className="font-bold p-5 m-10 text-black bg-red-500"
      >
        Sign Out
      </button>
    </div>
  );
};

export default Browse;
