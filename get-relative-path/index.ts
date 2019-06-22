/**
 * Work out what the relative path to get from from to to is.
 * i.e. Starting at "from", what path would lead us to "to".
 *
 * For this to work, either both baths need to be absolute
 * (i.e. starting with "/") or both start from the same
 * directory.
 *
 * Similar to Node.js's path.relative():
 * https://nodejs.org/api/path.html#path_path_relative_from_to
 * but works outside the context of a filesystem, and assumes
 * all paths are POSIX-style (so should work well for URLs).
 */
function relative(from: string, to: string) {
  if (!from || !to)
    throw new Error('Invalid or empty paths');
  if (from.startsWith('/') !== to.startsWith('/'))
    throw new Error('Mixed absolute and relative paths');
  let path = '';
  // make from point to the folder we're starting from
  // (only relevant if the path does not end in a slash)
  let current = from.substr(0, from.lastIndexOf('/') + 1);
  // If target is same as current directory...
  if (current === to) return './';
  while (!to.startsWith(current)) {
    const index = current.lastIndexOf('/', current.length - 2);
    if (index !== -1) path += '../';
    current = current.substr(0, index + 1);
    continue;
  }

  path += to.substr(current.length);
  return path;
}

export = relative;
