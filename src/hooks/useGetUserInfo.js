export const useGetUserInfo = () => {
  const { name, prodilePhoto, userID, isAuth } = JSON.parse(
    localStorage.getItem("auth")
  );

  return { name, prodilePhoto, userID, isAuth };
};
