const API_URL = "https://script.google.com/macros/s/AKfycbx_QLQB_T1mat-FIi6bvPDjG6drbzJOL7lRj17kCa_ijuFLcWNhuKLOUqmV4xv1EaHUVQ/exec";

const pointsElement = document.getElementById("score");
const ranking = document.getElementById("rank");

//Member Points
const capPts = document.getElementById("cap");
const secPts = document.getElementById("sec");
const treaPts = document.getElementById("trea");
const res1Pts = document.getElementById("res1");
const res2Pts = document.getElementById("res2");
const res3Pts = document.getElementById("res3");

// MEMBERS OF THE BARANGAY
const cap = document.getElementById("name_kap");
const sec = document.getElementById("name_sec");
const trea = document.getElementById("name_trea");
const res1 = document.getElementById("name_res1");
const res2 = document.getElementById("name_res2");
const res3 = document.getElementById("name_res3");

// Single fetch call to update all elements
fetch(API_URL)
    .then(res => {
      if (!res.ok) throw new Error(`Network response was not ok: ${res.status}`);
      return res.json();
    })
    .then(data => {
        // Update member names
        cap.textContent = data.cCapM;
        sec.textContent = data.cSecM;
        trea.textContent = data.cTreaM;
        res1.textContent = data.cRes1M;
        res2.textContent = data.cRes2M;
        res3.textContent = data.cRes3M;

        // Update points
        if (pointsElement && typeof data.ptsC !== "undefined") {
          pointsElement.textContent = data.ptsC;
        }

        // Update rankings
        if (ranking && typeof data.posC !== "undefined") {
          ranking.textContent = data.posC;
        }

        // Update member points
        if (capPts) {
          capPts.textContent = data.cCap + " Points";
          secPts.textContent = data.cSec + " Points";
          treaPts.textContent = data.cTrea + " Points";
          res1Pts.textContent = data.cRes1 + " Points";
          res2Pts.textContent = data.cRes2 + " Points";
          res3Pts.textContent = data.cRes3 + " Points";
        }
      }
    )
    .catch(err => {
      console.error("Error fetching data:", err);
        cap.textContent ="Error :<";
        sec.textContent = "Error :<";
        trea.textContent = "Error :<";
        res1.textContent = "Error :<";
        res2.textContent ="Error :<";
        res3.textContent ="Error :<";
        if (pointsElement) pointsElement.textContent = "Error";
        if (ranking) ranking.textContent = "Error";
        if (capPts) {
          capPts.textContent = "Points can't be loaded :<";
          secPts.textContent = "Points can't be loaded :<";
          treaPts.textContent = "Points can't be loaded :<";
          res1Pts.textContent = "Points can't be loaded :<";
          res2Pts.textContent = "Points can't be loaded :<";
          res3Pts.textContent = "Points can't be loaded :<";
        }
    });

    function updateCountdown() {
    const futureDate = new Date('April 15, 2026 23:59:59');
    const now = new Date();
    let diff = futureDate - now;

    if (diff < 0) {
        document.getElementById('message').textContent = 'Challenge completed. Awarding: April 18, 2025.';
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff -= days * (1000 * 60 * 60 * 24);
    const hours = Math.floor(diff / (1000 * 60 * 60));
    diff -= hours * (1000 * 60 * 60);
    const minutes = Math.floor(diff / (1000 * 60));
    diff -= minutes * (1000 * 60);
    const seconds = Math.floor(diff / 1000);

    document.getElementById('message').textContent = `${days} days | ${hours} hours | ${minutes} minutes | ${seconds.toString().padStart(2, '0')} seconds remaining to earn points!`;
}
setInterval(updateCountdown, 1000);
updateCountdown();