import React from 'react';
import styled from 'styled-components';

const Nav = () => {
    return (
        <div>
            <StyledNav>
                <h1><a href="#" id="logo">Ignite</a></h1>
                <ul>
                    <li>
                        <a href="#">1. About Us</a>
                    </li>
                    <li>
                        <a href="#">2. Our Work</a>
                    </li>
                    <li>
                        <a href="#">3. Contact Us</a>
                    </li>
                </ul>
            </StyledNav>
        </div>
    );
};

const StyledNav = styled.nav`
min-height: 10vh;
display: flex;
margin: auto;
justify-content: space-between;
align-items: center;
padding: 1rem 10rem;
background-color: #282828;
a{
    color: white;
    text-decoration: none;
}
ul{
    display: flex;
    list-style: none;
}
#logo{
    font-size: 1.6rem;
    font-family: "Lobster", sans-serif;
    font-weight: lighter;
}
li{
    padding-left: 10rem;
    position: relative;
}
`

export default Nav;