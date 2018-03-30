import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import $ from 'jquery';

import styled from 'styled-components';
const Content = styled.div`
    width: 100%;
    min-width: 1280px;
`;

const Canvas = styled.canvas`
`;
function Vertex(x,y,baseY){
    this.baseY = baseY;         //基线
    this.x = x;                 //点的坐标
    this.y = y;            
    this.vy = 0;                //竖直方向的速度
    this.targetY = 0;           //目标位置
    this.friction = 0.15;       //摩擦力
    this.deceleration = 0.95;   //减速
}
//y坐标更新
Vertex.prototype.updateY = function(diffVal){
    this.targetY = diffVal + this.baseY;   //改变目标位置
    this.vy += (this.targetY - this.y);       //速度
    this.vy *= this.deceleration;
    this.y += this.vy * this.friction;     //改变坐标竖直方向的位置
};


class Wave extends PureComponent {
    canvas;
    ctx;
    W;
    H;
    color1;
    color2;
    vertexes;
    verNum;
    diffPt;
    vPos = 125;//震荡点
    dd = 15;//缓冲
    autoDiff = 2000;//初始差分值
    timer = null;
    componentDidMount() {
        const canvas = document.getElementById('canvas');
        this.canvas = document.getElementById('canvas'),
        this.ctx = canvas.getContext('2d'),
        this.W = window.innerWidth;
        this.H = 300;
        
        this.canvas.width = this.W;
        this.canvas.height = this.H;
        
        this.color2 = "#1f7bfe",    //矩形1的颜色
        this.color1 = "#1f59ef";   //矩形2的颜色
            
        this.vertexes = [],    //顶点坐标
        this.verNum = 250,     //顶点数
        this.diffPt = [];      //差分值
        for (var i=0; i<this.verNum; i++){
            this.vertexes[i] = new Vertex(this.W/(this.verNum-1)*i, this.H/2, this.H/2);
            this.diffPt[i] = 0;                                         //初始值都为0
        }
        this.draw(this.ctx);
        const that = this;
        /*(function drawframe(){
            that.ctx.clearRect(0, 0, that.W, that.H);
            window.requestAnimationFrame(drawframe, that.canvas);
            that.update();
            that.draw();
        })();*/
        this.timer = setInterval(() => {
            that.ctx.clearRect(0, 0, that.W, that.H);
            that.update();
            that.draw();
        }, 50);
        this.canvas.addEventListener('mousedown', function(e){
            var mouse = {x:null, y:null};
    
            if(e.pageX||e.pageY){
                mouse.x = e.pageX;
                mouse.y = e.pageY;
            }else{
                mouse.x = e.clientX + document.body.scrollLeft +document.documentElement.scrollLeft;
                mouse.y = e.clientY + document.body.scrollTop +document.documentElement.scrollTop;
            }

            const totalHeight = $(window).scrollTop() + window.innerHeight;
            //重设差分值
            if(mouse.y>(totalHeight - 300) && mouse.y<(totalHeight)){
                clearInterval(that.timer);
                that.autoDiff = 2000;
                that.vPos = 1 + Math.floor((that.verNum - 2) * mouse.x / that.W);
                that.diffPt[that.vPos] = that.autoDiff;
                that.timer = setInterval(() => {
                    that.ctx.clearRect(0, 0, that.W, that.H);
                    that.update();
                    that.draw();
                }, 50);
            }
    
        }, false);
    }
    draw = () => {
        //矩形1
        this.ctx.save();
        this.ctx.fillStyle = this.color1;
        this.ctx.beginPath();
        this.ctx.moveTo(0, this.H);
        this.ctx.lineTo(this.vertexes[0].x, this.vertexes[0].y);
        for(let i=1; i<this.vertexes.length; i++){
            this.ctx.lineTo(this.vertexes[i].x, this.vertexes[i].y);
        }
        this.ctx.lineTo(this.W,this.H);
        this.ctx.lineTo(0,this.H);
        this.ctx.fill();
        this.ctx.restore();
        
        //矩形2
        this.ctx.save();
        this.ctx.fillStyle = this.color2;
        this.ctx.beginPath();
        this.ctx.moveTo(0, this.H);
        this.ctx.lineTo(this.vertexes[0].x, this.vertexes[0].y+5);
        for(let i = 1; i<this.vertexes.length; i++){
            this.ctx.lineTo(this.vertexes[i].x, this.vertexes[i].y+5);
        }
        this.ctx.lineTo(this.W, this.H);
        this.ctx.lineTo(0, this.H);
        this.ctx.fill();
        this.ctx.restore();
    }
    update = () => {
        if (Math.abs(this.autoDiff) === 0) {
            clearInterval(this.timer);
        }
        this.autoDiff -= this.autoDiff*0.9;        //1
        this.diffPt[this.vPos] = this.autoDiff;         

        //左侧
        for(let i= this.vPos-1; i > 0; i--){     //2
            let d = this.vPos-i;
            if(d > this.dd){
                d = this.dd;
            }
            this.diffPt[i]-=(this.diffPt[i] - this.diffPt[i+1])*(1-0.01*d);
        }
        //右侧
        for(let i = this.vPos+1; i < this.verNum; i++){   //3
            let d = i-this.vPos;
            if(d > this.dd){
                d = this.dd;
            }
            this.diffPt[i] -= (this.diffPt[i] - this.diffPt[i-1])*(1-0.01*d);
        }

        //更新Y坐标
        for(let i = 0; i< this.vertexes.length; i++){  //4
            this.vertexes[i].updateY(this.diffPt[i]);
        }
    }

    ctx;
    
    render() {
        return(
            <Content innerRef={(ref) => { this.content = ref; }}>
                <Canvas id="canvas" />
            </Content>
        );
    }
}
Wave.propTypes = {
};
export default  Wave;