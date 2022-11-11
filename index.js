document.addEventListener("DOMContentLoaded", ready);

function ready() {
    let hamb = document.getElementById("hamb-icon");
    let over = document.getElementById("overlay");
    let x = document.getElementById("x-icon");
    let nav = document.getElementById("nav");



    show = () => {
        nav.classList.add("show");
        nav.classList.remove("hide");
        over.classList.add("overlay");
        over.addEventListener("click", hide);
    }
      
    hide = () => {
        nav.classList.add("hide");
        nav.classList.remove("show");
        over.classList.remove("overlay");
    }



    hamb.addEventListener("click", show);
    x.addEventListener("click", hide);


    //nav 

    let features = document.getElementById("features");
    let featuresDrop = document.getElementById("featuresDrop");
    featuresDrop.style.display = "none";
    displayFeatures = () => {
        if (featuresDrop.style.display == "none") {
            featuresDrop.style.display = "block";
        } else {
            featuresDrop.style.display = "none";
        }
        
    }

    features.addEventListener("click", displayFeatures);

    //
    let company = document.getElementById("company");
    let companySub = document.getElementById("mobile-company-sub");
    companySub.style.display = "none";
    displayFeatures = () => {
        if (companySub.style.display == "none") {
            companySub.style.display = "block";
        } else {
            companySub.style.display = "none";
        }
        
    }

    company.addEventListener("click", displayFeatures);


}