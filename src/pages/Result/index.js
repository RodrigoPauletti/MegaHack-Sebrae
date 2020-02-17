import React, { useState, useEffect } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Container, Section } from "../../styles.js";
import {
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
  CategoryGradeText,
  Courses,
  CoursesHeader,
  CoursesTitle,
  SeeAll,
  BackButton,
  // CoursesCardList,
  CoursesCardListCourseScreen,
  CourseCardCourseScreen,
  CourseCard,
  CourseCardHeader,
  CourseCardTitle,
  CourseCardDescription,
  // Chat,
  // ChatTitle,
  // ChatText,
  Partners,
  PartnersHeader,
  PartnersTitle,
  PartnersCardList,
  PartnersCard,
  PartnersCardLeft,
  PartnersLogo,
  PartnersCardRight,
  PartnersName,
  PartnersCategory,
  PartnersCardListPartnerScreen,
  PartnerCardPartnerScreen
} from "./styles.js";

import coursesList from "../Courses/courses";
import partnersList from "../Partners/partners";

function limitDescription(description) {
  const limit = 100;

  if (description.length > limit) {
    return description.substr(0, limit - 3) + "...";
  }
  return description;
}

export default function Result() {
  const [screen, setScreen] = useState("result");
  const [courses, setCourses] = useState();
  const [partners, setPartners] = useState();

  useEffect(() => {
    setCourses(coursesList);
    setPartners(partnersList);
  }, []);

  const average = 7.5;

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <>
      <Container>
        <Section>
          {screen === "result" ? (
            <>
              <ResultGrades>
                <GradeContainer>
                  <GradeText>{average}</GradeText>
                  <YourGrade>Sua nota</YourGrade>
                  <ResultText average={average}>Média</ResultText>
                </GradeContainer>
                <ResultDescription>
                  Eu controlo os processos e fluxos operacionais da empresa,
                  levando em conta, fluxos de pagamento, recebimento,
                  fornecedores, contratos, atendimento, etc.
                </ResultDescription>

                <CategoriesResultsGrade>
                  <CategoryResultGrade>
                    <CategoryResult>
                      <CategoryName average={1}>Financeiro</CategoryName>
                      <CategoryResultDescription>
                        Cuidado! Seu nível de prática e conhecimento sobre
                        FINANÇAS está bem abaixo do recomendado, mas não se
                        preocupe, o Sebrae está aqui para te ajudar! Confira os
                        nossos cursos recomendados, leia os artigos e não deixe
                        de botar em prática o que aprendeu! Também confira
                        nossos parceiros e se precisar de uma ajuda direta fale
                        com nossos consultores!
                      </CategoryResultDescription>
                    </CategoryResult>
                    <CategoryGrade average={1}>
                      <CategoryGradeText>{1}</CategoryGradeText>
                    </CategoryGrade>
                  </CategoryResultGrade>
                  <CategoryResultGrade>
                    <CategoryResult>
                      <CategoryName average={5}>Mercado</CategoryName>
                      <CategoryResultDescription>
                        Parabéns! Você domina a área de FINANÇAS da sua empresa,
                        isso é um excelente caminho para o sucesso, mantenha-se
                        atualizado e continue acompanhando no dia a dia.
                      </CategoryResultDescription>
                    </CategoryResult>
                    <CategoryGrade average={5}>
                      <CategoryGradeText>{5}</CategoryGradeText>
                    </CategoryGrade>
                  </CategoryResultGrade>
                  <CategoryResultGrade>
                    <CategoryResult>
                      <CategoryName average={3}>Produtos/Serviços</CategoryName>
                      <CategoryResultDescription>
                        Bom. Seu nível de prática e conhecimento sobre FINANÇAS
                        porém poderia ser melhor, aproveite que separamos alguns
                        conteúdo para você e vire um expert no assunto! Também
                        confira nossos parceiros e se precisar de uma ajuda
                        direta fale com nossos consultores!
                      </CategoryResultDescription>
                    </CategoryResult>
                    <CategoryGrade average={3}>
                      <CategoryGradeText>{3}</CategoryGradeText>
                    </CategoryGrade>
                  </CategoryResultGrade>
                </CategoriesResultsGrade>
              </ResultGrades>

              {courses && courses.length > 0 ? (
                <Courses>
                  <CoursesHeader>
                    <CoursesTitle>Conteúdos Sebrae</CoursesTitle>
                    <SeeAll onClick={() => setScreen("coursesList")}>
                      Ver todos >
                    </SeeAll>
                  </CoursesHeader>
                  {/* <CoursesCardList> */}
                  <Slider {...settings}>
                    {courses?.map(course => {
                      return (
                        <div>
                          <CourseCard key={course.id} color={course.color}>
                            <CourseCardHeader href={course.url} target="_blank">
                              {course.title}
                            </CourseCardHeader>
                            <CourseCardTitle color={course.color}>
                              {course.type}
                            </CourseCardTitle>
                            <CourseCardDescription>
                              {limitDescription(course.description)}
                            </CourseCardDescription>
                          </CourseCard>
                        </div>
                      );
                    })}
                    {/* </CoursesCardList> */}
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
                  <SeeAll onClick={() => setScreen("partnersList")}>
                    Ver todos >
                  </SeeAll>
                </PartnersHeader>
                <Slider {...settings}>
                  {partners?.map(partner => {
                    return (
                      <PartnersCardList>
                        <PartnersCard key={partner.id}>
                          <PartnersCardLeft>
                            <PartnersLogo />
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
            </>
          ) : (
            <>
              {screen === "coursesList" ? (
                <>
                  <Courses>
                    <BackButton onClick={() => setScreen("result")} />
                    <CoursesTitle>Conteúdos Sebrae</CoursesTitle>
                    <CoursesCardListCourseScreen>
                      {courses?.map(course => {
                        return (
                          <CourseCardCourseScreen
                            key={course.id}
                            color={course.color}
                          >
                            <CourseCardHeader href={course.url} target="_blank">
                              {course.title}
                            </CourseCardHeader>
                            <CourseCardTitle color={course.color}>
                              {course.type}
                            </CourseCardTitle>
                            <CourseCardDescription>
                              {course.description}
                            </CourseCardDescription>
                          </CourseCardCourseScreen>
                        );
                      })}
                    </CoursesCardListCourseScreen>
                  </Courses>
                </>
              ) : (
                <>
                  {screen === "partnersList" ? (
                    <>
                      <Partners>
                        <BackButton onClick={() => setScreen("result")} />
                        <PartnersTitle>Parceiros</PartnersTitle>
                        <PartnersCardListPartnerScreen>
                          {partners?.map(partner => {
                            return (
                              <PartnerCardPartnerScreen key={partner.id}>
                                <PartnersCardLeft>
                                  <PartnersLogo />
                                </PartnersCardLeft>
                                <PartnersCardRight>
                                  <PartnersName>{partner.name}</PartnersName>
                                  <PartnersCategory>
                                    {partner.category}
                                  </PartnersCategory>
                                </PartnersCardRight>
                              </PartnerCardPartnerScreen>
                            );
                          })}
                        </PartnersCardListPartnerScreen>
                      </Partners>
                    </>
                  ) : (
                    <></>
                  )}
                </>
              )}
            </>
          )}
        </Section>
      </Container>
    </>
  );
}
