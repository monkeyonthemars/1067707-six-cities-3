import React from "react";
import {propTypes} from '../../src/types/types.js';
import {Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppRoute} from "../../src/const.js";
import {AuthorizationStatus} from "../../src/reducer/user/user.js";
import {getAuthorizationStatus} from "../../src/reducer/user/selectors.js";

const PrivateRoute = (props) => {
  const {render, path, exact, authorizationStatus} = props;

  return (
    <Route
      path={path}
      exact={exact}
      render={() => {
        return (
          authorizationStatus === AuthorizationStatus.AUTH
            ? render()
            : <Redirect to={AppRoute.LOGIN} />
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  authorizationStatus: propTypes.authorizationStatus,
  exact: propTypes.exact,
  path: propTypes.path,
  render: propTypes.render
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});


export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
