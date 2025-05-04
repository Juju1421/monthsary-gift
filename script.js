function checkPin() {
    const pin = document.getElementById("pin").value;
    if (pin === "080520") {
      window.location.href = "timer.html";
    } else {
      alert("Wrong passcode hehe try again ♡");
    }
  }
  
  function goToGallery() {
    window.location.href = "gallery.html";
  }
  
  function goToLetter() {
    window.location.href = "loveletter.html";
  }
  
  // Countdown from August 5, 2020
  document.addEventListener("DOMContentLoaded", () => {
    const countEl = document.getElementById("count");
    const yrsEl = document.getElementById("years-days");
    if (!countEl && !yrsEl) return;
  
    const startDate = new Date("2020-08-05T00:00:00");
    setInterval(() => {
      const now = new Date();
      const diff = now - startDate;
      const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
      const days = Math.floor((diff / (1000 * 60 * 60 * 24)) % 365);
      const hours = now.getHours();
      const mins = now.getMinutes();
      const secs = now.getSeconds();
  
      if (countEl) {
        countEl.innerHTML = `
          <span>${years} Years</span>
          <span>${days} Days</span>
          <span>${hours} Hours</span>
          <span>${mins} Minutes</span>
          <span>${secs} Seconds</span>`;
      }
      if (yrsEl) {
        yrsEl.innerText = `${years} yrs & ${days} days`;
      }
    }, 1000);
  });

  function checkPin() {
    const pin = document.getElementById("pin").value;
    if (pin === "080520") {
      const audio = document.getElementById("bg-music");
      audio.play(); // <-- trigger music on interaction
      window.location.href = "timer.html";
    } else {
      alert("Wrong passcode hehe try again ♡");
    }
  }
  

  

  function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 2 + 3) + "s";
  
    document.getElementById("heart-container").appendChild(heart);
  
    setTimeout(() => {
      heart.remove();
    }, 4000);
  }
  
  setInterval(createHeart, 500); // every half second
  

