# reactjs-reflux-app-hotels

This is an APP built with **ReactJs** using **Reflux**. The app is using all the modules installed by create-react-app. NPM was used to manage dependencies.

### Clone the repo

```sh
git clone https://github.com/Gatop/reactjs-reflux-app-hotels.git
```

### Node setup

```sh
# Install npm dependencies in project folder
npm install
```

### Run server

```sh
# Run server on port 3000
npm start
```

Now you can enter with the browser to http://localhost:3000/ and test the app.

![Alt Text](https://github.com/Gatop/reactjs-reflux-app-hotels/blob/master/documentation/doc-gif.gif)

### Run tests

Tests are located in App.test.js and were built with enzyme.

```sh
# Run all the tests
npm test a
```

## Project Description

### Project Structure

This is the complete project structure:

```
reactjs-reflux-app-hotels
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
└── src
    ├── actions
    │   └── Actions.js
    ├── assets
    │   ├── icons
    │   └── images
    ├── components
    │   ├── home
    │   │   ├── Card.js
    │   │   ├── Filters.js
    │   │   └── Grid.js
    │   ├── icons
    │   │   ├── Amenity.js
    │   │   └── Star.js
    │   └── Header.js
    ├── services
    │   └── http.js
    ├── stores
    │   └── AppStore.js
    ├── styles
    │   ├── Card.css
    │   ├── Filters.css
    │   ├── Grid.css
    │   ├── Header.css
    │   └── Home.css
    ├── views
    │   └── Home.js
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    └── registerServiceWorker.js
```

### Components Segregation

Several components were created for this project. Following image is the actual components structure.

![Alt Text](https://github.com/Gatop/reactjs-reflux-app-hotels/blob/master/documentation/desktop.png)


### Getting data

Getting data and render it to the **Grid.js** component was built with reflux. The main idea is to have a listener inside components that could affect data behaviour. For **Grid.js** component, when it will be mount, a call for the action **getHotels** is ever done. Also for **Filters.js**, whenever a filter is modified, the same action will be called.

All the information is managed by **AppStore.js** in **data** state. this state is linked to **Grid.js**

**Whatwg-fetch** (implemented in **http.js**) is used for Launching the request to the API.

This is an example of the interaction flow with reflux and replicated in this APP:

![Alt Text](https://github.com/Gatop/reactjs-reflux-app-hotels/blob/master/documentation/reflux-flow.png)

### Modules

This modules where used to create this APP:

* [reflux](https://www.npmjs.com/package/reflux)
* [react-router-dom](https://www.npmjs.com/package/react-router-dom)
* [whatwg-fetch](https://www.npmjs.com/package/whatwg-fetch)
* [bootstrap](https://www.npmjs.com/package/bootstrap)
* [font-awesome](https://www.npmjs.com/package/font-awesome)

For testing:
* [enzyme](https://www.npmjs.com/package/enzyme)
* [enzyme-adapter-react-16](https://www.npmjs.com/package/enzyme-adapter-react-16)
* [expect](https://www.npmjs.com/package/expect)
* [expect-enzyme](https://www.npmjs.com/package/expect-enzyme)
