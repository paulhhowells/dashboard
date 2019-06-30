import { useEffect, useState } from 'react';

// TODO: in the future replace with Suspense once it supports data fetching.
export function useFetchJson (url) {
  const [json, setJson] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(fetchJson, [url]);

  return {json, error, loading};

  function fetchJson () {
    fetch(url)
      .then(response => {
        if (response.status !== 200) {
          throw new Error('HTTP Status Code: ' + response.status);
        }

        return response.json();
      })
      .then(
        json => {
          // TODO: remove this delay that simulates latency.
          setTimeout(() => {
            setJson(json);
            setLoading(false);
          }, 1000);
        },
        error => {
          setError(error);
          setLoading(false);
        }
      );
  }
}
