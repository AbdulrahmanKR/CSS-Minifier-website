
var fValue=document.getElementById("finalValue");

document.querySelector(".btn").addEventListener('click',()=>{
    var getValue=document.getElementById("textValue").value;
    var arr= getValue.split("\n");
    fValue.textContent="";
    var findex;
    var lindex;
    for(let i=0; i < arr.length ; i++){
        
        arr[i]=arr[i].trim();
        
        if(arr[i].startsWith("/*") && arr[i].endsWith("*/"))
             arr[i]="";    

        if (arr[i] == "\n")
                arr[i]="";

            fValue.textContent+=arr[i];
    }
    
    console.log(arr);
    
});
