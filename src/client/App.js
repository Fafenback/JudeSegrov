import React from "react";
import PropTypes from "prop-types";
import { renderRoutes } from "react-router-config";

const App = ({ route }) => {
  return <div>{renderRoutes(route.routes)}</div>;
};

App.propTypes = {
  route: PropTypes.array.isRequired
};

App.defaultProps = {
  route: []
};

export default {
  component: App
};