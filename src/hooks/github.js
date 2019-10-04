import { useState, useEffect } from "react";

export function useGitHub({ username }) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const { login } = data;
    const existing = localStorage.getItem(login);
    if (!existing && login) {
      localStorage.setItem(login, JSON.stringify(data));
    }
  }, [data]);

  useEffect(() => {
    let cancel = false;

    const existing = localStorage.getItem(username);

    if (existing) {
      setData(JSON.parse(existing));
    } else {
      setLoading(true);

      fetch(`https://api.github.com/users/${username}`)
        .then(res => res.json())
        .then(data => {
          if (cancel) return;
          setData(data);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }

    return () => {
      cancel = true;
    };
  }, [username]);

  return { data, loading };
}

export default useGitHub;
