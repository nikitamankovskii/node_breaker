
async function tests(){
  var first = arguments[0];
  var args = Array.from(arguments);
  args.shift()
  await console.log(first, args)//[0],args[1])
}
tests(1,2,3,4,5)
