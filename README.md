# Stellar Coin

Stellar Coin is a flexible parameter-based web calculator system. It can be used to build any type of parameter-based calculators.
That is, any type of calculator that takes same parameters from the user and calculates a result. Most prominent example is price calculators.

## Why
I created it to use for a simple price calculator. Decided to make it generic and open source. Don't expect it to be complete.

## Usage

To use Stellar Coin for your own parameter-based calculator webpage, first fork the repository. Then edit to [config file](src/lib/config.json).

Here is what those config options do:

- `appName` is the name of the calculator and is displayed at the top of the webpage.
- `appDescription` is similar. It is displayed under the `appName`.
- `valueName` is the name displayed before the overall calculation result. For example, for a price calculator, this can be "Total Price".
- `postValue` is the value display after the overall calculation result. For example, for a price calculator, this can be "$" or "dollars".

After setting the config, now you should edit the [calc.ts](src/lib/calc.ts) to setup how your calculator should work.

In that file, there are only tree variables. You don't have to change anything else outside that file, but if you want obviously you can do so.

`calcParameters` are parameters that your calculator uses to compute the final result. All parameters are represented with numbers. There are tree parameter types:

- `enter`
- `select`
- `toggle`

`enter` is a type of parameter that the user of the calculator enters manually by typing via their keyboards.

`select` is a type of parameter that user selects out of the values passed to it. Only a single value can be chosen by the user.

`toggle` is a type of parameter that user toggles. It can only have two values 1 or 0. Representing true and false respectively.

You should now add the parameters of your calculator to the list `calcParameters` as written in the default version of the file.

There is how you use the parameters (`?` after the argument means it's optional):

```
enter(name, description?, min?, max?)
select(name, description?, options)
toggle(name, description?)
```

- `name` is the name of the parameter field.
- `description` is a information text for that field.
- `min` and `max` are limiting values for the field
- `options` is a list of `selectOption`s, which takes two parameters: `(name, value)`. `value` here is the value that will be passed to the function that calculates the final result.

Now the second variable, `calcResult`. This variable is a lambda function that takes the number values taken from the user via the parameters you set in `calcParameters` in the same order. So you can do whatever you want here to calculate the final result. To access the parameters simply use `args[i]` where `i` is the index of the parameter you declared in `calcParameters`.

Finally, the last variable, `calcDetail`. This is again a lambda function but this time it returns a list of strings. Just as `calcResult`, the parameters are passed to this function. It is used to show the user of the calculator where the result comes from. Every element in this list will be shown in a different line. There are three helper functions for it.

- `info` simply takes two arguments and turns them into `"firstArg (secondArg)"`
- `mul` is very similar: `"firstArg x secondArg"`
- `cond` returns second argument if the first one is true and null otherwise. (null's are ignored in the display)

You can always look at the default [calc.ts](src/lib/calc.ts) file to understand it better. If you know JavaScript/TypeScript, it shouldn't be any hard.

Now the final step. Simply run this to compile the app to the static files with SvelteKit:

```
npm ci
npm run build
```

A new directory called `build` should be created. All the files of the app is there. It's entirely static.

If you want to go deeper, you can write some Playwright tests in the [tests directory](tests/) to make sure your calculations work as intended.

That's it!
