import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Container, SeeAll } from "../../styles.js";
import {
  Section,
  ResultGrades,
  GradeContainer,
  GradeText,
  YourGrade,
  ResultText,
  ResultDescription,
  CategoriesResultsGrade,
  CategoryResultGrade,
  CategoryResult,
  CategoryName,
  CategoryResultDescription,
  CategoryGrade,
  CategoryGradeText
  // Chat,
  // ChatTitle,
  // ChatText,
} from "./styles.js";

import {
  Courses,
  CoursesHeader,
  CoursesTitle,
  CourseCard,
  CourseCardHeader,
  CourseCardTitle,
  CourseCardDescription
} from "../Courses/styles.js";

import {
  Partners,
  PartnersHeader,
  PartnersTitle,
  PartnersCardList,
  PartnersCard,
  PartnersCardLeft,
  PartnersLogo,
  PartnersCardRight,
  PartnersName,
  PartnersCategory
} from "../Partners/styles.js";

import {
  Materials,
  MaterialsHeader,
  MaterialsTitle,
  MaterialsCardList,
  MaterialsCard,
  MaterialsCardLeft,
  MaterialsLogo,
  MaterialsCardRight,
  MaterialsName,
  MaterialsDownload
} from "../Materials/styles.js";

import coursesList from "../Courses/courses";
import partnersList from "../Partners/partners";
import materialsList from "../Materials/materials";

function limitDescription(description) {
  const limit = 100;

  if (description.length > limit) {
    return description.substr(0, limit - 3) + "...";
  }
  return description;
}

