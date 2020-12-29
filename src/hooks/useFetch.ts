import { useEffect, useState } from "react";
import { getBearerToken } from "../lib";

function useFetch<T>(
  url: string,
  options?: {
    method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
    body?: any;
    token?: boolean;
    onCompleted?: (data: T) => void;
    onError?: (message: string) => void;
  }
): {
  data: T | null;
  loading: boolean;
  error: string | null;
  refetch: () => void;
} {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    fetchApi(controller);
    return () => controller.abort();
  }, []);

  const fetchApi = (controller?: AbortController) => {
    setLoading(true);
    fetch(
      url,
      options
        ? {
            method: options.method,
            headers: {
              "Content-Type": "application/json",
              ...(options?.token ? { Authorization: getBearerToken() } : {}),
            },
            body: JSON.stringify(options.body),
            signal: controller?.signal,
          }
        : {}
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          setData(res);
          setError(null);
          setLoading(false);
          options?.onCompleted?.(res);
        } else {
          throw new Error(res.error.message);
        }
      })
      .catch((err) => {
        setData(null);
        setLoading(false);
        setError(err.message);
        options?.onError?.(err.message);
      });
  };

  const state = { data: data, loading, error, refetch: fetchApi };

  return state;
}

export default useFetch;
