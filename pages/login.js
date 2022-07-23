import styles from '../styles/scoped/Login.module.scss'
const login = () => {
  return (
    <div>
      <div className="row g-0 vh-100">
        <div className={` ${styles.lfnAdminLoginBg} col h-100`}>
          <a href="https://www.livingfitnation.com/">
            <img src="/images/lfn-logo-1.svg" alt="LFN" className="lfn-logo me-4" />
          </a>
          <h2 className="text-white logo-text">
            Did you find the <br /> solution?
          </h2>
        </div>
        <div className="col-lg-8 col-xl-5 h-100 login-form-column position-relative">
        <div className="login-form">
        <div className="login-heading text-center">
          <h1 className="text-secondary mb-1 d-none d-xl-block">Lets get</h1>
          <h1 className="text-secondary mb-30 d-none d-xl-block">you <b className="text-primary">started</b></h1>
          {/* <img src="assets/images/parent-logo.svg" className="mb-3 d-xl-none logo-in-mobile" alt=""> */}
          {/* <h3 className="text-primary text-center mb-40"><b>Welcome Back</b></h3> */}
          <p>Getting started is Quick and simple,<br />
            Just fill out form below</p>
        </div>
        <form action="" className="">
          <div className="form-group mb-20">
            <div className="login-inputs input-group ">
              <span className="input-group-text">
                <i className="icon-user"></i>
              </span>
              <input type="text" className="form-control" placeholder="Email/Username" />
            </div>
            <div className="text-danger" >
              Please type your email address.
            </div>
            <div className="text-danger">
              Email address is invalid.
            </div>
          </div>
          <div className="form-group mb-20">
            <div className="login-inputs input-group password-fields">
              <span className="input-group-text">
                <i className="icon-lock"></i>
              </span>
              <input className="form-control" placeholder="Password" />
              <button className="btn btn-outline-c8c8 border-left-0" type="button" >
                <i className="fs-16"></i>
              </button>
            </div>
            <div className="text-danger">
              Please type your password.
            </div>
          </div>
          <div className="d-flex mb-30">
            <div className="ms-sm-4">
              <a href="" className="forgot-password">Forgot Password?</a>
            </div>
            <div className="form-check login-form-check ms-auto me-sm-4">
              <input className="form-check-input" type="checkbox" value="" id="rememberPass" />
              <label className="form-check-label" htmlFor="rememberPass">
                Remember Password
              </label>
            </div>
          </div>
          <button className="btn btn-lg btn-secondary text-white text-capitalize w-100 btn-with-loader">
            Submit
            {/* <btn-loader></btn-loader> */}
          </button>
          <br />
        </form>
      </div>
        </div>
      </div>

    </div>
  )
}

export default login