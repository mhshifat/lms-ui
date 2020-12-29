import { useState } from "react";
import { getBearerToken } from "../lib";

const useFetchLazy = <T>(
  url?: string
): [
  (options: {
    url?: string;
    method: "POST" | "PUT" | "PATCH" | "DELETE";
    body?: any;
    token?: boolean;
  }) => Promise<T>,
  { data: T | {}; loading: boolean; error: string | null }
] => {
  const [data, setData] = useState<T | {}>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const lazyFetch = (options: {
    url?: string;
    method: "POST" | "PUT" | "PATCH" | "DELETE";
    body?: any;
    token?: boolean;
  }): Promise<T> => {
    setLoading(true);
    return fetch(url || options?.url || "", {
      method: options.method,
      headers: {
        "Content-Type": "application/json",
        ...(options?.token ? { Authorization: getBearerToken() } : {}),
      },
      body: JSON.stringify(options.body),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          setData(res);
          setError(null);
          setLoading(false);
          return Promise.resolve(res);
        } else {
          return Promise.reject(new Error(res.error.message));
        }
      })
      .catch((err) => {
        setData({});
        setLoading(false);
        setError(err.message);
        return Promise.reject(err);
      });
  };

  const state = { data, loading, error };

  return [lazyFetch, state];
};

export default useFetchLazy;
