let submitBtn = document.querySelector("#submit-btn")

submitBtn.addEventListener('click', function (e) {

    let name = document.querySelector("#exampleInputName").value;

    if (name == "Akhi") {
        document.querySelector(".ask").style.display = "block";
        document.querySelector(".form-tbl").style.display = "none";
        
    }
    else {
        console.log("jaaaw r ktha nai");
    }
    e.preventDefault()
})



let yesBtn = document.querySelector("#yes-btn")
yesBtn.addEventListener("click", function () {
    document.querySelector(".proposed").style.display = "block";
    document.querySelector(".ask").style.display = "none";

})

let noBtn = document.querySelector("#no-btn")
noBtn.addEventListener("click", function () {
    document.querySelector(".proposed-no").style.display = "block";
    document.querySelector(".ask").style.display = "none";

})