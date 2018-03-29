import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import StarBg from 'components/StarBg/index.js';
// import Wave from 'components/Wave/index.js';
import Graph from 'components/Graph/index.js';
import NavTab from 'components/NavTab/index.js';

import {
    Content,
    Main,
    Container,
    ContainerInner,
    FirstBox,
    FirstInner,
    Name,
    InfoBox,
    Avatar,
    Div,
    ChineseName,
    DivFlex,
    DivItem,
    Title,
    SubTitle,
    Text,
    IconBox,
    Icon,
    SkillBox,
    Skill,
    Img,
    Project,
    ProjectItem,
    ShowBox,
    ShowTitle,
    ImgBox,
    ImgBoxLeft,
    ImgBoxRight,
    ImgItem,
    ImgBoxRightTop,
    SeeMoreBtn,
} from './styles.js';

const navData = [
    { id: 1, text: 'pc端' },
    { id: 2, text: 'APP移动端' },
    { id: 3, text: 'pc端' },
];

class Home extends PureComponent {
    componentDidMount() {    
    }
    render() {
        return(
            <Content>
                <Helmet title="简历" />
                <StarBg />
                <Main>
                    <Graph></Graph>
                    <Container>
                        <ContainerInner>
                            <FirstBox>
                                <FirstInner>
                                    <Name>Weishibo</Name>
                                </FirstInner>
                                <FirstInner style={{ width: '465px' }}>
                                    <Div>
                                        <Title>自我介绍</Title>
                                        <SubTitle>积极，乐观，追求新事物，研究新技术</SubTitle>
                                        <Text>本人善于沟通，有较强的创新意识和吃苦精神；对新事物的接受能力较强，能抗压，能在压力下不断的进步，提升自己；喜欢参与团队拓展活动。对很炫的网页毫无抵抗力，喜欢扣源码。</Text>
                                    </Div>
                                </FirstInner>
                            </FirstBox>
                            <FirstBox style={{ marginTop: '108px' }}>
                                <FirstInner>
                                    <InfoBox>
                                        <Avatar></Avatar>
                                        <Div>
                                            <ChineseName>韦仕博</ChineseName>
                                            <DivFlex>
                                                <DivItem>年龄：</DivItem>
                                                <DivItem>25</DivItem>
                                            </DivFlex>
                                            <DivFlex>
                                                <DivItem>学历：</DivItem>
                                                <DivItem>本科</DivItem>
                                                <DivItem>统招</DivItem>
                                            </DivFlex>
                                            <DivFlex>
                                                <DivItem>籍贯：</DivItem>
                                                <DivItem>广西</DivItem>
                                                <DivItem>河池</DivItem>
                                            </DivFlex>
                                            <DivFlex>
                                                <DivItem>证书：</DivItem>
                                                <DivItem>CET-4</DivItem>
                                            </DivFlex>
                                            <DivFlex style={{ marginTop: '30px' }}>
                                                <DivItem>学校：</DivItem>
                                                <DivItem>华中农业大学（国家211工程重点大学）</DivItem>
                                            </DivFlex>
                                            <DivFlex>
                                                <DivItem>联系电话：</DivItem>
                                                <DivItem>15811814706</DivItem>
                                            </DivFlex>
                                            <DivFlex>
                                                <DivItem>邮箱：</DivItem>
                                                <DivItem>544280798@qq.com</DivItem>
                                            </DivFlex>
                                        </Div>
                                    </InfoBox>
                                </FirstInner>
                                <FirstInner style={{ width: '465px' }}>
                                    <IconBox>
                                        <Icon></Icon>
                                        <Icon></Icon>
                                        <Icon></Icon>
                                    </IconBox>
                                    <InfoBox style={{ display: 'block' }}>
                                        <Title style={{ marginBottom: '17px' }}>技能掌握</Title>
                                        <SkillBox>
                                            <Skill>Javascript</Skill>
                                            <Skill>Html/Html5</Skill>
                                            <Skill>CSS/CSS3</Skill>
                                            <Skill>Ajax</Skill>
                                            <Skill>fetch</Skill>
                                            <Skill>axios</Skill>
                                            <Skill>Jquery</Skill>
                                            <Skill>React</Skill>
                                            <Skill>Vue</Skill>
                                        </SkillBox>
                                    </InfoBox>
                                </FirstInner>
                            </FirstBox>
                            <FirstBox style={{ marginTop: '110px' }}>
                                <FirstInner>
                                    <Text style={{ fontSize: '45px', color: '#ffffff' }}>Work  experience</Text>
                                    <Text style={{ fontSize: '25px', color: '#ffffff', letterSpacing: '24.5px' }}>工作经历与项目</Text>
                                </FirstInner>
                                <FirstInner>
                                    <Img></Img>
                                </FirstInner>
                            </FirstBox>
                            <Project>
                                <ProjectItem></ProjectItem>
                                <ProjectItem></ProjectItem>
                                <ProjectItem></ProjectItem>
                            </Project>
                            <FirstBox style={{ marginTop: '112px' }}>
                                <FirstInner>
                                    <Text style={{ fontSize: '45px', color: '#ffffff' }}>Main  works</Text>
                                    <Text style={{ fontSize: '25px', color: '#ffffff', letterSpacing: '24.5px' }}>主要作品展示</Text>
                                </FirstInner>
                                <NavTab data={navData} />
                            </FirstBox>
                            <ShowBox>
                                <ShowTitle>PC端</ShowTitle>
                                <ImgBox>
                                    <ImgBoxLeft>
                                        <ImgItem width='402' height='198' style={{ marginBottom: '63px' }}></ImgItem>
                                        <ImgItem width='402' height='164' style={{ marginBottom: '63px' }}></ImgItem>
                                        <ImgItem width='402' height='308'></ImgItem>
                                    </ImgBoxLeft>
                                    <ImgBoxRight>
                                        <ImgBoxRightTop style={{ marginBottom: '63px' }}>
                                            <div>
                                                <ImgItem width='293' height='380' style={{ marginBottom: '63px' }}></ImgItem>
                                                <ImgItem width='293' height='151'></ImgItem>
                                            </div>
                                            <div>
                                                <ImgItem width='247' height='155' style={{ marginBottom: '63px' }}></ImgItem>
                                                <ImgItem width='247' height='371'></ImgItem>
                                            </div>
                                        </ImgBoxRightTop>
                                        <ImgItem width='605' height='139'></ImgItem>
                                    </ImgBoxRight>
                                </ImgBox>
                                <SeeMoreBtn>查看更多</SeeMoreBtn>
                            </ShowBox>
                        </ContainerInner>
                    </Container>
                </Main>
            </Content>
        );
    }
}
Home.propTypes = {
    history: PropTypes.object,
};
export default  Home;