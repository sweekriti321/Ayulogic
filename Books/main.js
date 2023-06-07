let arr = [];
function fetchInfo() {
  fetch(
    "https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json"
  )
    .then((response) => {
      return response.json();
    })
    .then((info) => {
      // console.log(info);
      callByCountry(info, "india");
     
    })
    .catch((error) => {
      console.log("Error:", error);
    });
}
fetchInfo();
 

function callByCountry(info, countryName) {
  const countryinlowercase = countryName.toLowerCase();

  let countryInfo = [];
  
   
     info.forEach(element => {
         countryInfo.push(element.country);

     });
     countryInfo = [...new Set(countryInfo)];
     const countryObj = {};
     
     countryInfo.forEach((items)=>{
      let arr =[];
       info.forEach((element =>{
        
        if(element.country == items){
          
          
          arr.push(element);
        }

       }))
       countryObj[items] = arr;
     })
     
      console.log(countryObj);
     
    }
    // Object.keys(info).forEach((element) => {
    //   // const element = info[element];
    //   const country = element.country.toLowerCase();
  
    //   if (country === countryinlowercase) {
    //     const countryObj = {};
    //     countryObj[element.country] = element;
    //     Object.assign(countryInfo, countryObj);
    //   }
  
    // console.log(countryObj);
   

 
  


  // const matchingcountriesname = info.filter((element)=>{
  //   const desiredcountry = element.country.toLowerCase();
  //   return desiredcountry.includes(countryinlowercase);
  // })

  // if(matchingcountriesname.length>0){
  //   matchingcountriesname.forEach(element => {
  //     console.log(element.author);
  //     console.log(element.country);
  //     console.log(element.imageLink);
  //     console.log(element.language);
  //     console.log(element.link);
  //      console.log(element.pages);
  //      console.log(element.title);
  //      console.log(element.year);
  //   });
  // }
  // else{
  //   console.log("No matching countries found")
  // }

