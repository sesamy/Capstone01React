import useAuth from "../hooks/useAuth";

export default function Account() {
  const { token } = useAuth();
  return <div>{token}</div>;
}
