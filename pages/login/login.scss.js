import css from 'styled-jsx/css'

export default css`
.lfn-admin-login-bg {
  background: url("/images/lfn-admin-login-bg.jpg") no-repeat center
    center / 100% auto;
  display: flex;
  align-items: center;
  justify-content: center;
  @media all and (max-width: 1200px) {
    display: none;
  }
  @media all and (min-width: 992px) and (max-width: 1024px) {
    // background: url("/assets/images/lfn-admin-login-bg.jpg") no-repeat center center/cover;
    background-size: cover;
  }
}
.login-form-column {
  @media all and (max-width: 1200px) {
    margin: 0px auto;
  }
}
.lfn{
  &-logo {
    height: 135px;
  }

}

.logo-in-mobile {
  height: 60px;
}
.logo-text {
  font-size: 60px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 0px;
}
.login-heading {
  p {
    margin-bottom: 80px;
  }
}

.registration {
  &-form-heading {
    h1 {
      text-align: center;
      font-weight: 400;
      font-size: 22px;
      line-height: 30px;
      text-transform: uppercase;
    }
    p {
      text-align: center;
      font-weight: 500;
      font-size: 13px;
      line-height: 16px;
      margin-bottom: 30px;
    }
  }
}
@media (max-width: 470px) {
  .send-req-btn{
    font-size: 11px;
    padding: 16px 37px;
  }
}
`