      //Get user input
      var userBirth, signZodiac;
      userBirth = prompt("Please enter your birthday. MM/DD").split(" ")

      //Aries
      if (userBirth[0] == "March" && userBirth[1] >= 21 || userBirth[0] == "April" && userBirth[1] <= 19){
        signZodiac = "ARIES";
        document.write("<img src='images/aries.jpg' id='aries'>");
      //Taurus
      } else if (userBirth[0] == "April" && userBirth[1] >= 20 || userBirth[0] == "May" && userBirth[1] <= 20) {
        signZodiac = "TAURUS";
        document.write("<img src='images/taurus.jpg' id='taurus'>");
      //Gemini
      } else if (userBirth[0] == "May" && userBirth[1] >= 21 || userBirth[0] == "June" && userBirth[1] <= 20) {
        signZodiac = "GEMINI";
        document.write("<img src='images/gemini.jpg' id='gemini'>");
      //Cancer
      } else if (userBirth[0] == "June" && userBirth[1] >= 21 || userBirth[0] == "July" && userBirth[1] <= 22) {
        signZodiac = "CANCER";
        document.write("<img src='images/cancer.jpg' id='cancer'>");
      //Leo
      } else if (userBirth[0] == "July" && userBirth[1] >= 23 || userBirth[0] == "August" && userBirth[1] <= 22) {
        signZodiac = "LEO";
        document.write("<img src='images/leo.jpg' id='leo'>");
      //Virgo
      } else if (userBirth[0] == "August" && userBirth[1] >= 23 || userBirth[0] == "September" && userBirth[1] <= 22) {
        signZodiac = "VIRGO";
        document.write("<img src='images/virgo.jpg' id='virgo'>");
      //Libra
      } else if (userBirth[0] == "September" && userBirth[1] >= 23 || userBirth[0] == "October" && userBirth[1] <= 22) {
        signZodiac = "LIBRA";
        document.write("<img src='images/libra.jpg' id='libra'>");
      //Scorpio
      } else if (userBirth[0] == "October" && userBirth[1] >= 23 || userBirth[0] == "November" && userBirth[1] <= 21) {
        signZodiac = "SCORPIO";
        document.write("<img src='images/scorpio.jpg' id='scorpio'>");
      //Sagittarius
      } else if (userBirth[0] == "November" && userBirth[1] >= 22 || userBirth[0] == "December" && userBirth[1] <= 21) {
        signZodiac = "SAGITTARIUS"; 
        document.write("<img src='images/sagittarius.jpg' id='sagittarius'>");
      //Capricorn
      } else if (userBirth[0] == "December" && userBirth[1] >= 22 || userBirth[0] == "January" && userBirth[1] <= 19) {
        signZodiac = "CAPRICORN";
        document.write("<img src='images/capricorn.jpg' id='capricorn'>");
      //Aquarius
      } else if (userBirth[0] == "January" && userBirth[1] >= 20 || userBirth[0] == "February" && userBirth[1] <= 18) {
        signZodiac = "AQUARIUS";
        document.write("<img src='images/aquarius.jpg' id='aquarius'>");
      //Pisces
      } else if (userBirth[0] == "February" && userBirth[1] >= 19 || userBirth[0] == "March" && userBirth[1] <= 20) {
        signZodiac = "PISCES";
        document.write("<img src='images/pisces.jpg' id='pisces'>");
      }
    
      //Show sign
      alert("You are a " + signZodiac);
