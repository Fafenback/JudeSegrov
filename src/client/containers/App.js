import React from "react";
import PropTypes from "prop-types";
import { renderRoutes } from "react-router-config";
import HeaderTest from "../components/HeaderTest";

const App = ({ route }) => {
  return <div>
  <HeaderTest/>
  {renderRoutes(route.routes)}
  </div>;
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