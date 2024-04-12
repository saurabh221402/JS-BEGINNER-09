//This is inheritance work in class

// class BankAccount{      //this is your parent class
//     name;
//     balance;
//     acc_no;
//     constructor(name,balance=0)
//     {
//         this.name=name;
//         this.acc_no=Date.now();
//         this.balance=balance;
//     }
// }

// class Saving_acc extends BankAccount{       //fetch the properties of parent class BankAccount and add to child class Saving_acc using inheritence
//     constructor(name,balance)               //this is constructor of child class also having parameter of linked parent class
//     {
//         super(name,balance);                //super keyword help to link with constructor of parent class
//         this.balance_limit=10000;
//     }
//     personal_loan=(amount)=>{
//         console.log("loan pass of amount "+amount);
//         this.balance+=amount;
//     }
// }

// class Current_acc extends BankAccount{       //fetch the properties of parent class BankAccount and add to child class current_acc using inheritence
//     constructor(name,balance)               //this is constructor of child class also having parameter of linked parent class
//     {
//         super(name,balance);                //super keyword help to link with constructor of parent class
//         this.balance_limit=50000;
//     }
//     bussiness_loan(amount){
//         console.log("loan pass of amount "+amount);
//         this.balance+=amount;
//     }
// }

// let obj=new Saving_acc("saurabh",100);
// console.log(obj);
// obj.personal_loan(10000);
// console.log(obj.balance);

// let obj2=new Current_acc("ravi",1000);
// console.log(obj2);
// obj2.bussiness_loan(50000);
// console.log(obj2.balance);



//This is how inheritance work in constructor function

function BankAccount(name,balance=0){
    this.name=name;
    this.acc_no=Date.now();
    this.balance=balance;

    this.deposit=function(amount){
        this.balance+=amount;
    }
}
BankAccount.prototype.withdraw=function(amount){        //we define withdraw method of BankAccount in prototype property
    this.balance-=amount;
}

function Saving_acc(name,balance=0)
{
    //below method is called constructor linking of parent class to child class
    BankAccount.call(this,name,balance);//this method is to inherite all properties and method inside Parent function BankAccount(exclude:prototype property)
    this.balanceLimit=100000;

}
//this method is use to link prototype properties of parent class to child class 
Saving_acc.prototype = Object.create(BankAccount.prototype); 

let obj=new Saving_acc("saurabh",100);
console.log(obj);