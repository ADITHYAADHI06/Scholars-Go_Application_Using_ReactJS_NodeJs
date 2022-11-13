# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)






 



  // "proxy": "http://localhost:4000",











  <div className="signup-box p-md-5">
                   <div className="row d-flex justify-content-between align-items-center">
                 {/* Login-left-Side */}    
                     <div className="col-md-5 text-center col-12">
                              <figure>
                                  <img src={signup} className=" " alt="signup" />
                              </figure>
                              <NavLink
                                 to="/signup"
                                 className="ms-md-4 text-dark text-center ">
                                 Create an Account
                              </NavLink>
                     </div>

                 {/* Login-right-Side */}
                      <div className="col-md-6 col-12">
                        <h3 className="mb-3">SIGN IN</h3>
                        <form method="POST">
                          <div className="mb-2 formGroup">
                            <label for="Email" className="icon">
                              <EmailIcon />
                            </label>
                            <input
                              type="email"
                              className="form-control "
                              value={email}
                              name="email"
                              onChange={(e) => {
                                console.log(e.target.value);
                                setEmail(e.target.value);
                              }}
                              id="exampleInputEmail1"
                              aria-describedby="emailHelp"
                              placeholder="Your Email"
                            />
                          </div>

                          <div className="mb-2 formGroup">
                            <label for="password" className="icon">
                              <LockIcon />
                            </label>
                            <input
                              type="password"
                              name="password"
                              value={password}
                              onChange={(e) => {
                                console.log(e.target.value);

                                setPassword(e.target.value);
                              }}
                              className="form-control"
                              id="exampleInputPassword1"
                              placeholder="Password"
                            />
                          </div>

                          <div className="mt-4">
                            <input
                              value="Log in"
                              type="submit"
                              name="submit"
                              onClick={loginUser}
                              className="ms-2 btn1"
                            />
                          </div>
                        </form>


                        
                      </div>
            </div>
          </div>
