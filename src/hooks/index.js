import { useEffect, useState } from 'react';

// TODO: in the future replace with Suspense once it supports data fetching.
export function useFetchJson (url, pollingFrequency) {
  const [json, setJson] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  // Effect hook applied after every render.
  useEffect(() => {
    let intervalId = null;

    fetchJson();

    if (pollingFrequency) {
      intervalId = setInterval(fetchJson, pollingFrequency);

      // Clean up and clear interval just before component is removed.
      return () => clearInterval(intervalId);
    }

    function fetchJson () {
      fetch(url)
        .then(response => {
          if (!response.ok || response.status !== 200) {
            throw new Error(
              `HTTP Status Code: ${response.status} ${response.statusText}`
            );
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
  },
  [
    url, // url is required
    pollingFrequency, // pollingFrequency is optional
  ]);

  return {json, error, loading};
}
