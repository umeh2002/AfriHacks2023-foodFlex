import useSwr from "swr";
import { viewOneUser } from "../api/authAPI";

export const useViewOneUser = (userID: string) => {
  const { data, isLoading } = useSwr(`/${userID}/view-one-user`, () =>
    viewOneUser(userID)
  );

  return { data, isLoading };
};
