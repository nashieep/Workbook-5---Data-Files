 kids = [
    { first : "Jefferson", last : "Plyers" },
   { first: "Janice", last: "Ray" },
    { first: "Zachary", last: "Westly" }
   ];
   //function buildFullName(arrayElement) {
      // return arrayElement.first + " " + arrayElement.last;
       // }
       //let namesList = kids.map(buildFullName);
      //let numElements = namesList.length;
        //for (let i = 0; i < numElements; i++) {
        //console.log(namesList[i]);
        // output matches image above
       //} 
   function buildFullName(arrayElement) {
        return arrayElement.first + " " + arrayElement.last;
        }
        function displayName(arrayElement) {
        console.log(arrayElement);
       }
        let namesList = kids.map(buildFullName);
        namesList.forEach(displayName);

