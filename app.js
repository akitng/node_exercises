// Process object is global.  It allows us to interact with info about the
// current process instance.  We can use the process object to get environment
// information, read environment variables, communicate with the terminal or
// parent processes through standard input and output.  We can also exit the
// current process.
// In a nutshell: this object gives us a way to work with the current process
// instance.

// The process.argv variable stands for the argument variables used to
// start the process. The array gives us a way to get information into the app
// when we start it.
console.log(process.argv);

function grab(flag){
  var index = process.argv.indexOf(flag);
  return (index===-1) ? null : process.argv[index+1];
}

var greeting = grab("--greeting");
var user = grab("--user");

if (!user || ! greeting) {
  console.log("You blew it!");
} else {
  console.log(`Welcome ${user}, ${greeting}`);
}

// node app --user Amy --greeting "hello hello"
