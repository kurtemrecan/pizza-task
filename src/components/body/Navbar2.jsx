import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav``;

const MenuItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 1.2rem 0;
`;

const StyledLink = styled(Link)`
  text-align: center;
  font-family: 'Barlow', system-ui;
  font-weight: 500;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 0.5rem;
  color: dark-gray;
  padding: 0.5rem 1.3rem;

  &:hover {
    background: black;
    color: white;
    padding: 0.5rem 1.3rem;
    border-radius: 3rem;
  }
`;

const StyledImg = styled.img`
  width: 2.5rem;
`;

const items = [
  {
    id: 1,
    src: `./Assets/Interfaces/Iteration-2-aseets/icons/1.svg`,
    alt: 'kore',
    text: 'Ramen',
  },
  {
    id: 2,
    src: '../../../Assets/Interfaces/Iteration-2-aseets/icons/2.svg',
    alt: 'pizza',
    text: 'Pizza',
  },
  {
    id: 3,
    src: '../../../Assets/Interfaces/Iteration-2-aseets/icons/3.svg',
    alt: 'burger',
    text: 'Burger',
  },
  {
    id: 4,
    src: '../../../Assets/Interfaces/Iteration-2-aseets/icons/4.svg',
    alt: 'kızartma',
    text: 'French fries',
  },
  {
    id: 5,
    src: '../../../Assets/Interfaces/Iteration-2-aseets/icons/5.svg',
    alt: 'fastfood',
    text: 'Fast food',
  },
  {
    id: 6,
    src: '../../../Assets/Interfaces/Iteration-2-aseets/icons/6.svg',
    alt: 'içecek',
    text: 'Soft drinks',
  },
];

export default function Navbar2() {
  return (
    <Nav>
      <MenuItems className="chef-container">
        {items.map((item, index) => (
          <StyledLink id={item.id} key={index}>
            <span>
              <StyledImg src={item.src} alt={item.alt} />{' '}
            </span>
            {item.text}
          </StyledLink>
        ))}
      </MenuItems>
    </Nav>
  );
}
