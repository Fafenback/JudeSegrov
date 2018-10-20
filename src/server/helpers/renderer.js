import React from 'react';
import {renderToString} from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import serialize from 'serialize-javascript';
import Routes from '../../client/Routes';
import { renderRoutes } from 'react-router-config';
//import { Helmet } from 'react-helmet';


export default (req, store, context) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>
  );

  //const helmet = Helmet.renderStatic();

  return`
    <html>
      <head>


      </head>
      <body>
        <div id='root'>${content}</div>
        
        <script src='bundle.js'></script>
      </body>
    </html>
  `
}
// <script>window.INITIAL_STATE = ${serialize(store.getState())}</script>