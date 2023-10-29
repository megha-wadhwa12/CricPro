
// Accessing Images
var virenderImage = document.getElementById("virender-img")
var sachinImage = document.getElementById("sachin-img")
var gambhirImage = document.getElementById("gambhir-img")
var viratImage = document.getElementById("virat-img")
var dhoniImage = document.getElementById("dhoni-img")
var yuvrajImage = document.getElementById("yuvraj-img")

var sureshImage = document.getElementById("suresh-img")
var harbhajanImage = document.getElementById("harbhajan-img")
var zaheerImage = document.getElementById("zaheer-img")
var munafImage = document.getElementById("munaf-img")
var sreesanthImage = document.getElementById("sreesanth-img")

// Accessing names
var virender = document.getElementById("virender")
var sachin = document.getElementById("sachin")
var gambhir = document.getElementById("gambhir")
var virat = document.getElementById("virat")
var dhoni = document.getElementById("dhoni")
var yuvraj = document.getElementById("yuvraj")

var suresh = document.getElementById("suresh")
var harbhajan = document.getElementById("harbhajan")
var zaheer = document.getElementById("zaheer")
var munaf = document.getElementById("munaf")
var sreesanth = document.getElementById("sreesanth")

function display(a){
    a.style.display = "flex"
    a.onmouseleave=()=>{
        a.style.display = "none"
    }
}

virender.onclick=()=>display(virenderImage)
sachin.onclick=()=>display(sachinImage)
gambhir.onclick=()=>display(gambhirImage)
virat.onclick=()=>display(viratImage)
dhoni.onclick=()=>display(dhoniImage)
yuvraj.onclick=()=>display(yuvrajImage)

suresh.onclick=()=>display(sureshImage)
harbhajan.onclick=()=>display(harbhajanImage)
zaheer.onclick=()=>display(zaheerImage)
munaf.onclick=()=>display(munafImage)
sreesanth.onclick=()=>display(sreesanthImage)
