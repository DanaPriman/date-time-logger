# @dana180597/date-time-logger

A simple date/time utility for Node.js.

## Installation

```bash
npm install @dana180597/date-time-logger
```

## Usage

```javascript
const { now, ping } = require('@dana180597/date-time-logger');

// Get the current ISO timestamp
console.log(now());
// Output: "2024-01-15T10:30:00.000Z"

// Simple ping/pong
console.log(ping());
// Output: "pong"
```

## API

### `now()`

Returns the current date and time as an ISO 8601 timestamp string.

### `ping()`

Returns the string `"pong"`.

## License

MIT
