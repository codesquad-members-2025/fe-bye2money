import styled from "styled-components";
import InputField from "../InputField";

export default function DescriptionInput({ description, onChange }) {
  const maxLength = 32;
  const inputType = "text";
  const placeholderText = "입력하세요";
  return (
    <InputField
      maxLength={maxLength}
      type={inputType}
      value={description}
      placeholder={placeholderText}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
