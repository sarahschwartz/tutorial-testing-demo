---
sidebar_position: 1
---

# Example Tutorial

## Make a new folder

Make a new folder called `project-folder`:

<span
id="create-project-folder"
data-name="runCommand"
></span>

```sh
mkdir project-folder
```

## Create a new React project

Initialize a new React project.

<span
id="create-react-app"
data-name="runCommand"
data-command-folder="tests-output/project-folder"
></span>

```sh
npx create-react-app my-app
```

## Add a "Hello World" button

Replace your `src/App.js` file with the code below:

<span
id="modify-app-file"
data-name="writeToFile"
data-filepath="tests-output/project-folder/my-app/src/App.js"
></span>

```js
import { useState } from 'react';

function App() {
  const [showSecret, setShowSecret] = useState(false);
  return (
    <div>
      <button onClick={() => setShowSecret(true)}>
        Show Secret Text
      </button>

      {showSecret && <p>Hello World</p>}
    </div>
  );
}

export default App;
```

Now you have a React app that shows a secret message!

## Testing the app

To run the app locally, run the command below:

<span
id="run-app"
data-name="runCommand"
data-pre-command="pnpm pm2 start 'PORT=4000 BROWSER=none <COMMAND>' --name 'react-app' --cwd ./tests-output/project-folder/my-app"
></span>

```sh
npm start
```

<span
id="wait-until-loaded"
data-name="wait"
data-timeout="8000"
></span>

<span
id="visit-app"
data-name="goToUrl"
data-url="http://localhost:4000/"
></span>

<span
id="click-button"
data-name="clickButtonFromTest"
data-button-text="Show Secret Text"
></span>

<span
id="click-button"
data-name="findText"
data-find-text="Hello World"
></span>
