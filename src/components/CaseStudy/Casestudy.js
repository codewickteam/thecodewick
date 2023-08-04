import React from 'react';
import styled from "styled-components";
import HeaderCaseStudy from './HeaderCaseStudy';
import BlogCaseStudy from './BlogCaseStudy.js';
import { CaseStudydata } from "../../API/data.js";

const Casestudy = () => {
  return (
    <div>
      <HeaderCaseStudy />
      <Container>
      {CaseStudydata.map(item => (
        <BlogCaseStudy
          id={item.id}
          date={item.date}
          title={item.title}
          desc={item.desc}
          imgUrl={item.imgUrl}
          keywords={item.keywords}
        />
      ))}
      </Container>
    </div>
  );
};

export default Casestudy;

const Container = styled.div`
 margin:6vw 2vw 16vw 2vw;
`;
