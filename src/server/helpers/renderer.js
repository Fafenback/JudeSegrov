import React from "react";
import { renderToString } from "react-dom/server";
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
// import serialize from "serialize-javascript";
import Routes from "../../client/Routes";
import { renderRoutes } from "react-router-config";
//import { Helmet } from 'react-helmet';

export default (req, store, context) => {
  const sheet = new ServerStyleSheet();
  const content = renderToString(
    <Provider store={store}>
      <StyleSheetManager sheet={sheet.instance}>
      <StaticRouter location={req.path} context={context}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
      </StyleSheetManager>
    </Provider>
  );

  const styleTags = sheet.getStyleTags() 

  //const helmet = Helmet.renderStatic();

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">

        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0">
        ${styleTags}
      </head>
      <body>
        <div id='root'>${content}</div>
        
        <script src='bundle.js'/>
      </body>
    </html>
  `;
};
// <script>window.INITIAL_STATE = ${serialize(store.getState())}</script>
