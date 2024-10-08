import styled from 'styled-components';

const Image = styled.img`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 10%;
  left: 50%;
  border: none;
`;

const Main = styled.main`
  position: relative;
  background-color: red;
`;

const Paragraph = styled.p`
  font-weight: 300;
  font-size: 5rem;
  color: white;
  text-align: center;
  font-family: 'Roboto Condensed', sans-serif;
  border: none;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export default function SuccessForm() {
  return (
    <>
      <Main>
        <Content className="container">
          <Image src="Assets/Interfaces/iteration-1-assets/logo.svg" alt="" />
          <Paragraph>
            TEBRİKLER! <br /> SİPARİŞİNİZ ALINDI!
          </Paragraph>
        </Content>
      </Main>
    </>
  );
}
