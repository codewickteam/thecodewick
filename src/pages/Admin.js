// admin.js
import React, { useState } from "react";
import styled from "styled-components";
import { CaseStudydata } from "../API/data";

const Admin = () => {
  const [newCaseStudy, setNewCaseStudy] = useState({
    id: 0,
    date: "",
    title: "",
    desc: "",
    imgUrl: "",
    keywords: [],
  });

  const [displayedData, setDisplayedData] = useState(CaseStudydata);

  const handleAddCaseStudy = () => {
    // Incrementing the ID
    const newId = CaseStudydata.length + 1;
    setNewCaseStudy({ ...newCaseStudy, id: newId });
    CaseStudydata.push(newCaseStudy);
    setDisplayedData(CaseStudydata); // Update displayedData to include the newly added case study
    setNewCaseStudy({
      id: 0,
      date: "",
      title: "",
      desc: "",
      imgUrl: "",
      keywords: [],
    });
  };

  const handleDeleteCaseStudy = (id) => {
    const updatedData = displayedData.filter((item) => item.id !== id);
    setDisplayedData(updatedData);
  };

  const handleChangeKeywords = (e) => {
    const keywords = e.target.value.split(",");
    setNewCaseStudy({ ...newCaseStudy, keywords: keywords });
  };

  return (
    <Container>
      <FormContainer>
        {/* Form inputs to enter data */}
        <FormInput
          type="text"
          value={newCaseStudy.date}
          onChange={(e) => setNewCaseStudy({ ...newCaseStudy, date: e.target.value })}
          placeholder="Date"
        />
        <FormInput
          type="text"
          value={newCaseStudy.title}
          onChange={(e) => setNewCaseStudy({ ...newCaseStudy, title: e.target.value })}
          placeholder="Title"
        />
        <FormTextarea
          value={newCaseStudy.desc}
          onChange={(e) => setNewCaseStudy({ ...newCaseStudy, desc: e.target.value })}
          placeholder="Description"
        />
        <FormInput
          type="text"
          value={newCaseStudy.imgUrl}
          onChange={(e) => setNewCaseStudy({ ...newCaseStudy, imgUrl: e.target.value })}
          placeholder="Image URL"
        />
        <FormInput
          type="text"
          value={newCaseStudy.keywords.join(",")}
          onChange={handleChangeKeywords}
          placeholder="Keywords (comma-separated)"
        />
        <AddButton onClick={handleAddCaseStudy}>Add Case Study</AddButton>
      </FormContainer>

      {/* Display the existing data */}
      {displayedData.map((item) => (
        <DataItem key={item.id}>
          <span>{item.title}</span>
          <DeleteButton onClick={() => handleDeleteCaseStudy(item.id)}>Delete</DeleteButton>
        </DataItem>
      ))}
    </Container>
  );
};

export default Admin;

const Container = styled.div`
  max-width: 600px;
  margin: 4rem auto 4rem;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const FormInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const FormTextarea = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: vertical;
`;

const AddButton = styled.button`
  background-color: #4caf50;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
`;

const DataItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;

  span {
    font-size: 18px;
    font-weight: bold;
  }
`;

const DeleteButton = styled.button`
  background-color: #ff0000;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
`;
