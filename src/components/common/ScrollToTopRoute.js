import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';

class ScrollToTopRoute extends Component {
  componentDidUpdate(prevProps) {
    const location = this.props.location;
    const prevLocation = prevProps.location.pathname;
    const currentLocation = location.pathname;
    if (prevLocation !== currentLocation) window.scrollTo(0, 0);
  }

  render() {
    const { component: Component, ...rest } = this.props;

    return <Route {...rest} render={(props) => <Component {...props} />} />;
  }
}
// withRouter은 라우트가 사용된 컴포넌트가 아니어도 match, location, history객체를 접근할 수 있게 해준다.
export default withRouter(ScrollToTopRoute);
