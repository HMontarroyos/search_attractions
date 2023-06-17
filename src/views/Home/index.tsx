import React, { useEffect, useState } from "react";
import * as S from "./styled";
import { getFlag } from "../../server/index";
import { Globo } from "../../components";

interface Flag {
  svg: string;
  png: string;
  alt: string;
}

const Home: React.FC = () => {
  const [flag, setFlag] = useState<Flag>();
  const [name, setName] = useState("italy");

  useEffect(() => {
    async function fetchFlag(): Promise<any> {
      try {
        const _flag = await getFlag(name);
        setFlag(_flag);
      } catch (error) {
        console.error(error);
      }
    }
    fetchFlag();
  }, [name]);

  return (
    <>
      <S.ContainerContent>
        <S.Teste>Filtros vão ficar aqui</S.Teste>
        <div>
          <S.ContainerTitle>
            <S.Image src={flag?.png} alt={flag?.alt} />
            <S.Title>Catedral de Milão</S.Title>
            <S.Wallpaper src="https://i0.wp.com/tournaitalia.com/wp-content/uploads/2021/08/milan-883761_1280.jpeg?ssl=1" />
          </S.ContainerTitle>
          <S.ContainerText>
            <S.Paragraph>
              A Catedral de Milão (em italiano: Duomo di Milano) é uma catedral
              católica romana situada na praça central da cidade de Milão, na
              Lombardia, no norte da Itália. É a sede da Arquidiocese de Milão e
              uma das mais célebres e complexas edificações em estilo gótico da
              Europa.
            </S.Paragraph>
            <S.Paragraph>
              Endereço: P.za del Duomo, 20122 Milano MI, Itália
            </S.Paragraph>
            <S.Paragraph>Horas: Aberto ⋅ Fecha às 19:00</S.Paragraph>
            <S.Paragraph>Entrada: Paga</S.Paragraph>
          </S.ContainerText>
        </div>
      </S.ContainerContent>
      <S.ContainerGlobo>
        <Globo />
      </S.ContainerGlobo>
    </>
  );
};

export default Home;
