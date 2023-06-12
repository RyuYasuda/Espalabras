import { useNavigate } from "react-router-dom";

interface useNavigation {
  // navigateToWordViewPage メソッドの定義を追加する
  navigateToWordViewPage: (param: any) => void;
  navigateToAddWordPage: (param: any) => void;
}

const useNavigation = () => {
  const navigate = useNavigate();

  const navigateToWordViewPage = () => {
    navigate("/");
  };
  const navigateToAddWordPage = () => {
    navigate("/add-word");
  };

  const navigateToOtherUsersPage = () => {
    navigate("/other-users");
  };

  return {
    navigateToWordViewPage,
    navigateToAddWordPage,
    navigateToOtherUsersPage
  };
};

export default useNavigation;
