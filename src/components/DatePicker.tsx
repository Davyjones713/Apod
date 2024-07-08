import { Control, Controller } from "react-hook-form";
import {
  DatePickerWrapper,
  InputWrapper,
  StyledLabelText,
} from "./DatePickerStyles";
import { Button, TextField } from "@mui/material";

interface FieldValues {
  startDate: string;
  endDate: string;
}

function DatePicker({
  isFetching,
  control,
  errorsStart,
  errorsEnd,
}: {
  isFetching: boolean;
  control: Control<FieldValues>;
  errorsStart: string | undefined;
  errorsEnd: string | undefined;
}) {
  return (
    <DatePickerWrapper>
      <InputWrapper>
        <label htmlFor="startDate">
          <StyledLabelText>Start Date:</StyledLabelText>
        </label>
        <Controller
          control={control}
          name="startDate"
          rules={{
            required: "Start Date is required",
            pattern: {
              value: /^\d{4}-\d{2}-\d{2}$/,
              message: "Invalid date format (YYYY-MM-DD)",
            },
          }}
          render={({ field: { onChange, value } }) => (
            <TextField
              label="YYYY/MM/DD"
              variant="standard"
              required
              type="text"
              id="startDate"
              value={value || ""}
              onChange={onChange}
              style={{ marginBottom: "20px" }}
              helperText={errorsStart || ""}
              error={Boolean(errorsStart)}
            />
          )}
        />

        <label htmlFor="endDate">
          <StyledLabelText>End Date:</StyledLabelText>
        </label>
        <Controller
          control={control}
          name="endDate"
          rules={{
            required: "End Date is required",
            pattern: {
              value: /^\d{4}-\d{2}-\d{2}$/,
              message: "Invalid date format (YYYY-MM-DD)",
            },
          }}
          render={({ field: { onChange, value } }) => (
            <TextField
              variant="standard"
              label="YYYY/MM/DD"
              required
              type="text"
              id="endDate"
              value={value || ""}
              placeholder="YY-MM-DD"
              onChange={onChange}
              error={Boolean(errorsEnd)}
              helperText={errorsEnd}
            />
          )}
        />
      </InputWrapper>

      <Button
        variant="contained"
        color="success"
        type="submit"
        disabled={isFetching}
      >
        {isFetching ? "Loading..." : "Search by date"}
      </Button>
    </DatePickerWrapper>
  );
}

export default DatePicker;
