export default (html, state) => `
<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="theme-color" content="#000000">

  <link rel="manifest" href="/manifest.json">
  <link rel="shortcut icon" href="/favicon.ico">

  <title>WIPKanban</title>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500">
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
  <link rel="stylesheet" href="/assets/css/font-awesome-4.7.0/css/font-awesome.min.css">
</head>

<body style="margin: 0">
  <div id="root">${html}</div>
  <script>
  window.__PRELOADED_STATE__ = ${JSON.stringify(state)}
</script>
<script src="/dist/bundle.js"></script>
</body>

</html>
`;
