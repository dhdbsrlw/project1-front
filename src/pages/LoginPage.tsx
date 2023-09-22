import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Typography from '../assets/Typography';
import NextButton from '../assets/buttons/NextButton';
import LoginModal from './LoginModal';
import axios from 'axios';

const Wrapper = styled.div`
  width: 100%;
  height: 1511px;
  display: flex;
  justify-content: center;
  background-color: #fcfafb;
`;

const LoginBox = styled.div`
  width: 816px;
  height: 952px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 76px;
  flex-shrink: 0;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.7);
`;

const LogoBox = styled.div`
  display: flex;
  height: 59.457px;
  justify-content: center;
  align-items: center;
  gap: 10.955px;
  flex-shrink: 0;
  margin-top: 118px;
  margin-bottom: 8px;
`;

const LogoImage = styled.img`
  width: 60.615px;
  height: 59.457px;
  flex-shrink: 0;
`;

const LogoText = styled.text`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #000;
  font-family: 'GmarketSans';
  font-size: 2.1em; // (참고) 폰트크기의 기본값은 16px
  font-style: normal;
  line-height: normal;
  font-weight: 500;
  letter-spacing: 1.177px;
`;

const TextFieldWrapper = styled.div`
  display: flex;
  width: 628px;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 34px;
`;

const IDField = styled.input<{ isFilled: boolean }>`
  display: flex;
  width: 592px;
  padding: 25px 18px;
  align-items: flex-start;
  gap: 8px;
  border-radius: 10px;
  border: ${(props) => (props.isFilled ? '1px solid #D85888' : '1px solid #b9b9b9')};
  background: #fff;
  box-shadow: 0px 0px 12px 0px rgba(216, 88 136, 0.1);
  color: #d85888;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  &::placeholder {
    color: rgba(185, 185, 185, 0.8);
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px;
  }
`;

const PasswordField = styled.input<{ isFilled: boolean }>`
  display: flex;
  width: 592px;
  padding: 25px 18px;
  align-items: flex-start;
  gap: 8px;
  border-radius: 10px;
  border: ${(props) => (props.isFilled ? '1px solid #D85888' : '1px solid #b9b9b9')};
  background: #fff;
  font-size: 18px;
  letter-spacing: 5px;
  &::placeholder {
    color: rgba(185, 185, 185, 0.8);
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: 0px;
  }
`;

const TextBox = styled.div`
  display: flex;
  width: 628px;
`;

const CheckButton = styled.button<{ checked: boolean }>`
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  background-image: url(${(props) =>
    props.checked ? 'design_image/Check_Circle.png' : 'design_image/D_Check-circle.png'});
  background-size: cover;
  border: none;
  cursor: pointer;
  margin-right: 4px;
`;

const LinkBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  margin-top: 66px;
  margin-bottom: 87px;
`;

const Link = styled.button`
  color: rgba(216, 88, 136, 0.8);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px; /* 100% */
  text-decoration-line: underline;
  text-transform: uppercase;
`;

export interface LoginPageProps {
  setLogin: (state: boolean) => void;
}

function LoginPage(props: LoginPageProps) {
  const { setLogin } = props;
  const navigate = useNavigate();
  const handleLink2Click = () => {
    navigate('/join');
  };

  const [ID, setID] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isChecked, setIsChecked] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  // login API 접근
  const onLoginClick = async () => {
    const url = 'http://localhost:8080/auth/login';
    try {
      await axios.post(url, {
        email: ID,
        password: password,
        isRememberOn: isChecked,
      });
      //로그인 상태를 유지하기 위해 localStorage에 로그인 여부와 ID를 저장 후 login 상태를 true로 바꾸고 메인 페이지로 보낸다.
      window.localStorage.setItem('isLogin', 'true');
      window.localStorage.setItem('loginedUser', ID);
      setLogin(true);
      navigate('/');
    } catch (err) {
      // 이후 수정 필요함.
      alert(err);
    }
  };

  return (
    <Wrapper>
      <LoginBox>
        <LogoBox>
          <LogoImage src="../../design_image/logo.png" />
          <LogoText>쿠플라이</LogoText>
        </LogoBox>
        <Typography size="mediumText" style={{ marginBottom: '85px' }}>
          고려대학교 메일로 이용하는 쿠플라이의 모든 서비스
        </Typography>
        <TextFieldWrapper>
          <TextBox>
            <Typography size="mediumText" bold="700">
              쿠플라이 아이디
            </Typography>
            <Typography size="mediumText">를 입력해주세요.</Typography>
          </TextBox>
          <IDField
            placeholder="0000@korea.ac.kr"
            value={ID}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setID(e.target.value);
            }}
            isFilled={ID !== ''}
          />
        </TextFieldWrapper>
        <TextFieldWrapper>
          <TextBox>
            <Typography size="mediumText" bold="700">
              비밀번호
            </Typography>
            <Typography size="mediumText">를 입력해주세요.</Typography>
          </TextBox>
          <PasswordField
            type="password"
            placeholder="비밀번호 입력"
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setPassword(e.target.value);
            }}
            isFilled={password !== ''}
          />
        </TextFieldWrapper>
        <TextBox>
          <CheckButton checked={isChecked} onClick={() => setIsChecked((prevState) => !prevState)}></CheckButton>
          <Typography size="mediumText" bold="600" color={isChecked ? '#D85888' : '#A8A8A8'}>
            로그인 상태 유지
          </Typography>
        </TextBox>
        <LinkBox>
          <Link style={{ marginBottom: '8px' }} onClick={toggleModal}>
            비밀번호를 잊으셨나요?
          </Link>
          <Link onClick={handleLink2Click}>회원가입</Link>
        </LinkBox>
        <NextButton
          active={ID !== '' && password !== ''}
          disabled={ID === '' || password === ''}
          onClick={onLoginClick}
        >
          로그인
        </NextButton>
      </LoginBox>
      {isModalVisible && <LoginModal />}
    </Wrapper>
  );
}

export default LoginPage;
