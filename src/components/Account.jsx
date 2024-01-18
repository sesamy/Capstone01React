import useAuth from "../hooks/useAuth";

export default function Account() {
  const { setToken } = useAuth();

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
      <div>Logged In!</div>
      <button onClick={eventHandler}>Log me Out</button>
    </>
  );
}
