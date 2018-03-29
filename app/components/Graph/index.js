import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import $ from 'jquery';

import styled from 'styled-components';
const Content = styled.div`
    width: 100%;
    height: 500px;
    min-width: 1280px;
    position: relative;
`;

const Canvas = styled.canvas`
`;

class Graph extends PureComponent {

    componentDidMount() {
        const canvas = document.getElementById('line');
        this.canvas = document.getElementById('line');
        const ctx = canvas.getContext('2d');
        
        this.canvas.width = window.innerWidth;
        this.canvas.height = 500;
        const X = window.innerWidth / 10;
        ctx.beginPath();
        ctx.fillStyle= "#101010";
        ctx.moveTo(-X * 2,100);
        ctx.bezierCurveTo(X * 0,800,X * 2,200,X * 5 ,400);
        ctx.bezierCurveTo(X * 7,500,X * 10,-100,X * 11 ,500);
        ctx.lineTo(-X, 500);
        ctx.fill();
    }
    
    render() {
        return(
            <Content innerRef={(ref) => { this.content = ref; }}>
                <Canvas id="line" height={$(this.content).height()} width={$(this.content).width()} />
            </Content>
        );
    }
}
Graph.propTypes = {
};
export default  Graph;