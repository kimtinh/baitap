function getInfo(event) {
    console.clear();
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log("name: ", name);
    console.log("email: ", email);
    console.log("password: ", password);
    const reg = /^\w+@[a-zA-Z]{3,}\.com$/i;
  
    if (!name) {
      document.getElementById("errorname").innerHTML = "Wrong Name";
      document.getElementById("name").style.borderColor = "#dc3545";
    } else {
      document.getElementById("errorname").innerHTML = "";
    }
    if (reg.test(email) === false) {
      console.log(reg.test(email));
      document.getElementById("erroremail").innerHTML = "Wrong Email";
      document.getElementById("email").style.borderColor = "#dc3545";
    } else {
      console.log(reg.test(email));
      document.getElementById("erroremail").innerHTML = "";
    }
    if (password.length < 8) {
      document.getElementById("errorpass").innerHTML =
        " Password is at least 8 characters";
      document.getElementById("password").style.borderColor = "#dc3545";
    } else {
      document.getElementById("errorpass").innerHTML = "";
    }
  }
  
  // slide
  
  function showSlides(num) {
    let s = document.querySelector(".slide-cover");
    let e = document.querySelector(".slide-6");
  
    if (num === 1) {
      s.style.transitionDuration = "1s";
      s.style.transform = `translateX(-50%)`;
      setTimeout(() => {
        s.style.transitionDuration = "0s";
        s.style.transform = `translateX(0%)`;
        s.appendChild(e);
      }, 1000);
    }
  
    if (num === -1) {
      if (s.style.transform === `translateX(0%)` || !s.style.transform) {
        s.style.transitionDuration = "0s";
        s.style.transform = `translateX(-50%)`;
      }
      setTimeout(() => {
        s.style.transitionDuration = "1s";
        s.style.transform = `translateX(0%)`;
      }, 0);
      // s.removeChild(e);
      s.appendChild(e);
    }
  }
  
  
  