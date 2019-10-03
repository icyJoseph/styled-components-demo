import { useState, useEffect } from "react";

export function useGitHub({ user }) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let cancel = false;

    setLoading(true);

    fetch(`https://api.github.com/users/${user}`)
      .then(res => res.json())
      .then(data => {
        if (cancel) return;
        setData(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));

    return () => {
      cancel = true;
    };
  }, [user]);

  return { data, loading };
}
