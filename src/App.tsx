import renderApod from "./components/Apod";
import DatePicker from "./components/DatePicker";
import "./App.css";
import Spinner from "./components/Spinner";
import { useForm } from "react-hook-form";
import useSearchApodQuery from "./queries/useSearchApodQuery";

function App() {
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

  const { refetch, isFetching, data, isLoading } = useSearchApodQuery({
    startDate: watch("startDate"),
    endDate: watch("endDate"),
  });

  const submit = () => {
    refetch();
  };

  if (isLoading) return <Spinner />;

  return (
    <>
      <form onSubmit={handleSubmit(submit)}>
        <DatePicker
          control={control}
          errorsStart={errors?.startDate?.message}
          errorsEnd={errors?.endDate?.message}
          isFetching={isFetching}
        />
      </form>
      {Array.isArray(data) ? data.map(renderApod) : data && renderApod(data)}
    </>
  );
}

export default App;
