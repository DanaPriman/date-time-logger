/**
 * Returns the current date and time as an ISO 8601 timestamp string.
 * @returns {string} The current ISO timestamp
 */
function now() {
  return new Date().toISOString();
}

/**
 * A simple ping function.
 * @returns {string} Returns "pong"
 */
function ping() {
  return "pong";
}

module.exports = { now, ping };
