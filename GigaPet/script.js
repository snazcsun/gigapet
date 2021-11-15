$(function() { // Makes sure that your function is called once all the DOM elements of the page are ready to be used.
    
    // Called function to update the name, happiness, and weight of our pet in our HTML
    checkAndUpdatePetInfoInHtml();
  
    // When each button is clicked, it will "call" function for that button (functions are below)
    $('.treat-button').click(clickedTreatButton);
    $('.play-button').click(clickedPlayButton);
    $('.exercise-button').click(clickedExerciseButton);
    $('.consume-button').click(clickedConsumeButton);
  

  
    
  })
  
    // Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
    var pet_info = {name:"My Pet Name", weight:"??", happiness:"??", willpower:"??"};
    pet_info["name"] = "Cho-gath";
    pet_info["weight"] = 400;
    pet_info["happiness"] = 20;
    pet_info["willpower"] = 30;
  
    function clickedTreatButton() {
      // Increase pet happiness
      pet_info["happiness"] += 10;
      // Increase pet weight
      pet_info["weight"] += 20;
      // Treat sound message
      var message = document.getElementById("treat.mp3");
      message.play();
      // Treat text message
      document.getElementById("treat").style.display = "block";
      setTimeout(() => {
        document.getElementById("treat").style.display = "none";
      }, 3500);
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedPlayButton() {
      // Increase pet happiness
      pet_info["happiness"] += 5;
      // Decrease pet weight
      pet_info["weight"] -= 10;
      // Play sound message
      var message = document.getElementById("play.mp3");
      message.play();
      // play text message
      document.getElementById("play").style.display = "block";
      setTimeout(() => {
        document.getElementById("play").style.display = "none";
      }, 3500);
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedExerciseButton() {
      // Decrease pet happiness
      pet_info["happiness"] -= 20;
      // Decrease pet weight
      pet_info["weight"] -= 25;
      // Decrease pet willpower
      pet_info["willpower"] -= 10;
      // Decrease pet size
      if(pet_info["willpower"] < 100 ){
        resetSize();
      }
      // exercise sound message
      var message = document.getElementById("exercise.mp3");
      message.play();
      // exercise text message
      document.getElementById("exercise").style.display = "block";
      setTimeout(() => {
        document.getElementById("exercise").style.display = "none";
      }, 3500);
      checkAndUpdatePetInfoInHtml();
    }

    function clickedConsumeButton() {
      // Increase pet willpower
      pet_info["willpower"] += 10;
      // Increase pet weight
      pet_info["weight"] += 10;
      // Increase pet happiness
      pet_info["happiness"] += 5;
      // Increase pet size
      if(pet_info["willpower"] > 100 && pet_info["willpower"] < 250){
        growSize();
      }
      // consume sound message
      var message = document.getElementById("consume.mp3");
      message.play();
      // consume text message
      document.getElementById("consume").style.display = "block";
      setTimeout(() => {
        document.getElementById("consume").style.display = "none";
      }, 3500);
      checkAndUpdatePetInfoInHtml();
    }
    //Increase pet size
    function growSize(){
      img = document.getElementById("size");
      img.style.transform += "scale(1.015)";
    }
    //Reset pet size
    function resetSize(){
      img = document.getElementById("size");
      img.style.transform = "scale(1)";
    }
  
    function checkAndUpdatePetInfoInHtml() {
      checkWeightAndHappinessBeforeUpdating();  
      updatePetInfoInHtml();
    }
    
    function checkWeightAndHappinessBeforeUpdating() {
      // Add conditional so if weight is lower than zero, set it back to zero
      if(pet_info["weight"] < 0){
        pet_info["weight"] = 0;
      }
      if(pet_info["happiness"] < 0){
        pet_info["happiness"] = 0;
      }
      if(pet_info["willpower"] < 0){
        pet_info["willpower"] = 0;
      }
    }
    
    // Updates your HTML with the current values in your pet_info object
    function updatePetInfoInHtml() {
      $('.name').text(pet_info['name']);
      $('.weight').text(pet_info['weight']);
      $('.happiness').text(pet_info['happiness']);
      $('.willpower').text(pet_info['willpower']);
    }
  

    //pet-image
    //https://www.renderhub.com/vipkat/chogath-from-league-of-legends/chogath-from-league-of-legends-01.jpg

    //background
    //https://static.wikia.nocookie.net/leagueoflegends/images/7/7a/Void_An_Unknowable_Power.jpg/revision/latest/scale-to-width-down/1920?cb=20180515055554

    //Cho'gath sound board
    //https://www.101soundboards.com/boards/28229-gentleman-chogath-league-of-legends
