import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

/*
추후 수정 필요한 사항 
1. 이미지 파일 잘림 문제 해결
2. ContentsWrapper gap 픽셀값 변경

Carousel 2, 3 파일 또한 이상 동일
*/

const Wrapper = styled.div`
  width: 100vw;
  // max-width: 2560px;
  // max-width: 1920px;
  height: 100%; //630px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  background-size: cover; // contain;
  // background-image: url('/design_image/carousel/login_banner1_extend.png');
  background-image: url('/design_image/carousel/carousel1.png');
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  gap: 12px;
  margin-right: 52.083%; // 1000px;
`;

const DirectButton = styled.div`
  width: 124px;
  height: 44px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.3);
  box-shadow: 0px 0px 40px 0px rgba(216, 88, 136, 0.2);
  margin-bottom: 8px;
`;

const ButtonText = styled.text`
  color: #d85888;
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 100% */
  letter-spacing: -0.6px;
`;

const TextWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

const Text = styled.text`
  color: #121212;
  text-align: right;
  font-family: Pretendard;
  font-size: 32px;
  font-style: normal;
  font-weight: 300;
  line-height: 28px; /* 87.5% */
`;

const BoldText = styled.div`
  color: #121212;
  font-family: Pretendard;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
`;

function Carousel1() {
  const navigate = useNavigate(); // 추후 버튼에 적용
  return (
    <Wrapper>
      <ContentWrapper>
        <DirectButton>
          <ButtonText>합격자료</ButtonText>
        </DirectButton>
        <TextWrapper>
          <Text>지난학기, 지지난학기 경영학과 커트라인까지</Text>
        </TextWrapper>
        <TextWrapper>
          <BoldText>한번에 모아서&nbsp;</BoldText>
          <Text>보여드릴게요.</Text>
        </TextWrapper>
      </ContentWrapper>
    </Wrapper>
  );
}

export default Carousel1;
