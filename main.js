
      const regex = /^(?:\d{3})([-])\d{3}\1\d{3,4}$/;
      let phone = document.getElementById("phone");
      let name = document.getElementById("name");
      let btnSignIn = document.getElementById("btnSignIn");
            
      
      function phoneNumber() {
        if (
          !regex.test(phone.value) ||
          name.value.length < 0 ||
          name.value.length == " "
        ) {
          alert("Invalid Name or Phone Number!");
        } else {
          alert("Succesfully!");
          document.getElementById("name1").innerHTML += name.value;
          document.getElementById("phoneNumber").innerHTML += phone.value;
          name.value = "";
          phone.value = "";
        }
      }

      // time

      let isStop = false;
      let timeRun;
      let realTime;
      let time11 = document.getElementById("time11");
      time11.innerHTML = "00:00:00";

      let newTime = new Intl.DateTimeFormat("km-KH", {
        timeZone: "Asia/Phnom_Penh",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });

      let resetTime = function () {
        time11.innerHTML = "00:00:00";
        clearInterval(timeRun);
        isStop = false;
        time11.classList.add("animate-scale");
      };

      let stopTime = function () {
        if (isStop) {
          clearInterval(timeRun);
          isStop = false;
        }
      };

      function StartTime() {
        realTime = function () {
          let date = new Date();
          time11.innerHTML = newTime.format(date);
        };
        timeRun = setInterval(realTime, 1000);
        isStop = true;
        time11.classList.remove("animate-scale");
      }