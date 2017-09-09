React JSON View
---

A react library that renders a JSON structure as a component.

React already has support for rendering Javascript objects, however, the structure that React uses is a Javascript object and not a valid JSON object.
If you want to get this structure from the server, and render it, you will have to make some adjustments.

# Example

```shell
$ npm install react-json-view --save
```

```javascript
const jsonView = require('react-json-view').default
// ES2015 modules
import jsonView from 'react-json-view'
```
