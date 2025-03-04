import React, { createContext, useContext, useState } from "react";

const UserInfoContext = createContext();

// UserInfoProvider
// 사용자 컴포넌트
export const UserInfoProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({
    realName: "",
    nickname: "",
    email: "",
    passwd: "",
    checkPasswd: "",
    phoneNumber: "",
    postalCode: "",
    address: "",
    detailAddress: "",
    charId: 0,
    charName: "",
    stepGoal: 10000,
    todaySteps: 1000, // 오늘 걸음 수 초기화

    // 포인트
    point: 10000,
  });

  return (
    <UserInfoContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserInfoContext.Provider>
  );
};

export const useUserInfo = () => useContext(UserInfoContext);
