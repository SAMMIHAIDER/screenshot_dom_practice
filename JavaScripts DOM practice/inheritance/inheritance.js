
class animal {
    constructor(){
       console.log("parent animal");
    }
}

class cat extends animal{
  constructor(){
   super();
   console.log("cat is eating chicken");
  }
}
class dog extends cat{
    constructor(){
      super()
      console.log("dog habit is dig")
    }
}
class cow extends dog{
    constructor(){
   super();
   console.log("cow is eating gross");
    }
}
let de = new cow();
console.log(de)

