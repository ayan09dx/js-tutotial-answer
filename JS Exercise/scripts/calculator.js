var operation='+';
var resultArray=[];

function Logout(){
    sessionStorage.clear();
    window.location.href='./login.html';
}

function checkLoginStatus(){
    let status=sessionStorage.getItem('loggedin');
    if(!status){
        window.location.href='./login.html';
    }
    else{
        refreshTable();
    }
}

function handleOperationClick(op){
 operation=op;
 document.getElementById('operation').innerHTML=op;
 document.querySelector('button.selected').classList.remove('selected');
 if(op==='+'){
    document.getElementById('plus').classList.add('selected');
 }
 else if(op==='-'){
    document.getElementById('minus').classList.add('selected');
 }
 else if(op==='*'){
    document.getElementById('multiply').classList.add('selected');
 }
 else if(op==='/'){
    document.getElementById('divide').classList.add('selected');
 }
}


function handleCalculation(){
    let num1=document.getElementById('number1');
    let num2=document.getElementById('number2');
    let num1error=document.getElementById('number1error');
    let num2error=document.getElementById('number2error');
    if(num1.value===''){num1error.style.display='block'}
    if(num2.value===''){num2error.style.display='block'}
    else{
        Calculate(Number(num1.value),Number(num2.value));
    }
}

function resetError(){
    let num1=document.getElementById('number1');
    let num2=document.getElementById('number2');
    let num1error=document.getElementById('number1error');
    let num2error=document.getElementById('number2error');
    let result=document.getElementById('result');
    result.innerHTML='';
    if(!num1.value==''){
        num1error.style.display='none';
    }
    if(!num2.value==''){
        num2error.style.display='none';
    }
}

function Calculate(num1,num2){
 let resultDiv=document.getElementById('result');
 let date=new Date();
 let result;
 let operationString='';

 date=date.toLocaleString();
   
    if(operation==='+'){
        operationString=num1+ "+" +num2;
        result=num1+num2;
        handleHistoryDataSave(date,operationString,result);
        resultDiv.innerHTML=result;
        refreshTable();
     }
     else if(operation==='-'){
        operationString=num1+ "-" +num2;
        result=num1-num2;
        handleHistoryDataSave(date,operationString,result);
        resultDiv.innerHTML=result;
        refreshTable();
     }
     else if(operation==='*'){
        operationString=num1+ "x" +num2;
        result=num1*num2;
        handleHistoryDataSave(date,operationString,result);
        resultDiv.innerHTML=result;
        refreshTable();
     }
     else if(operation==='/'){
        operationString=num1+ "/" +num2;
        result=num1/num2;
        handleHistoryDataSave(date,operationString,result);
        resultDiv.innerHTML=result;
        refreshTable();
     }
}


function handleHistoryDataSave(date,operationString,result){
    let resultobj={};
    resultobj.date=date;
    resultobj.operation=operationString;
    resultobj.result=result;
    resultArray.push(resultobj);
    let json=JSON.stringify(resultArray);
    localStorage.setItem('resulthistory',json);
}


function refreshTable(){
    let tbody=document.getElementById('tabledata');
    let history=localStorage.getItem('resulthistory');
    history=JSON.parse(history);
    
    if(history){
        let length=history.length;
        let tabledata='';
        for(i=0;i<length;i++){
            let x='<tr><td>'+history[i].date+'</td><td>'+
            history[i].operation+'</td><td>'+history[i].result+'</td></tr>'
            tabledata=tabledata+x;
        }
        tbody.innerHTML=tabledata;
    }
    else{
        let x='<tr><td colspan=3>You have not made any calculation yet!</td></tr>';
        tbody.innerHTML=x;
    }
}