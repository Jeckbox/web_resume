import styled from 'styled-components';

export const Content = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    min-width: 1280px;
`;
export const Main = styled.div`
    width: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    overflow: hidden;
`;
export const Container = styled.div`
    width: 100%;
    background: #101010;
`;
export const ContainerInner = styled.div`
    width: 1250px;
    box-sizing: boredr-box;
    margin: 0 auto;
    position: relative;
`;
export const FirstBox = styled.div`
    width: 100%;
    box-sizing: boredr-box;
    display: flex;
    justify-content: space-between;
`;
export const FirstInner = styled.div`
    box-sizing: boredr-box;
`;
export const Name = styled.div`
    font-size: 140px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    letter-spacing: -14px;
    text-align: left;
    color: #ffffff;
`;
export const InfoBox = styled.div`
    display: flex;
    justify-content: space-between;
`;
export const Avatar = styled.div`
    width: 257px;
    height: 344px;
    background: gray;
    margin-right: 50px;
`;
export const Div = styled.div`
`;
export const DivFlex = styled.div`
    display: flex;
    justify-content: flex-start;
    color: #d5d2d2;
    margin-bottom: 15px;
`;
export const DivItem = styled.div`
    margin-right: 8px;
    color: #d5d2d2;
    font-size: 18px;
`;
export const ChineseName = styled.div`
  font-size: 42px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 0.99;
  letter-spacing: -1.1px;
  text-align: left;
  color: #ffffff;
  margin-bottom: 20px;
`;
export const Title = styled.div`
    color: #ffffff;
    font-size: 26px;
    margin-bottom: 34px;
`;
export const SubTitle = styled.div`
    color: #ffffff;
    font-size: 18px;
    margin-bottom: 27px;
`;
export const Text = styled.div`
    color: #d5d2d2;
    font-size: 14px;
`;
export const IconBox = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 75px;
`;
export const Icon = styled.div`
    display: flex;
    background: #ffffff;
    border-radius: 50%;
    overflow: hidden;
    margin-left: 43px;
    width: 40px;
    height: 40px;
`;
export const SkillBox = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
`;
export const Skill = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin-right: 10px;
    border-radius: 4px;
    border: 1px solid #ffffff;
    color: #ffffff;
    padding: 0 5px;
    line-height: 22px;
    font-size: 16px;
    cursor: pointer;
    margin-bottom: 15px;
`;
export const Img = styled.div`
    width: 300px;
    height: 144px;
    background: #ffffff;
    margin-right: 118px;
`;
export const Project = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0 62px;
    margin-top: 130px;
`;
export const ProjectItem = styled.div`
    width: 340px;
    height: 330px;
    background: #ffffff;
`;
export const ShowBox = styled.div`
    width: 1072px;
    margin: 105px auto 0;
`;
export const ShowTitle = styled.div`
    width: 100%;
    font-size: 38px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.1;
    letter-spacing: 7.6px;
    text-align: left;
    color: #ffffff;
`;
export const ImgBox = styled.div`
    width: 100%;
    box-sizing: boredr-box;
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
`;
export const ImgBoxLeft = styled.div`
    width: 402px;
`;
export const ImgBoxRight = styled.div`
    width: 605px;
`;
export const ImgBoxRightTop = styled.div`
    display: flex;
    justify-content: space-between;
`;
export const ImgItem = styled.div`
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
    background: #ffffff;
`;
export const SeeMoreBtn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 32px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    color: #000000;
    background: #ffffff;
    margin: 112px auto 0;
    cursor: pointer;
    width: 360px;
    height: 59px;
`;
export const FlexEnd = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;
export const FlexSpace = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
export const LineThrough= styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    font-size: 25px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.67;
    letter-spacing: 20px;
    text-align: left;
    color: #ffffff;
    margin-right: 50px;
`;
export const Line= styled.div`
    width: 107px;
    height: 3px;
    mix-blend-mode: undefined;
    background-color: #13f42e;
    position: absolute;
    top: 50%;
    left: -5px;
    margin-top: -1px;
`;
export const HobbyBox= styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;
export const Hobby= styled.div`
    width: 157px;
    height: 157px;
    background-color: #ffffff;
    box-sizing: boredr-box;
    border: 2px solid #000000;
    transform-origin: center center;
    transform: rotate(${(props) => props.rotate}deg) translateY(${(props) => props.translate}px);
`;
export const TextRightBox= styled.div`
    text-align: right;
`;
export const TextRight= styled.div`
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.79;
    letter-spacing: 2.8px;
    text-align: right;
    color: #c6c6c6;
`;
export const KeepBtn= styled.div`
    width: 142px;
    height: 30px;
    background-color: #ffffff;
    cursor: pointer;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000000;
    margin-top: 50px;
`;
export const FlexCenter= styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;











