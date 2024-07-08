import renderApod from "./components/Apod";
import DatePicker from "./components/DatePicker";
import useGetApodQuery from "./queries/useGetApodQuery";
import "./App.css";
import Spinner from "./components/Spinner";

function App() {
  const { data, isLoading } = useGetApodQuery({});

  if (isLoading) return <Spinner />;

  return (
    <>
      <DatePicker />
      {Array.isArray(data) ? data.map(renderApod) : data && renderApod(data)}
    </>
  );
}

export default App;
