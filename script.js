const form= document.querySelector('form')
const res = document.querySelector('.result');

form.addEventListener("submit",(e)=>{
   e.preventDefault();

   const h = parseInt(document.querySelector('#height').value);
   const w = parseInt(document.querySelector('#weight').value);
   

   if(h===''||h<=0 || isNaN(h)){
      res.innerHTML=`you enter ${h},please enter valid height`;
   }
   else if(w===''||w<=0 || isNaN(w)){
      res.innerHTML=`you enter ${w},please enter valid weight`;
   }
   else{
       const bmi = (w / ((h / 100) ** 2)).toFixed(2);
       res.innerHTML=`result:${bmi}`;
   }


})



