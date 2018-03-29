import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
// import $ from 'jquery';

import styled from 'styled-components';
const Content = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const NavItem = styled.div`
  font-size: 25px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.67;
  letter-spacing: 2.5px;
  text-align: left;
  color: #c7c6c6;
  margin-right: 125px;
  cursor: pointer;

  &:hover{
    color: blue;
  }
`;
class NavTab extends PureComponent {

    renderItem = () =>
        this.props.data.map((item) =>
            <NavItem
                key={item.id}
            >{item.text}</NavItem>
        );
    
    render() {
        return(
            <Content innerRef={(ref) => { this.content = ref; }}>
                {this.renderItem()}
            </Content>
        );
    }
}
NavTab.propTypes = {
    data: PropTypes.array,
};
export default  NavTab;