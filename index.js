var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
// ...ARRAY, slice
function appendKitten(name){

}
function prependKitten(name){

}
function removeLastKitten(name){

}
function removeFirstKitten(name){

}

// --- --- --- //
// .push, .unshift,
function destructivelyAppendKitten(name){
  return kittens.push(name);
}
function destructivelyPrependKitten(name){
  return kittens.unshift(name);
}
function destructivelyRemoveLastKitten(name){
  kittens.pop();
  return kittens;
}
function destructivelyRemoveFirstKitten(name){
  kittens.shift();
  return kittens;
}
