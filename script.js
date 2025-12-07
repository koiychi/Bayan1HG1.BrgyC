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
        cap.textContent = data.aCapM;
        sec.textContent = data.aSecMM;
        trea.textContent = data.aTreaM;
        res1.textContent = data.aRes1M;
        res2.textContent = data.aRes2M;
        res3.textContent = data.aRes3M;

        // Update points
        if (pointsElement && typeof data.ptsA !== "undefined") {
          pointsElement.textContent = data.ptsA;
        }

        // Update rankings
        if (ranking && typeof data.posA !== "undefined") {
          ranking.textContent = data.posA;
        }

        // Update member points
        if (capPts) {
          capPts.textContent = data.aCap + " Points";
          secPts.textContent = data.aSec + " Points";
          treaPts.textContent = data.aTrea + " Points";
          res1Pts.textContent = data.aRes1 + " Points";
          res2Pts.textContent = data.aRes2 + " Points";
          res3Pts.textContent = data.aRes3 + " Points";
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
