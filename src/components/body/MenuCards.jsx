import React from 'react';
import styled from 'styled-components';

const MenuCardsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  font-family: 'Barlow', system-ui;
  font-weight: 600;
  color: var(--grey-dark-color);
`;

const MenuCard = styled.div`
  flex: 1;
  background: var(--white-color);
  padding: 1.5rem;
  border-radius: 10px;
  background-color: white;
`;

const MenuCardImage = styled.img`
  width: 100%;
  height: auto;
`;

const MenuCardTitles = styled.div`
  margin: 1rem 0;
`;

const Stats = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Reviews = styled.div`
  color: var(--grey-light-color);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
`;

const Price = styled.p`
  font-size: 1.3rem;
`;

function MenuCards() {
  return (
    <MenuCardsContainer
      className="chef-container"
      style={{ marginBottom: '70px' }}
    >
      <MenuCard>
        <MenuCardImage
          src="./Assets/Interfaces/Iteration-2-aseets/pictures/food-1.png"
          alt="Terminal Pizza"
        />
        <MenuCardTitles>
          <h3>Terminal Pizza</h3>
          <Stats>
            <Price>60₺</Price>
            <Reviews>
              <p>(200)</p>
              <p>4.9</p>
            </Reviews>
          </Stats>
        </MenuCardTitles>
      </MenuCard>

      <MenuCard>
        <MenuCardImage
          src="./Assets/Interfaces/Iteration-2-aseets/pictures/food-2.png"
          alt="Position Absolute Acı Pizza"
        />
        <MenuCardTitles>
          <h3>Position Absolute Acı Pizza</h3>
          <Stats>
            <Price>60₺</Price>
            <Reviews>
              <p>4.9</p>
              <p>(200)</p>
            </Reviews>
          </Stats>
        </MenuCardTitles>
      </MenuCard>

      <MenuCard>
        <MenuCardImage
          src="./Assets/Interfaces/Iteration-2-aseets/pictures/food-3.png"
          alt="useEffect Tavuklu Burger"
        />
        <MenuCardTitles>
          <h3>useEffect Tavuklu Burger</h3>
          <Stats>
            <Price>60₺</Price>
            <Reviews>
              <p>4.9</p>
              <p>(200)</p>
            </Reviews>
          </Stats>
        </MenuCardTitles>
      </MenuCard>
    </MenuCardsContainer>
  );
}

export default MenuCards;
