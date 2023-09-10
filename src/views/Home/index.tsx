import React, { useEffect, useState } from "react";
import * as S from "./styled";
import {
  getState,
  getAllStates,
  getAttractionsAllState,
} from "../../server/index";
import { Loading } from "../../components";
import { arrowRight, arrowLeft } from "../../assets/icon";
import { Select, Input } from "antd";
import { normalizeString } from "../../utils";
import { LoadingImage } from "../../assets/images";
const { Search } = Input;

interface State {
  _id: string;
  name: string;
  acronym: string;
  region: string;
  country: string;
  countryExhibition: string;
  images: {
    alt: string;
    image: string;
  };
  mape: string;
}

const Home: React.FC = () => {
  const [state, setState] = useState<State>();
  const [attractions, setAttractions] = useState<any>(null);
  const [attractionsDefault, setAttractionsDefault] = useState<any>(null);
  const [allStates, setAllStates] = useState<any>(null);
  const [selectedState, setSelectedState] = useState("rj");
  const [currentAttractionIndex, setCurrentAttractionIndex] = useState(0);

  useEffect(() => {
    async function fetchAttractions(): Promise<void> {
      try {
        if (selectedState) {
          const _attractions = await getAttractionsAllState(selectedState);
          const _state = await getState(_attractions[0].stateAcronym);
          const _allStates = await getAllStates();
          setState(_state);
          setAllStates(_allStates);
          setAttractions(_attractions);
          setAttractionsDefault(_attractions); // Armazena as atrações originais
          setCurrentAttractionIndex(0); // Resetar o índice para o início
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchAttractions();
  }, [selectedState]);

  const nextAttraction = () => {
    setCurrentAttractionIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      if (nextIndex >= attractions.length) {
        return 0;
      } else {
        return nextIndex;
      }
    });
  };

  const previewAttraction = () => {
    setCurrentAttractionIndex((prevIndex) => {
      const previewIndex = prevIndex - 1;
      if (previewIndex >= attractions.length) {
        return 0;
      } else {
        return previewIndex;
      }
    });
  };

  const searchAttractionName = (event: string) => {
    if (normalizeString(event).length >= 3) {
      const filteredAttractions = attractions.filter((attraction: any) => {
        return normalizeString(attraction.name).includes(
          normalizeString(event)
        );
      });

      if (filteredAttractions.length > 0) {
        const firstMatchingAttraction = filteredAttractions[0];
        const attractionIndex = attractions.findIndex(
          (attraction: any) => attraction === firstMatchingAttraction
        );
        setCurrentAttractionIndex(attractionIndex);
      } else {
        console.log("Nenhuma atração encontrada");
      }
    }
  };

  const searchState = (value: string) => {
    setSelectedState(value);
  };

  const searchEntry = (value: string) => {
    if (value === "Todos") {
      setAttractions(attractionsDefault);
      setCurrentAttractionIndex(0);
      return;
    }
    const filteredAttractions = attractionsDefault.filter((attraction: any) => {
      return normalizeString(attraction.entry) === normalizeString(value);
    });

    setAttractions(filteredAttractions);
    setCurrentAttractionIndex(0); // Resetar o índice para o início
  };

  return (
    <>
      <S.ContainerContent>
        {attractions && state ? (
          <>
            <S.ContainerSelect>
              <S.ContainerSearch first>
                <Select
                  onChange={searchState}
                  showSearch
                  style={{
                    width: 200,
                  }}
                  placeholder="Estado"
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    typeof option?.label === "string" &&
                    option.label.toLowerCase().includes(input)
                  }
                  filterSort={(optionA, optionB) =>
                    typeof optionA?.label === "string" &&
                    typeof optionB?.label === "string"
                      ? optionA.label
                          .toLowerCase()
                          .localeCompare(optionB.label.toLowerCase())
                      : 0
                  }
                  options={allStates.map((state: any, id: number) => ({
                    label: state.name,
                    value: state.acronym,
                  }))}
                />
              </S.ContainerSearch>
              <S.ContainerSearch>
                <Select
                  placeholder="Entrada"
                  onChange={searchEntry}
                  style={{
                    width: 200,
                  }}
                  options={[
                    {
                      value: "Gratuito",
                      label: "Gratuito",
                    },
                    {
                      value: "Pago",
                      label: "Pago",
                    },
                    {
                      value: "Varia",
                      label: "Varia",
                    },
                    {
                      value: "Todos",
                      label: "Todos",
                    },
                  ]}
                />
              </S.ContainerSearch>
              <S.ContainerSearch>
                <Search
                  placeholder="Digite o nome da atração"
                  allowClear
                  onSearch={(e) => searchAttractionName(e)}
                  style={{
                    width: 300,
                  }}
                />
              </S.ContainerSearch>
            </S.ContainerSelect>
            {attractions.length > 0 ? (
              <>
                <S.ContainerTitle>
                  <S.Image src={state.images?.image} alt={state.images?.alt} />
                  <S.Title>{attractions[currentAttractionIndex].name}</S.Title>
                </S.ContainerTitle>
                <S.ContainerWallpaper>
                  <S.Wallpaper
                    src={attractions[currentAttractionIndex].images.image}
                    alt={attractions[currentAttractionIndex].images.alt}
                  />
                  {attractions.length > 1 && currentAttractionIndex > 0 && (
                    <S.ArrowLeft src={arrowLeft} onClick={previewAttraction} />
                  )}
                  {attractions.length > 1 &&
                    currentAttractionIndex < attractions.length - 1 && (
                      <S.ArrowRight src={arrowRight} onClick={nextAttraction} />
                    )}
                </S.ContainerWallpaper>
                {/* </S.ContainerTitle> */}
                <S.ContainerText>
                  <S.Paragraph>
                    {attractions[currentAttractionIndex].description}
                  </S.Paragraph>
                  <S.Paragraph>
                    {`Endereço: ${attractions[currentAttractionIndex].address}`}
                  </S.Paragraph>
                  <S.Paragraph>
                    Horário de Funcionamento: Favor verificar no site ou com a
                    equipe de administração responsável pela atração{" "}
                  </S.Paragraph>
                  <S.Paragraph>
                    {`Entrada: ${
                      normalizeString(
                        attractions[currentAttractionIndex].entry
                      ) === normalizeString("Varia")
                        ? "Varia (Depende do dia de visita) "
                        : attractions[currentAttractionIndex].entry
                    }`}
                  </S.Paragraph>
                </S.ContainerText>
              </>
            ) : (
              <>
                <S.ContainerTitle>
                  <S.Image src={state.images?.image} alt={state.images?.alt} />
                  <S.Title>Breve Adicionaremos mais atrações</S.Title>
                </S.ContainerTitle>
                <S.ContainerEmptyAttractions>
                  <div style={{ padding: "10px" }}>
                    <S.Paragraph>
                      Infelizmente não foi achado nenhuma atração para este
                      filtro, mas não se decepcione, estamos atualizando
                      constantemente nosso banco com informações atualizadas de
                      cada atração, e com certeza breve teremos novidades.
                    </S.Paragraph>
                  </div>
                  <S.LoadingEmptyAttractions
                    src={LoadingImage}
                    alt={"carregando..."}
                  />
                </S.ContainerEmptyAttractions>
              </>
            )}
          </>
        ) : (
          <Loading />
        )}
      </S.ContainerContent>
      {state && (
        <S.ContainerMape>
          <S.Mape src={state.mape} alt={state.name} />
        </S.ContainerMape>
      )}
    </>
  );
};

export default Home;
