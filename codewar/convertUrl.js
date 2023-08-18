// In this kata, we want to convert a URL query string into a nested object. The query string will contain parameters that may or may not have embedded dots ('.'), and these dots will be used to break up the properties into the nested object.

// You will receive a string input that looks something like this:

// user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue
// Your method should return an object hash-map that looks like this:

// {
//   'user': {
//     'name': {
//       'firstname': 'Bob',
//       'lastname': 'Smith'
//     },
//     'favoritecolor': 'Light Blue'
//   }
// }
// You can expect valid input. You won't see input like:
// // This will NOT happen
// foo=1&foo.bar=2
// All properties and values will be strings — and the values should be left as strings to pass the tests.
// Make sure you decode the URI components correctly

// Converts a URL Query String into an object map
function convertQueryToMap(query) {
    const params = query.split('&');
    const result = {};
  
    for (const param of params) {
      const [path, value] = param.split('=');
      const decodedPath = decodeURIComponent(path);
      const decodedValue = decodeURIComponent(value);
      const pathParts = decodedPath.split('.');
      let current = result;
      for (let i = 0; i < pathParts.length - 1; i++) {
        const part = pathParts[i];
        if (!current[part]) {
          current[part] = {};
        }
        current = current[part];
      }
       current[pathParts[pathParts.length - 1]] = decodedValue;
    }
  
    return result;
  }

  function convertQueryToMap1(query) {
    var obj = {};
    query.split('&').map(function(params) {
      var parts = params.split('=');
      if (!parts[1]) return {};
      parts[0].split('.').reduce(function(cur, next, i, arr) {
        if (!cur[next]) cur[next] = {};
        if (i === arr.length - 1) cur[next] = decodeURIComponent(parts[1]);
        return cur[next];
      }, obj);
    });
    // return obj;
  }

console.log(convertQueryToMap1("user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue"))