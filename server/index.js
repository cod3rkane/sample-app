const IntlPolyfill = require('intl');

Intl.NumberFormat = IntlPolyfill.NumberFormat;
Intl.DateTimeFormat = IntlPolyfill.DateTimeFormat;

const { parse } = require('url');
const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const { readFileSync } = require('fs');
const accepts = require('accepts');

const port = 3000;

// We need to expose React Intl's locale data on the request for the user's
// locale. This function will also cache the scripts by lang in memory.
const localeDataCache = new Map();
const getLocaleDataScript = (locale) => {
  const lang = locale.split('-')[0];

  if (!localeDataCache.has(lang)) {
    const localeDataFile = require.resolve(`@formatjs/intl-relativetimeformat/dist/locale-data/${lang}`);
    const localeDataScript = readFileSync(localeDataFile, 'utf8');
    localeDataCache.set(lang, localeDataScript);
  }

  return localeDataCache.get(lang);
};

// We need to load and expose the translations on the request for the user's
// locale. These will only be used in production, in dev the `defaultMessage` in
// each message description in the source code will be used.
const getMessages = (locale) => {
  const messages = locale.reduce((acc, cv) => ({ ...acc, [cv]: require(`../lang/${cv}.json`) }), {});

  return messages;
};

const getLocale = (req) => {
  const accept = accepts(req);
  const locale = accept.languages(['en']);

  return locale;
};

// Services
const JobService = require('./jobs');

app.prepare().then(() => {
  const server = express();

  // give all Nextjs's request to Nextjs before anything else!!!
  server.get('/_next/*', (req, res) => {
    handle(req, res);
  });

  server.get('/static/*', (req, res) => {
    handle(req, res);
  });

  server.get('/api/jobs', JobService.getList);

  server.get('*', async (req, res) => {
    const parsedUrl = parse(req.url, true);
    const { pathname } = parsedUrl;
    const locale = getLocale(req);
    const initialState = { jobs: { list: JobService.jobList } };

    console.log({ pathname });

    req.store = initialState;
    req.locale = locale;
    req.localeDataScript = getLocaleDataScript(locale);
    req.messages = getMessages(['en']);

    handle(req, res, parsedUrl);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
    console.log(`> Running ${process.env.NODE_ENV} environment`);
  });
});
