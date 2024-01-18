import useAuth from "../hooks/useAuth";

export default function Account() {
  const { token } = useAuth();

  async function eventHandler() {}

  return (
    <>
      <div>Logged In!</div>
      <button onClick={eventHandler}>Log me Out</button>
    </>
  );
}
