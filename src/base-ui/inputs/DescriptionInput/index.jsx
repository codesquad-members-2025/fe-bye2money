import styled from "styled-components";
import { TextAreaField } from "../InputField";

export default function DescriptionInput({ description, onChange }) {
  const maxLength = 32;
  const placeholderText = "입력하세요";
  return (
    <TextAreaField
      maxLength={maxLength}
      value={description}
      placeholder={placeholderText}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
