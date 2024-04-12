function BankAccount(name,balance=0)
{
    this.name=name;
    this.acc_no=Math.floor(100000 + Math.random()*1000);
    this.balance=balance;

    this.deposit=(amount)=>
    {
        this.balance+=amount;
    }
    this.withdraw=(amount)=>
    {
        this.balance-=amount;
    }
    
} 
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
        console.log(x.acc_no);
        if(x.acc_no=== +accNo.value)
        {
            return x;
        }
    })
    obj.deposit(+amount.value);
    console.log(acc);
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
    obj.withdraw(+W_amount.value);
    console.log(acc);
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
//print all account
