import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  font-size: 24px;
  > ul {
    display: flex;
    > li {
      width: 50%;
      text-align: center;
      padding: 16px 0;
      position: relative;
      &.selected::after {
        content: "";
        display: block;
        height: 3px;
        background: #333;
        position: absolute;
        bottom: 0;
        width: 100%;
        left: 0;
      }
    }
  }
`;
type Props = { value: "-" | "+"; onChange: (value: "-" | "+") => void };

const CategorySection: React.FC<Props> = (props) => {
  const categoryMap = { "-": "支出", "+": "收入" };
  type Keys = keyof typeof categoryMap;
  const [categoryList] = useState<Keys[]>(["-", "+"]);
  const category = props.value;

  return (
    <Wrapper>
      <ul>
        {categoryList.map((e) => (
          <li
            key={e}
            className={category === e ? "selected" : ""}
            onClick={() => {
              props.onChange(e);
            }}
          >
            {categoryMap[e]}
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};
export { CategorySection };
