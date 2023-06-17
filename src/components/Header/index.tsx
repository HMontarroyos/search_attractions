import * as S from "./styled";
import { icon } from "../../assets/icon";

function Header(): JSX.Element {
  return (
    <>
      <S.Menu height="60px">
        <S.NavItems>
          <div>
            <S.LinkRedirect to={"/"} data-item={"Inicio"}>
              <img src={icon} width={"50px"} height={"50px"} />
            </S.LinkRedirect>
          </div>
        </S.NavItems>
      </S.Menu>
    </>
  );
}

export default Header;
