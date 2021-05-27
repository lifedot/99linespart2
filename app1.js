document.addEventListener("DOMContentLoaded",function(){
  let addButton = document.createElement("button");
  addButton.id = "button";
  addButton.innerText = "Sing!";
  addButton.addEventListener("click", function(){

   
   let friends = ["Goofy", "Mickey", "Daisy", "Minnie", "Simba"];
   
   for (let i = 0; i < friends.length; i++) {
    let newDiv = document.createElement("div");
    newDiv.className = "friend";
    let friend = document.createElement("h3");
    friend.innerText = friends[i];
    newDiv.appendChild(friend);





     for (j = 99; j > 0; j--) {
       
       
       if (j !== 1 && j!==2) {
         let song = document.createElement("p");

         song.innerText = (j + " lines of code in the file, " + j + " lines of code. " + friends[i] + " strikes one out, clears it all out, "  + (j-1) + " more lines of code in the file.");
        newDiv.appendChild(song);  
        } else if (j==2) {
          let song = document.createElement("p");
          song.innerText = (j + " lines of code in the file, " + j + " lines of code. " + friends[i] + " strikes one out, clears it all out, " +(j-1)+ " more line of code in the file.");
           newDiv.appendChild(song); 
          } else {
              
            let song = document.createElement("p");
            song.innerText = (j + " line of code in the file, " + j + " line of code. " + friends[i] + " strikes one out, clears it all out, no more lines of code in the file");
            newDiv.appendChild(song);  
          }
            }
            document.body.appendChild(newDiv);
            
          }
          
          
        })
        
        document.body.appendChild(addButton);
      })