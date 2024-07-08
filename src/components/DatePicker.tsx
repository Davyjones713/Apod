import { Controller, useForm } from "react-hook-form";
import useGetApodQuery from "../queries/useGetApodQuery";
import {
  DatePickerWrapper,
  InputWrapper,
  StyledLabelText,
} from "./DatePickerStyles";
import { Button, TextField } from "@mui/material";

function DatePicker() {
  const {
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      startDate: "",
      endDate: "",
    },
  });

  const { refetch, isFetching } = useGetApodQuery({
    startDate: watch("startDate"),
    endDate: watch("endDate"),
  });

  const submit = () => {
    refetch();
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
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
                helperText={errors?.startDate?.message}
                error={Boolean(errors?.startDate)}
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
                error={Boolean(errors?.endDate)}
                helperText={errors?.endDate?.message}
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
    </form>
  );
}

export default DatePicker;
