import { useAuthRedirect } from "../../hooks/useAuthRedirect";

export const HomePage = () => {
  useAuthRedirect();

  return (
    <div>
      <div>HomePage</div>
    </div>
  );
};
