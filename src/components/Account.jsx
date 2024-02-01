import useAuth from "../hooks/useAuth";
import useUser from "../hooks/useUser";
import NavBar from "../components/NavBar";

export default function Account() {
  const { setToken } = useAuth();
  const { userName } = useUser();

  function eventHandler() {
    try {
      setToken(null);
      localStorage.removeItem("token");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <NavBar />
      <div>Logged In! Hello {userName}</div>
      <button onClick={eventHandler}>Log me Out</button>
    </>
  );
}
