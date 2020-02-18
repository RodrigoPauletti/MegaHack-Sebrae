import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { Container, Section, BackButton } from "../../styles.js";
import {
  Courses,
  CoursesTitle,
  CoursesCardListCourseScreen,
  CourseCardCourseScreen,
  CourseCardHeader,
  CourseCardTitle,
  CourseCardDescription
} from "./styles.js";

import coursesList from "../Courses/courses";

export default function Result() {
  const history = useHistory();
  const [courses, setCourses] = useState();
  const { results } = history.location.state
    ? history.location.state
    : { results: null };

  useEffect(() => {
    const sortedOrderedCourses = sortOrderedCourses(results, coursesList);
    setCourses(sortedOrderedCourses);
  }, [results]);

  function sortOrderedCourses(array1, array2) {
    let sortedArray = [];
    if (array1 && array2) {
      for (let i = 0; i < array1.length; i++) {
        for (let x = 0; x < array2.length; x++) {
          if (array2[x].type === array1[i].categoryName) {
            sortedArray.push(array2[x]);
          }
        }
      }
    }
    return sortedArray;
  }

  return (
    <>
      <Container>
        <Section>
          <Courses>
            <BackButton onClick={() => history.push("/result")} />
            <CoursesTitle>Conteúdos Sebrae</CoursesTitle>
            <CoursesCardListCourseScreen>
              {courses?.map(course => {
                return (
                  <CourseCardCourseScreen key={course.id} color={course.color}>
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
        </Section>
      </Container>
    </>
  );
}
