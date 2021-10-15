# a2-primitive-types

> 1. Create a folder **a2-primitive-types** and change into the folder
> 1. Execute `npm init -y` inside terminal
> 1. Execute `npm i concurrently nodemon typescript` inside terminal
> 1. Update the **scripts** section inside the package.json
> 1. Execute `npx tsc --init --rootdir src --outdir dist` inside terminal
> 1. Update the settings of `tsconfig.json`. Please refer the `tsconfig.json` file
> 1. Create index.ts inside **./src** folder and code
> 1. Execute `npm run build` to compile
> 1. Execute `npm run start` to execute
> 1. Execute `npm run dev` to compile, watch, and execute

```
    "scripts": {
        "build": "tsc",
        "start": "node ./dist/index.js",
        "dev": "npm run build && concurrently -k -n COMPILER,NODEMON -c yellow,blue \"tsc -w\" \"nodemon -w dist -q dist/index.js\""
    },
```

```
    "target": "ES2021" /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */,
    "module": "commonjs" /* Specify what module code is generated. */,
    "rootDir": "src" /* Specify the root folder within your source files. */,
    "outDir": "dist" /* Specify an output folder for all emitted files. */,
    "esModuleInterop": true
    /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables `allowSyntheticDefaultImports` for type compatibility. */,
    "forceConsistentCasingInFileNames": true /* Ensure that casing is correct in imports. */,
    "strict": true /* Enable all strict type-checking options. */,
    "skipLibCheck": true /* Skip type checking all .d.ts files. */
```
