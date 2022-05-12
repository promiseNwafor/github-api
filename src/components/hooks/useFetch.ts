import axios from "axios";
import { useState } from "react";
import { IRepo } from "../../lib/Interfaces";

export const useFetch = () => {
  const [data, setData] = useState<IRepo[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const fetchData = async (url: string) => {
    setLoading(true);
    try {
      const res = await axios.get(url);
      setData(res.data.items);
    } catch (err: any) {
      setError(true);
      setErrorMsg(err.message);
    }
    setLoading(false);
  };

  return { data, loading, error, errorMsg, fetchData };
};
