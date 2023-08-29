import styled from "styled-components";

interface Props {
  first?: boolean;
}

export const ContainerContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-left: 40px;
  margin-left: 40px;

  @media (max-width: 800px) {
    padding-left: 20px;
    margin-left: 20px;
  }

`;

export const ContainerSelect = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const ContainerSearch = styled.div<Props>`
  margin: 40px 20px 40px 0;

  @media (max-width: 800px) {
    margin: ${(props) => (props.first ? "40px" : "20px")} 0 0 0;
  }
`;

/* export const ContainerTitle = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  position: relative;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: initial;
  }

`; */

export const ContainerTitle = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  position: relative;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: initial;
  }
`;

export const Title = styled.h1`
  font-family: ${(props) => props.theme.fonts.title};
  font-size: ${(props) => props.theme.fontSizes.large};
  color: ${(props) => props.theme.colors.textLight};
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  font-weight: 400;
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const Image = styled.img`
  width: 88px;
  height: 62px;
  margin-right: 100px;

  @media (max-width: 800px) {
    margin-top: 40px;
  }
`;

export const ContainerWallpaper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Wallpaper = styled.img`
  margin-top: 130px;
  border-radius: 18% 0 0 0;
  position: absolute;
  z-index: -1;
  top: 0;
  right: 0;
  height: 100vh;
  width: 50%;
  object-fit: cover;

  @media (max-width: 800px) {
    margin-top: 0;
    position: initial;
    width: 100%;
  }

`;

export const ArrowRight = styled.img`
  position: absolute;
  top: 100%;
  left: 90%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    width: 120px;
    height: 120px;
  }

  @media (max-width: 800px) {
    top: 130%;
    left: 80%;
  }
`;

export const ArrowLeft = styled.img`
  position: absolute;
  top: 100%;
  left: 65%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    width: 120px;
    height: 120px;
  }

  @media (max-width: 800px) {
    top: 130%;
    left: 35%;
  }

  @media (min-width: 801px) and (max-width: 300px) {
    left: 30%;
  } 
`;

export const ContainerText = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  margin-left: 190px;
  padding: 20px;

  background: rgba(6, 39, 40, 0.7);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 20px;

  @media (max-width: 800px) {
    width: 500px;
    margin: 20px 0 20px 0;
  }

  @media (min-width: 300px) {
    width: 250px;
  }
`;

export const Paragraph = styled.p`
  font-family: ${(props) => props.theme.fonts.text};
  font-size: ${(props) => props.theme.fontSizes.small};
  color: ${(props) => props.theme.colors.textLight};
  margin-bottom: 10px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

export const ContainerMape = styled.div`
  position: relative;
  z-index: -1;
`;

export const Mape = styled.img`
  width: 400px;
  height: 400px;
  position: absolute;
  top: -80px;
  left: 0;

  @media (max-width: 800px) {
    width: 350px;
    height: 350px;
  }

  @media (min-width: 300px) {
    width: 300px;
    height: 300px;
    margin-left: 30px;
  }
`;
