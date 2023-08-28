import React, { useEffect, useState } from "react";
import * as S from "./styled";
import {
  getFlag,
  getAttractionsAllCountry,
  getState,
  getAllStates,
  getAttractionsAllState,
} from "../../server/index";
import { Globo, Loading } from "../../components";
import { arrow } from "../../assets/icon";
import { Space, Select, Input } from "antd";
import { format, getDay, getHours, getMinutes, getSeconds, isAfter, isBefore, parse } from 'date-fns';
const { Search } = Input;

/* interface Flag {
  svg: string;
  png: string;
  alt: string;
} */

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
          setAttractionsDefault(_attractions)
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
        // Voltar ao início se atingir o fim do array
        return 0;
      } else {
        return nextIndex;
      }
    });
  };

  const searchAttractionName = (event: string) => {
    const normalizedSearch = event
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

    if (normalizedSearch.length >= 3) {
      const filteredAttractions = attractions.filter((attraction: any) => {
        const normalizedAttractionName = attraction.name
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "");
        return normalizedAttractionName.includes(normalizedSearch);
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
    const filteredAttractions = attractions.filter((attraction: any) => {
      return attraction.entry === value;
    });

    setAttractions(filteredAttractions);
    setCurrentAttractionIndex(0); // Resetar o índice para o início
  };


const searchOperation = (option: string) => {
  const currentDate = new Date();
  const currentDayNumber = getDay(currentDate);
  const daysOfWeek = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
  const currentDayName = daysOfWeek[currentDayNumber];
  const currentHour = format(currentDate, 'HH:mm');

  let filteredAttractions = [];

  if (option === 'aberto') {
    filteredAttractions = attractions.filter((attraction: any) => {
      const operations = attraction.operation;
      const currentOperation = operations.find((operation: any) => operation.day === currentDayName);

      if (currentOperation) {
        const openingTime = parse(currentOperation.hourOpening, 'HH:mm', new Date());
        const closingTime = parse(currentOperation.hourClosing, 'HH:mm', new Date());

        const isOpen = isAfter(currentDate, openingTime) && isBefore(currentDate, closingTime);
        return isOpen;
      } else {
        return false;
      }
    });
  } else if (option === 'fechado') {
    filteredAttractions = attractions.filter((attraction: any) => {
      const operations = attraction.operation;
      const currentOperation = operations.find((operation: any) => operation.day === currentDayName);

      if (currentOperation) {
        const openingTime = parse(currentOperation.hourOpening, 'HH:mm', new Date());
        const closingTime = parse(currentOperation.hourClosing, 'HH:mm', new Date());

        const isOutsideOpeningHours = isBefore(currentDate, openingTime) || isAfter(currentDate, closingTime);
        return isOutsideOpeningHours;
      } else {
        return true;
      }
    });
  }

  setAttractions(filteredAttractions);
  setCurrentAttractionIndex(0);
};


  

  

  return (
    <>
      <S.ContainerContent>
        {attractions && state ? (
          <>
            <S.ContainerSelect>
              <div style={{ margin: "40px 20px 40px 0" }}>
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
              </div>
              <div style={{ margin: "40px 20px 40px 0" }}>
                <Select
                  placeholder="Entrada"
                  onChange={searchEntry}
                  style={{
                    width: 200,
                  }}
                  options={attractions.map((attraction: any, id: number) => ({
                    label: attraction.entry,
                    value: attraction.entry,
                  }))}
                />
              </div>
              <div style={{ margin: "40px 20px 40px 0" }}>
                <Select
                  placeholder="Funcionamento"
                  onChange={searchOperation}
                  style={{
                    width: 200,
                  }}
                  options={[
                    {
                      value: "aberto",
                      label: "Aberto",
                    },
                    {
                      value: "fechado",
                      label: "Fechado",
                    },
                  ]}
                />
              </div>
              <div style={{ margin: "40px 20px 40px 0" }}>
                <Search
                  placeholder="Digite o nome da atração"
                  allowClear
                  onSearch={(e) => searchAttractionName(e)}
                  style={{
                    width: 300,
                  }}
                />
              </div>
            </S.ContainerSelect>
            <div>
              <S.ContainerTitle>
                <S.Image src={state.images?.image} alt={state.images?.alt} />
                <S.Title>{attractions[currentAttractionIndex].name}</S.Title>
                <S.Wallpaper
                  src={attractions[currentAttractionIndex].images.image}
                  alt={attractions[currentAttractionIndex].images.alt}
                />
                <S.Arrow src={arrow} onClick={nextAttraction} />
              </S.ContainerTitle>
              <S.ContainerText>
                <S.Paragraph>
                  {attractions[currentAttractionIndex].description}
                </S.Paragraph>
                <S.Paragraph>
                  {`Endereço: ${attractions[currentAttractionIndex].address}`}
                </S.Paragraph>
                <S.Paragraph>
                Horas: Aberto ⋅ Fecha às 19:00
                </S.Paragraph>
                <S.Paragraph>
                  {`Entrada: ${
                    attractions[currentAttractionIndex].entry === "Varia"
                      ? "Varia (Depende do dia de visita) "
                      : attractions[currentAttractionIndex].entry
                  }`}
                </S.Paragraph>
              </S.ContainerText>
            </div>
          </>
        ) : (
          <Loading />
        )}
      </S.ContainerContent>
      {state && (
        <S.ContainerGlobo>
          {/* <Globo /> */}
          <S.Mape src={state.mape} alt={state.name} />
        </S.ContainerGlobo>
      )}
    </>
  );
};

export default Home;
