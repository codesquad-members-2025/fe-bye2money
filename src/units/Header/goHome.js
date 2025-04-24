import { useNavigate } from "react-router-dom";

export default function goHome() {
  const navigate = useNavigate();
  return () => navigate("/");
}
