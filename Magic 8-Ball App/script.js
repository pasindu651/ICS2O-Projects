      /*Create Magic eight ball*/
      var canvas = document.getElementById("myCanvas");
      var ctx = canvas.getContext("2d");

      /*Create gradient*/
      var grd = ctx.createLinearGradient(7, 0, 200, 0);
      grd.addColorStop(0, "black");
      grd.addColorStop(1, "#545353");

      var grd = ctx.createLinearGradient(800, 0, 7, 0);
      grd.addColorStop(0, "black");
      grd.addColorStop(1, "#545353");

      /*First circle*/
      ctx.beginPath();
      ctx.arc(245, 250, 210, 0, 2 * Math.PI);
      ctx.fillStyle = grd;
      ctx.fill()

      /*Second circle*/
      ctx.beginPath();
      ctx.arc(245, 250, 110, 0, 2 * Math.PI);
      ctx.fillStyle = '#000000';
      ctx.fill()

      /*Triangle*/
      ctx.beginPath();
      ctx.moveTo(244.5,360);
      ctx.shadowBlur = 80;
      ctx.shadowColor = "blue";

      /*Base*/
      ctx.lineTo(343,200);
      ctx.lineTo(146,200);
      ctx.fillStyle = "blue";
      ctx.fill();

      /*Ask question*/
      userQuest = prompt("Please ask me a question. I shall give you the answer.");

      /*Generate random number*/
      randomNum = Math.floor(8 * Math.random() + 1);

      /*Pick random number*/
      if (randomNum == 1) {
        canvas.insertAdjacentHTML('beforebegin', "<p id='response'>It is certain.</p>");
      } else if (randomNum == 2) {
        canvas.insertAdjacentHTML('beforebegin', "<p id='response'>It is decidedly so.</p>");
      } else if (randomNum == 3) {
        canvas.insertAdjacentHTML('beforebegin', "<p id='response'>Very doubtful.</p>");
      } else if (randomNum == 4) {
        canvas.insertAdjacentHTML('beforebegin', "<p id='response'>My sources say no.</p>");
      } else if (randomNum == 5) {
        canvas.insertAdjacentHTML('beforebegin', "<p id='response'>You may rely on it.</p>");
      } else if (randomNum == 6) {
        canvas.insertAdjacentHTML('beforebegin', "<p id='response'>As I see it, yes.</p>");
      } else if (randomNum == 7) {
        canvas.insertAdjacentHTML('beforebegin', "<p id='response'>Signs point to yes.</p>");
      } else if (randomNum == 8) {
        canvas.insertAdjacentHTML('beforebegin', "<p id='response'>Cannot predict now.</p>");
      } 