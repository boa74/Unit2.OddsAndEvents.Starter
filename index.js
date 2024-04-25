// TODO: this file! :)
// document.getElementById("addButton").addEventListener("click",addNumArray)

// let addArray=[];

// function addNumArray(){
//   const numValue = document.getElementById("number").value;
//   addArray.push(numValue);
//   document.getElementById("numOutput").innerHTML=addArray;

// };



const addArray=[];
const newArray=[];
const evenArray=[];
const oddArray=[];
 
function addNumArray(){
document.getElementById("addButton").addEventListener("click",()=>{
    //when the user push the button, it makes an array with every number each time
    const numValue = document.getElementById("number").value;//get the value from the id
    addArray.push(numValue);//make an array
    document.getElementById("numOutput").innerHTML=addArray;//connect result of js to the html body
   
  })
};

addNumArray();

function sort1(){

    document.getElementById("sortOne").addEventListener("click",()=>{
        //remove the first element of the array in numberBank 
        document.getElementById("numOutput").innerHTML=addArray.slice(1,addArray.length);
        //make a condition with moduler
        
        if(addArray[0]%2===0){
           evenArray.push(addArray[0]);
           document.getElementById("evenNums").innerHTML=evenArray;
        }else{
            oddArray.push(addArray[0]);
            document.getElementById("oddNums").innerHTML=oddArray;
        }
 
        addArray = addArray.shift();
        
    })
};
sort1();


 function sortAll(){

   document.getElementById("sortAll").addEventListener("click",()=>{
    
        
       document.getElementById("numOutput").innerHTML=[];
        const sortAllNum = addArray.slice(0,addArray.length);
        console.log(sortAllNum);
        for(let i=0;i<sortAllNum.length;i++){
        
             if(addArray[i] % 2 === 0){
            evenArray.push(sortAllNum[i])
            document.getElementById("evenNums").innerHTML=evenArray;


            }else{
               oddArray.push(sortAllNum[i])
               document.getElementById("oddNums").innerHTML=oddArray;

         }
     }
       
      });


 };
 sortAll()