import DefaultLabel from "../../../base-ui/inputs/Label/DefualtLabel";
import DefaultContainer from "../DefaultContainer";
import { InputField } from "../../../base-ui/inputs/InputField";
import { handleChange } from "../../../base-ui/inputs/DateInput/inputDateHandler";

export default function DateForm({ value, onChange }) {
  const dateLabelText = "일자";

  return (
    <DefaultContainer>
      <DefaultLabel>{dateLabelText}</DefaultLabel>
      <InputField
        placeholder="YYYY.MM.DD"
        value={value || ""}
        onChange={(e) => handleChange(e, onChange)}
        required
      />
    </DefaultContainer>
  );
}
