# eslint-config-skyscape

Skyscape Cloud Services ESLint configuration.

## Installation

    npm install --save-dev eslint eslint-config-skyscape

## Usage

### Node.js Projects

Create the following `.eslintrc` file in your project root.

```json
{
  "extends": "skyscape",
  "root": true
}
```

### Sprockets Projects

Create the following `.eslintrc` file in your project root.

```json
{
  "extends": "skyscape/sprockets",
  "root": true
}
```

### Test Configuration

Create the following `.eslintrc` file in your test directory.

```json
{
  "extends": "skyscape/test"
}
```

## Tests

    npm test

## Versioning

When tagging a new release use npm. It will update the version in the `package.json` file before committing the change to git and adding the appropriate git tag.

To release a **bugfix** update the **patch version**.

    $ npm version patch
    $ git push

To release a **feature** update the **minor version**.

    $ npm version minor
    $ git push

To release a **breaking change** update the **major version**.

    $ npm version major
    $ git push

