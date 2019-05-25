import styled from 'styled-components';
import logoPic from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
    position: relative;
    height: 56px;
    border-bottom: 1px solid #f0f0f0;
`
export const Logo = styled.a.attrs({
    href: '/'
})`
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100px;
    height: 56px;
    background: url(${logoPic});
    background-size: contain;
    margin-left: 50px;
`
export const Nav = styled.div`
    margin: 0 auto;
    width: 1180px;
    height: 100%;
    box-sizing: border-box;
    padding-right: 70px;
`
export const NavItem = styled.div`
    line-height:56px;
    padding: 0 15px;
    font-size: 17px;
    color: #333;
    &.left{
        float: left;
    }
    &.right{
        float: right;
        color: #969696;
    } 
    &.active{
        color: #ea6f5a;
    }
`
export const SearchWrapper = styled.div`
    position: relative;
    float: left;
    .zoom {
        position: absolute;
        right: 25px;
        bottom: 4px;
        width: 30px;
        height: 30px;
        line-height:30px;
        border-radius: 50%;
        text-align: center;
        &.focused{
            background: #777;
            color: #fff;
        }
    }
`
export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    width: 180px;
    height: 38px;
    margin: 9px 20px 0 0;
    margin-left: 20px;
    padding: 0 30px 0 20px;
    box-sizing: border-box;
    border: none;
    outline: none;
    border-radius: 19px;
    background:#eee;
    font-size: 14px;
    color: #666;
    &::placeholder {
        color：#666;
        font-weight: 550;
    }
    &.focused {
        width: 260px;
    }
    &.slide-enter {
        transition: all .4s ease-out
    }
    &.slide-enter-active {
        width: 240px;
    }
    &.slide-exit {
        transition: all .4s ease-out
    }
    &.slide-exit-active {
        width: 180px;
    }
`
export const SearchInfo = styled.div`
    position: absolute;
    left: 25px;
    top: 56px;
    width: 210px;
    padding: 0 20px;
    box-shadow: 0 0 8px rgba(0, 0, 0, .2);
    border-radius: 3px;
`
export const SearchInfoTitle = styled.div`
    margin: 10px 0 ;
    padding: 0 5px;
    line-height: 20px;
    font-size: 14px;
    color: #969696;
`
export const SearchInfoSwitch = styled.span`
    float: right;
    font-size: 12px;
    .spin {
        display: block;
        float: left;
        font-size: 12px;
        margin-right: 4px;
        transition: all .2s ease-in;
        transform-origin: center center;
    }
`

export const SeatchInfoList = styled.div`
    overflow: hidden;
    margin-bottom: 10px;
`

export const SearchInfoItem = styled.a`
    display: block;
    float: left;
    line-height: 20px;
    padding: 0 5px;
    margin: 5px 0 5px 7px;
    font-size: 12px;
    border: 1px solid #ddd;
    border-radius: 3px;
    color: #787878;
`

export const Addition = styled.div`
    position: absolute;
    right:0;
    top: 0
    height: 56px;
`

export const Button = styled.div`
    float: right;
    margin: 9px 20px 0 0;
    padding: 0 20px;
    line-height: 38px;
    border-radius: 19px;
    border: 1px solid #ec6149;
    &.reg{
        color: #ec6149;
    }
    &.writting{
        color: #fff;
        background: #ec6149;
    }
`

