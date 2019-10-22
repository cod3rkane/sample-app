import fetch from 'isomorphic-unfetch';

export default async function request(path, opts = {}) {
  const headers = {
    ...opts.headers || {},
    'Content-type': 'application/json; charset=UTF-8',
  };

  const response = await fetch(
    path,
    {
      ...opts,
      headers,
    }
  );

  const data = response.json();

  if (data.error) {
    throw new Error(data.error);
  }

  return data;
}
