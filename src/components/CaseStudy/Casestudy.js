import React from 'react';
import styled from "styled-components";
import HeaderCaseStudy from './HeaderCaseStudy';
import BlogCaseStudy from './BlogCaseStudy.js';
import image from "../../assets/Rectangle 48.png";

const data = [
  {
    id: 1,
    date: "Lorem ipsum - 19 Aug 2023",
    title: 'A Relentless Pursuit of Perfection In Website Design',
    desc: 'I began to notice that there was a sharp contrast between well made....',
    imgUrl: image,
    keywords: ["Design", "Design", "Research", "Research", "Research"]
  },
  {
    id: 2,
    date: "Lorem ipsum - 19 Aug 2023",
    title: 'A Relentless Pursuit of Perfection In Website Design',
    desc: 'I began to notice that there was a sharp contrast between well made....',
    imgUrl: image,
    keywords: ["Design", "Design", "Research", "Research", "Research"]
  },
  {
    id: 3,
    date: "Lorem ipsum - 19 Aug 2023",
    title: 'A Relentless Pursuit of Perfection In Website Design',
    desc: 'I began to notice that there was a sharp contrast between well made....',
    imgUrl: image,
    keywords: ["Design", "Design", "Research", "Research", "Research"]
  }
];

const Casestudy = () => {
  return (
    <div>
      <HeaderCaseStudy />
      <Container>
      {data.map(item => (
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
