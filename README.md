# Tquila-anz

[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

There are three steps developed during the completion of this test:
1. normalise response data - **normalizr**
2. digest response data - **reducers**
3. UI and UX - **components + reducers**
### Directory Layout

```shell

├── /app/                       # Development work
│   ├── /components/            # Shared or generic UI components
│   ├── /config/                # Core framework
│   │   ├── /constants.js       # Mock response and other constants
│   │   ├── /rountes.js         # Handles routing 
├── /containers/                # React component containers that have only business logic and render stateless functional components
├── /helpers/                   # Helper functions/utilities
│   ├── api.js                  # Fetch data
│   ├── selectors.js            # Computed state results
├── /redux/                     # Redux
│   ├── /modules/               # Actions + reducers
├── /schema/                    # nomalizr schema
├── /sharedStyles/              # Shared styles
│   ├── /styles.css/            # The  css file
├── /node_modules/              # 3rd-party libraries and utilities
├── /tests/                      # Unit and integration tests
├── .babelrc                    # Utility and helper classes
├── .eslintrc                   # Utility and helper classes
│── README.md                   # This file that you are reading
│── package.json                # The list of project dependencies and NPM 
└── webpack.config.babel.js     # Bundling and optimization settings for Webpack
```

## Stack
### Framework
- React
- Redux
- React-router
### Plugins
- Babel
- Humps - **camelise json responses**
- Immutable - **make states immutable and having performance benefits**
- Normalizr - **normalise the json response**
- Reselect - **computed state results**
- Redux-thunk - **function blocks of actions**
- React-router-redux - **add url to redux store**
- Redux-mock-store - **crate mock store for testing**
- React-bootstrap - **provide UI**
#### Bundling/Server
- Webpack
- Webpack-server
- Css modules - **modular css for components**
- Hot modules replacement
### Tesing
 - Enzyme
 - Mocha
 - Chai
 - Sinon
### Code Quality Control
- Eslint
- Eslint-plugin-airbnb - **personal preference**

### Installation

This app requires [Node.js](https://nodejs.org/) v4+ to run.

Clone or download this project.

Install the dependencies and devDependencies and start the server.

```sh
$ cd tquilla-anz
$ npm install
$ npm run start
```

Go to browser: localhost:8080

### Todos

 - Add more tests
 - UI/UX improvements

License
----

MIT