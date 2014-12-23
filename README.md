## Information

<table>
<tr>
<td>Package</td><td>gulp-module-wrapper</td>
</tr>
<tr>
<td>Description</td>
<td>Wrap files with an module wrapper</td>
</tr>
<tr>
<td>Node Version</td>
<td>≥ 0.10</td>
</tr>
</table>

## Usage

Wrap the contents of the file, module will return the entire contents

```javascript
var wrap = require('gulp-module-wrapper');

gulp.task('wrap', function() {
  gulp.src('./lib/*.js')
    .pipe(wrap())
    .pipe(gulp.dest('./dist/'))
});
```

Wrap the contents, with custom dependencies, callback params, and variable to return (exports)

```javascript
var wrap = require('gulp-module-wrapper');

gulp.task('wrap', function() {
  gulp.src('./lib/*.js')
    .pipe(wrap({
      deps: ['jade'],          // dependency array
      args: ['jade'],        // params for callback
      exports: 'jade',         // variable to return
      root: 'templates/' // include a module name in the define() call, relative to moduleRoot
    }))
    .pipe(gulp.dest('./dist/'))
});
```

Specify options for specific file

```javascript
var wrap = require('gulp-module-wrapper');
var options = {
  'app.js' : {
    'name' : 'app'        // allowed to specify name, otherwise filename will be used
    'deps' : ['router'],
    'args' : ['appRouter'],
    'exports' : 'app'
  },
  'router.js' : {
      'name' : 'router'
      'exports' : 'router'
    }
};

gulp.task('wrap', function() {
  gulp.src('./lib/*.js')
    .pipe(wrap(options))
    .pipe(gulp.dest('./dist/'))
});
```

All modules will get default dependencies like 'exports', 'require', 'module'.
If module root is not specified, filename will be used for module's name.

## LICENSE

(MIT License)

Copyright (c) 2014 Tim Voronov

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
