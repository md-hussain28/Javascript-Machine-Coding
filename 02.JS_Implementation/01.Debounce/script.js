const name = "global"; // must be var
const obj = {
  name: "obj",
  print() {
    console.log(this.name);
  }
};
setTimeout(()=>obj.print(), 0); // prints "global"
