import * as S from "./styled";
import { LoadingImage } from "../../assets/images";

function Loading(): JSX.Element {
  return (
    <S.Container>
      <S.Image src={LoadingImage} alt={"loading"} />
    </S.Container>
  );
}

export default Loading;
