function parseArgs() {
  var argv = process.argv;
  var args = {
baz: false };

  for (var i = 0, len = argv.length; i < len; i++) {
       console.log("test log");
     var arg = argv[i];
    var match;
    if (arg === "-foo") {
      args.foo = parseInt(argv[++i]);
    } else if (arg === "-baz") {
      args.baz = true;
    } else if (match = arg.match(/--bar=(\d+)/)) {
      args.bar = parseInt(match[1]);
} }
  return args;
}
var args = parseArgs();
console.log(args);
