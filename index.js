const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  drivers.push(name);
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver() {
  drivers.pop();
}

function destructivelyRemoveFirstDriver() {
  drivers.shift();
}

function appendDriver(name) {
  const newDriverToEnd = [...drivers, name]
  return newDriverToEnd
}

function prependDriver(name) {
  const newDriverToStart = [name, ...drivers]
  return newDriverToStart
}

function removeLastDriver() {
  const removeLastDriver = drivers.slice(0, 2)
  return removeLastDriver
}
function removeFirstDriver() {
  const removeFirstDriver = drivers.slice(1)
  return removeFirstDriver
}