import Layout from "../components/Layout";
import React, { useState } from "react";
import styled from "styled-components";
import { TagsSection } from "./Money/TagsSection";
import { CategorySection } from "./Money/CategorySection";
import { NoteSection } from "./Money/NoteSection";
import { NumberPadSection } from "./Money/NumberPadSection";
import { useRecords } from "../hooks/useRecords";

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;
const CategoryWrapper = styled.div`
  background-image: linear-gradient(
    to right top,
    #39c4eb,
    #00b1e7,
    #009ce2,
    #0087d9,
    #2b71cc
  );
`;
type Category = "-" | "+";
const defaultFormData = {
  tagIds: [] as number[],
  note: "",
  category: "-" as Category,
  amount: 0,
};
function Money() {
  const [selected, setSelected] = useState(defaultFormData);
  const { records, addRecord } = useRecords();
  console.log("records");
  console.log(records);
  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({
      ...selected,
      ...obj,
    });
  };
  const submit = () => {
    if (addRecord(selected)) {
      alert("保存成功");
      setSelected(defaultFormData);
    }
  };
  return (
    <MyLayout scrollTop={9999}>
      <TagsSection
        value={selected.tagIds}
        onChange={(tagIds) => onChange({ tagIds })}
      />
      <NoteSection
        value={selected.note}
        onChange={(note) => onChange({ note })}
      />
      <CategoryWrapper>
        <CategorySection
          value={selected.category}
          onChange={(category) => onChange({ category })}
        />
      </CategoryWrapper>

      <NumberPadSection
        value={selected.amount}
        onChange={(amount) => onChange({ amount })}
        onOk={submit}
      />
    </MyLayout>
  );
}

export default Money;