export default function Result() {
  const history = useHistory();

  const [courses, setCourses] = useState(null);
  const [partners, setPartners] = useState(null);
  const [materials, setMaterials] = useState(null);
  const [average, setAverage] = useState(0);
  const [results, setResults] = useState({});

  useEffect(() => {
    setPartners(partnersList);
    setMaterials(materialsList);
    async function setAverageGrades(results) {
      if (results && results.length) {
        setResults(results.sort(orderByAverageASC));
        const resultsAverage = results.map(result => result.average);
        const averageGrades = resultsAverage.reduce((a, b) => {
          return a + b;
        }, 0);
        const generalAverage = averageGrades / results.length;
        setAverage(generalAverage.toFixed(1));
      }
    }
    if (history.location.state && history.location.state.results) {
      setAverageGrades(history.location.state.results);
    }
    const sortedOrderedCourses = sortOrderedCourses(results, coursesList);
    setCourses(sortedOrderedCourses);
  }, [history, results]);

  function sortOrderedCourses(array1, array2) {
    let sortedArray = [];
    if (array2.length > 0) {
      if (array1.length > 0) {
        for (let i = 0; i < array1.length; i++) {
          for (let x = 0; x < array2.length; x++) {
            if (array2[x].type === array1[i].categoryName) {
              sortedArray.push(array2[x]);
            }
          }
        }
      } else {
        sortedArray = array2;
      }
    }
    return sortedArray;
  }

  function orderByAverageASC(a, b) {
    if (a.average > b.average) return 1;
    if (b.average > a.average) return -1;

    return 0;
  }

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <Container>
        <Section>
          {average !== null ? (
            <>
              <ResultGrades>
                <GradeContainer>
                  <GradeText average={average}>{average}</GradeText>
                  <YourGrade>Sua nota</YourGrade>
                  <ResultText average={average}>
                    {average < 3 ? "Baixa" : average < 5 ? "Média" : "Alta"}
                  </ResultText>
                </GradeContainer>
                <ResultDescription>
                  {average < 3
                    ? "Seus conhecimentos e práticas sobre gestão da sua empresa está muito abaixo do recomendado.\nConfira abaixo sua nota por área, leia os conteúdos indicados e busque ajuda dos nossos parceiros!"
                    : average < 5
                    ? "Seus nível de conhecimento e práticas de gestão estão bons, porém alguns pontos podem melhorar.\nConfira sua nota por área abaixo e aperfeiçoe seus conhecimentos com os conteúdos que separamos para você e também com os nosso parceiros."
                    : "Parabéns! Você domina a gestão da sua empresa! Caso acredite que algum ponto que não foi abordado, entre em contato com o atendimento Sebrae."}
                </ResultDescription>

                <CategoriesResultsGrade>
                  {results &&
                    results.length > 0 &&
                    results?.map((result, index) => {
                      return (
                        <CategoryResultGrade key={index}>
                          <CategoryResult>
                            <CategoryName average={result.average.toFixed(1)}>
                              {result.categoryName}
                            </CategoryName>
                            <CategoryResultDescription>
                              {result.average < 3
                                ? `Cuidado! Seu nível de prática e conhecimento sobre ${result.categoryName.toUpperCase()} está bem abaixo do recomendado, mas não se preocupe, o Sebrae está aqui para te ajudar! Confira os nossos cursos recomendados, leia os artigos e não deixe de botar em prática o que aprendeu! Também confira nossos parceiros e se precisar de uma ajuda direta fale com nossos consultores!`
                                : result.average < 5
                                ? `Bom. Seu nível de prática e conhecimento sobre ${result.categoryName.toUpperCase()} porém poderia ser melhor, aproveite que separamos alguns conteúdo para você e vire um expert no assunto! Também confira nossos parceiros e se precisar de uma ajuda direta fale com nossos consultores!`
                                : `Parabéns! Você domina a área de ${result.categoryName.toUpperCase()} da sua empresa, isso é um excelente caminho para o sucesso, mantenha-se atualizado e continue acompanhando no dia a dia.`}
                            </CategoryResultDescription>
                          </CategoryResult>
                          <CategoryGrade average={result.average.toFixed(1)}>
                            <CategoryGradeText>
                              {result.average.toFixed(1).toString()}
                            </CategoryGradeText>
                          </CategoryGrade>
                        </CategoryResultGrade>
                      );
                    })}
                </CategoriesResultsGrade>
              </ResultGrades>

              {courses && courses.length > 0 ? (
                <Courses>
                  <CoursesHeader>
                    <CoursesTitle>Conteúdos Sebrae</CoursesTitle>
                    <SeeAll
                      onClick={() => history.push("/courses", { results })}
                    >
                      Ver todos >
                    </SeeAll>
                  </CoursesHeader>
                  <Slider {...settings}>
                    {courses?.map(course => {
                      return (
                        <div key={course.id}>
                          <CourseCard key={course.id} color={course.color}>
                            <CourseCardHeader href={course.url} target="_blank">
                              {course.title}
                            </CourseCardHeader>
                            <CourseCardTitle
                              href={course.url}
                              target="_blank"
                              color={course.color}
                            >
                              {course.type}
                            </CourseCardTitle>
                            <CourseCardDescription>
                              {limitDescription(course.description)}
                            </CourseCardDescription>
                          </CourseCard>
                        </div>
                      );
                    })}
                  </Slider>
                </Courses>
              ) : (
                <></>
              )}

              {/* <Chat>
                <ChatTitle>Chat</ChatTitle>
                <ChatText>Converse em tempo real com um especialista</ChatText>
              </Chat> */}

              <Partners>
                <PartnersHeader>
                  <PartnersTitle>Parceiros</PartnersTitle>
                  <SeeAll
                    onClick={() => history.push("/partners", { results })}
                  >
                    Ver todos >
                  </SeeAll>
                </PartnersHeader>
                <Slider {...settings}>
                  {partners?.map(partner => {
                    return (
                      <PartnersCardList key={partner.id}>
                        <PartnersCard
                          onClick={() =>
                            history.push(`/partner-detail/${partner.id}`, {
                              results,
                              partnerId: partner.id
                            })
                          }
                        >
                          <PartnersCardLeft>
                            <PartnersLogo src={partner.image} />
                          </PartnersCardLeft>
                          <PartnersCardRight>
                            <PartnersName>{partner.name}</PartnersName>
                            <PartnersCategory>
                              {partner.category}
                            </PartnersCategory>
                          </PartnersCardRight>
                        </PartnersCard>
                      </PartnersCardList>
                    );
                  })}
                </Slider>
              </Partners>

              <Materials>
                <MaterialsHeader>
                  <MaterialsTitle>Na prática</MaterialsTitle>
                  <SeeAll
                    onClick={() => history.push("/materials", { results })}
                  >
                    Ver todos >
                  </SeeAll>
                </MaterialsHeader>
                <Slider {...settings}>
                  {materials?.map(material => {
                    return (
                      <MaterialsCardList key={material.id}>
                        <MaterialsCard>
                          <MaterialsCardLeft>
                            <MaterialsLogo />
                          </MaterialsCardLeft>
                          <MaterialsCardRight>
                            <MaterialsName>{material.name}</MaterialsName>
                            <MaterialsDownload
                              href={material.url}
                              target="_blank"
                            >
                              Baixar arquivo
                            </MaterialsDownload>
                          </MaterialsCardRight>
                        </MaterialsCard>
                      </MaterialsCardList>
                    );
                  })}
                </Slider>
              </Materials>
            </>
          ) : (
            // <>Você precisa realizar o teste para acessar essa tela</>
            <>{history.push("/questions")}</>
          )}
        </Section>
      </Container>
    </>
  );
}
