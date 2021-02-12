# Various utility methods for JavaScript / TypeScript

[![Build Status](https://dev.azure.com/samlanning/general/_apis/build/status/ts-util?branchName=master)](https://dev.azure.com/samlanning/general/_build/latest?definitionId=4&branchName=master) [![Total alerts](https://img.shields.io/lgtm/alerts/g/samlanning/ts-util.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/samlanning/ts-util/alerts/) [![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/samlanning/ts-util.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/samlanning/ts-util/context:javascript)

These packages are all implemented using pure TypeScript, and they can be easily included in frontend code using bundlers like webpack etc..

## [get-relative-path](get-relative-path)

[![](https://img.shields.io/npm/v/get-relative-path)](https://www.npmjs.com/package/get-relative-path)

Similar to Node.js's [path.relative()](https://nodejs.org/api/path.html#path_path_relative_from_to)
but works outside the context of a filesystem, and assumes
all paths are POSIX-style.
So this also works for URL pathnames.

You can easily use this package by installing it in your Node.js project:

```
> npm install get-relative-path
```