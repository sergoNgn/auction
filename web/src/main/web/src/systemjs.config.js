System.config({
    transpiler: 'typescript',
    typescriptOptions: {
        emitDecoratorMetadata: true
    },
    map: {
        '@angular': 'node_modules/@angular',
        'rxjs'    : 'node_modules/rxjs',
        '@angular/core': 'node_modules/@angular/core',
        '@angular/common': 'node_modules/@angular/common',
        '@angular/compiler': 'node_modules/@angular/compiler',
        '@angular/router': 'node_modules/@angular/router',
        '@angular/forms': 'node_modules/@angular/forms',
        '@angular/http': 'node_modules/@angular/http',
        '@angular/platform-browser': 'node_modules/@angular/platform-browser',
        '@angular/platform-browser-dynamic': 'node_modules/@angular/platform-browser-dynamic'
    },
    packages: {
        'app'                              : {main: 'main.ts', defaultExtension: 'ts'},
        'rxjs'                             : {main: 'index.js'},
        '@angular/core'                    : {main: 'index.js'},
        '@angular/common'                  : {main: 'index.js'},
        '@angular/compiler'                : {main: 'index.js'},
        '@angular/http'                    : {main: 'index.js'},
        '@angular/router'                  : {main: 'index.js'},
        '@angular/platform-browser'        : {main: 'index.js'},
        '@angular/forms'                   : {main: 'index.js'},
        '@angular/platform-browser-dynamic': {main: 'index.js'}
    }
});