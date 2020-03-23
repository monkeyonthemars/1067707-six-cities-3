import React, {PureComponent, createRef} from "react";
import {propTypes} from '../../src/types/types.js';

class SignIn extends PureComponent {
  constructor(props) {
    super(props);

    this.loginRef = createRef();
    this.passwordRef = createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    const {onSubmit} = this.props;

    evt.preventDefault();

    onSubmit({
      login: this.loginRef.current.value,
      password: this.passwordRef.current.value,
    });
  }

  render() {
    return (
      <div className="page page--gray page--login">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <a className="header__logo-link" href="main.html">
                  <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
                </a>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <a className="header__nav-link header__nav-link--profile" href="#">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__login">Sign in</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <main className="page__main page__main--login">
          <div className="page__login-container container">
            <section className="login">
              <h1 className="login__title">Sign in</h1>
              <form className="login__form form" action="#" method="post" onSubmit={this.handleSubmit}>
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">E-mail</label>
                  <input
                    className="login__input form__input"
                    type="email"
                    name="email"
                    placeholder="Email"
                    required style={{
                      backgroundImage: `url("data:image/png`,
                      backgroundRepeat: `no-repeat`,
                      backgroundAttachment: `scroll`,
                      backgroundSize: `16px 18px`,
                      backgroundPosition: `98% 50%`,
                      cursor: `auto`
                    }}
                    autoComplete="off"
                    ref={this.loginRef} />
                </div>
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">Password</label>
                  <input
                    className="login__input form__input"
                    type="password"
                    name="password"
                    placeholder="Password"
                    required style={{
                      backgroundImage: `url("data:image/png`,
                      backgroundRepeat: `no-repeat`,
                      backgroundAttachment: `scroll`,
                      backgroundSize: `16px 18px`,
                      backgroundPosition: `98% 50%`,
                      cursor: `auto`
                    }}
                    autoComplete="off"
                    ref={this.passwordRef} />
                </div>
                <button className="login__submit form__submit button" type="submit">Sign in</button>
              </form>
            </section>
          </div>
        </main>

      </div>
    );
  }
}

SignIn.propTypes = propTypes.placeCard;

SignIn.propTypes = {
  onSubmit: propTypes.onSubmit
};

export default SignIn;
