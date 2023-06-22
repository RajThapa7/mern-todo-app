import { useQuery } from "@tanstack/react-query";
import { AxiosInstance } from "axios";
import useCreateApi from "../useCreateApi";

const getTodos = async (api: AxiosInstance) => {
  const result = await api.get("/todo");
  return result;
};

const useFetchTodos = () => {
  const api = useCreateApi();
  const result = useQuery({
    queryFn: () => getTodos(api),
    queryKey: ["todos"],
  });
  return result;
};

export default useFetchTodos;
