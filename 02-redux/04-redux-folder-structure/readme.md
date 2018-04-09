# Readme

```bash
npm i -g creat-react-app
```

```bash
yarn add redux redux-thunk react-redux
```

## Folder Structure Patterns

* Rails
* Ducks - Redux Reducer Bundles
* Domain based Folders

### Rails

This is the one used in this example

### Ducks - Redux Reducer Bundles

[Ducks - Redux Reducer Bundles](https://github.com/erikras/ducks-modular-redux)

The idea here is that you have a "module" (file) which represents a single reducer along with any action creators or constants that are associated with it. I actually quite enjoy this pattern and I used it in the first version of this course. It breaks down a little when you start to have action types that aren't associated with a single reducer.

### Domain based Folders

[Domain based Folders](https://marmelab.com/blog/2015/12/17/react-directory-structure.html)

The idea here is you group your actions, reducers, etc by the domain they care about, rather than separating them out into generic "actions", "reducers", folders.
