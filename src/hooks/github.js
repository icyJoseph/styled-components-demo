import { useState, useEffect } from "react";

function transform({
  avatar_url: avatar,
  html_url: profile,
  login,
  bio,
  company,
  location,
  name,
  followers
}) {
  return {
    avatar,
    profile,
    username: login,
    bio,
    company,
    location,
    name,
    followers
  };
}

export function useGitHub({ username }) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const { username } = data;
    const existing = localStorage.getItem(username);
    if (!existing && username) {
      localStorage.setItem(username, JSON.stringify(data));
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
        .then(transform)
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
