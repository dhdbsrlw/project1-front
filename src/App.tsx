import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect, createContext } from 'react';
import styled from 'styled-components';
import Header from './components/base/Header';
import Footer from './components/base/Footer';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import PreviousPage from './pages/PreviousPage';
import PreviousDetailPage from './pages/PreviousDetailPage';
import MyBoardPage from './pages/MyBoardPage';
import CommunityPage from './pages/CommunityPage';
import MessagePage from './pages/MessagePage';
import SettingsPage from './pages/SettingsPage';
import SignUp1Page from './pages/SignUp/SignUp1Page';
import SignUp2Page from './pages/SignUp/SignUp2Page';
import SignUp3Page from './pages/SignUp/SignUp3Page';
import AuthRequired from './AuthRequired';
import { SignUp4Page, SignUp4PageCandidate, SignUp4PagePasser } from './pages/SignUp/SignUp4Page';
import { SignUp5Page, SignUp5Complete } from './pages/SignUp/SignUp5Page';

const Wrapper = styled.div`
  width: 100vw; // 1920px;
  height: 100vw; // 1248px; // Footer 요소가 포함이 되지 않는 관계로, Footer 높이를 제외한 높이
  max-width: 1920px;
  max-height: 1510px;
  aspect-ratio: 1920/1248;
  margin-top: 96px;
  box-sizing: border-box;
`;

// marginTop 은 Header 에 페이지가 가리지 않게 하기 위해서.
export default function App() {
  const [isLogined, setisLogined] = useState<boolean>(false);

  useEffect(() => {
    if (window.localStorage.isLogin === 'true') setisLogined(true);
    else setisLogined(false);
  }, []);

  return (
    <Wrapper>
      <Header logined={isLogined} setLogin={setisLogined} />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage setLogin={setisLogined} />} />
        <Route element={<AuthRequired />}>
          <Route path="/previous" element={<PreviousPage />} />
          <Route path="/previous/:majorName" element={<PreviousDetailPage />} />
          <Route path="/myboard" element={<MyBoardPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/message" element={<MessagePage />} />
        </Route>
        <Route path="/join" element={<SignUp1Page />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/signup1" element={<SignUp1Page />} />
        <Route path="/signup2" element={<SignUp2Page />} />
        <Route path="/signup3" element={<SignUp3Page />} />
        <Route path="/signup4" element={<SignUp4Page />} />
        <Route path="/signup4-candidate" element={<SignUp4PageCandidate />} />
        <Route path="/signup4-passer" element={<SignUp4PagePasser />} />
        <Route path="/signup5" element={<SignUp5Page />} />
        <Route path="/signupcomplete" element={<SignUp5Complete />} />
      </Routes>
      <Footer />
    </Wrapper>
  );
}
