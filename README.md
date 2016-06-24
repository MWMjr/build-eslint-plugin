# build-eslint-plugin
Trying to learn how to build an ESLint plugin.

I saw a presentation by http://guthub.com/kentcdodds at the 2016 KCDC (Kansas City Developer's Conference) about the Abstract Syntax Tree, and how tools like babel and eslint use it.  In an effort to learn this stuff, I am going to try and build a plugin of my own.

After looking through Exploring ES6 by Axel Rauschmeyer to find something simple to do for the first one came up with a eslint plugin that will identify any explictly defined 'unsafe' integer.  A safe integer is defined as -2^53 < i < 2^53.

# eslint-plugin-safe-integer

Checks for any explictly defined integer values that are outside the range of acceptable integer values (&#39;safe&#39;)

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-safe-integer`:

```
$ npm install eslint-plugin-safe-integer --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-safe-integer` globally.

## Usage

Add `safe-integer` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "safe-integer"
    ]
}
```


