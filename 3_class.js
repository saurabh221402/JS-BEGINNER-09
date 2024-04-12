class BankAccount{
    name;
    acc_no;
    balance;
    constructor(name,balance=0)
    {
        this.name=name;
        this.acc_no=Date.now();
        this.balance=balance;
    }

  //  deposit=(amount)=>{} when we make arrow function then it note store in prototype
  //but below method define inside prototype property of BankAccout class
    deposit(amount){
        this.balance+=amount;
    }
    withdraw(amount){
        this.balance-=amount;
    }
}
//No requirement to handle prototyping of methods externally when we use class instead of constructor function
// BankAccout.prototype.deposit(amount)
// {
//     this.balance+=amount;
// }
// BankAccout.prototype.withdraw(amount)
// {
//     this.balance-=amount;
// }

//registration function
let acc=[];
let register=document.getElementById("submit");
let Cname=document.getElementById("uN");
let balance=document.getElementById("balance");

register.addEventListener('click',(e)=>{
    e.preventDefault();
    let newACC= new BankAccount(Cname.value,+balance.value);
    acc.push(newACC);
    console.log(acc);
}) 
//deposit function
let deposit=document.getElementById("deposit");
let accNo=document.getElementById('D_acc');
let amount=document.getElementById('D_amm')
deposit.addEventListener('click',(e)=>{
    e.preventDefault();
    let obj=acc.find((x)=>{
        if(x.acc_no=== +accNo.value)
        {
            return x;
        }
    })
    obj.deposit(+amount.value); 
    console.log(arr);
})
//withdrawal function
let withdraw=document.getElementById("withdraw");
let W_accNo=document.getElementById('W_acc');
let W_amount=document.getElementById('W_amm')
withdraw.addEventListener('click',(e)=>{
    e.preventDefault();
    let obj=acc.find((x)=>{ 
        if(x.acc_no=== +W_accNo.value)
        {
            return x;
        }
    })
    if(obj.balance-W_amount.value<0)
    {
        alert("insufficient balance");
    } 
    else
    obj.withdraw(+W_amount.value); 
    console.log(arr);
})
//check balance
let view_acc=document.getElementById('view_acc')
let userName=document.getElementById('username')
let userbalance=document.getElementById('userbalance')
let checkBalance=document.getElementById('checkBalance')

checkBalance.addEventListener('click',(e)=>{
    e.preventDefault();
    let obj1=acc.find((x)=>{ 
        if(x.acc_no=== +view_acc.value)
        {
            return x;
        }
    }) 
    userName.innerText=obj1.name;
    userbalance.innerText=obj1.balance;
})