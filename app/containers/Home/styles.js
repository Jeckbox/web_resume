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
    display: flex;
    justify-content: center;
`;
export const ContainerInner = styled.div`
    width: 1250px;
    box-sizing: boredr-box;
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