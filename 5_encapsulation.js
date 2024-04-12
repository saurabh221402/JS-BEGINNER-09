class BankAccount{
    name;
    #balance;
    constructor(name,amount){
        this.name=name;
        this.#balance=amount;
    }

    // set setBalance(amount){
    //     this.#balance=amount;
    // }
    // get getBalance(){
    //     console.log(this.#balance);
    // }
//set get method name can be same
    set balance(amount){
        this.#balance=amount;
    }
    get balance(){
        console.log(this.#balance);
    }

    //making private methods
    #privateLoan=function(amount){  //private method of class BankAccount
        this.#balance+=amount
        console.log('loan passed private of :',+amount);
    }
    loan=function(amount){      //public method of class BankAccount use to access private method
        this.#privateLoan(amount);
    }
}
let obj=new BankAccount("saurabh",1000);
//console.log(obj.#balance);//can not access private field (error)


//when get set method name are different
// obj.setBalance=300;
// console.log(obj.getBalance) //this use get method access private field

obj.balance=300;
console.log(obj.balance);

//obj.#priavteLoan(500);      SyntaxError: Cannot reference undeclared private names: "#priavteLoan"
obj.loan(500);
console.log(obj);