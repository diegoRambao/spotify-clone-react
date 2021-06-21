import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { colors } from 'consts/styles'

export const Nav = styled.nav`
    background: ${colors.black};
    height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* padding: 0.5rem calc((100vw - 1000px) / 2); */
    z-index: 10; 
`

export const NavMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    position: fixed;
    background: ${colors.black};
    top: 10vh;
    height:90vh;
    width: 100%;
    left: ${props => (props.open ? '0' : '-100%')};;
    transition: left 0.3s linear;
    animation-delay: 1.2s;  
    gap: 3rem;
    padding: ${props => (props.open) ? '2rem' : 0} ; 

    @media screen and (min-width: 768px) {
        flex-direction: row;
        position: initial;
        height: auto;
        justify-content: center;
        gap: 1.7rem;
        width: auto;
    }
`

export const NavLink = styled(Link)`
    color: ${colors.primary};
    display: block;
    cursor: pointer;
    font-size: 1.5rem;
    text-decoration: none;
    font-weight: 700;
    animation-direction: normal;
    animation-duration: 2400ms;
    animation-delay: 0s;
    transition: left 0.3s linear;

    @media screen and (min-width: 768px) {
        font-size: 1rem;
        display: flex;
        align-items: center;
    }

    &.active {
        color: ${colors.white}
    }
`

export const Bars = styled(FaBars)`
    display: block;
    font-size: 1.4rem;
    cursor: pointer;

    @media screen and (min-width: 768px) {
        display: none;
    }
    /* display: none;
    color: #FFF;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    } */
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavBtnLink = styled(Link)`
    border-radius: 4px;
    background: ${colors.primary};
    padding: 10px 22px;
    color: ${colors.white};
    border: none;
    outline: none;
    cursor: 0;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606
    }
`
