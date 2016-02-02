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

