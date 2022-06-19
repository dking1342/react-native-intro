# React Native 

## Documentation
Documentaion for the code base can be found [here](https://www.youtube.com/watch?v=ur6I5m2nTvk)

## Explanation
Series of lessons covering React Native with practical examples and use cases

## Getting Started
Some setup config that needs to be done before React Native being useable

### Initial create react native
Type this into the terminal to start a new project:

```
npx react-native init AwesomeProject
```

To make a project with Typescript then type this into the terminal:

```
npx react-native init AwesomeTSProject --template react-native-template-typescript
```

### Pod Install
Go to the ios folder and type this into the terminal:

```
sudo arch -x86_64 gem install ffi
arch -x86_64 pod install
``` 

### Install Babel ESLint Parser
Install babel eslint parser by typing <code>@babel/eslint-parser</code> in the terminal

### Edit ESLint file
Go to the root directory and find the eslint file (.eslintrc.js). Copy and paste this:

```
module.exports = {
  root: true,
  extends: '@react-native-community',
  parser:"@babel/eslint-parser",
  parserOption:{
    requireConfigFile:false
  }
};
```

### Typescript additional setup
#### Install packages
Type this in the terminal to install all the relevant packages:

```
npm install -D typescript @types/jest @types/react @types/react-native @types/react-test-renderer
```

#### Configure Jest
Create a file called jest.config.js in the root folder and paste this into the file:

```
module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
};
```

#### TS config file
Add a TypeScript config file. Create a tsconfig.json in the root of your project with these settings among others:

```
{
  "compilerOptions": {
    "allowJs": true,
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "isolatedModules": true,
    "jsx": "react-native",
    "lib": ["es2017"],
    "moduleResolution": "node",
    "noEmit": true,
    "strict": true,
    "target": "esnext"
  },
  "exclude": [
    "node_modules",
    "babel.config.js",
    "metro.config.js",
    "jest.config.js"
  ]
}
```

#### Rename entry file
Rename the App.js file to App.tsx. Make sure the extention is tsx otherwise it will not work.
