const e1Btn = document.querySelector(".e1-btn");
const e2Btn = document.querySelector(".e2-btn");
const e3Btn = document.querySelector(".e3-btn");
const e4Btn = document.querySelector(".e4-btn");
const e5Btn = document.querySelector(".e5-btn");
const nomInput = document.querySelector(".nom input");
const nom2Input = document.querySelector("input[id='nom2']");
const cognomInput = document.querySelector("input[id='cognom']");
const emailInput = document.querySelector(".email textarea");

e1Btn.addEventListener("click", function(){
    const nom = nomInput.value;
    const arrayNom = nom.toUpperCase().split("");
    const e1Ul = document.querySelector(".e1 ul");
    e1Ul.textContent = "";
    for (let l of arrayNom){
        console.log(l);
        const newLi = document.createElement("li");
        newLi.textContent = l;
        e1Ul.append(newLi);
    }
})
e2Btn.addEventListener("click", function(){
    const arrayNom = nomInput.value.toUpperCase().split("");
    const e2Ul = document.querySelector(".e2 ul");
    e2Ul.textContent = "";
    for (let l of arrayNom){
        let resultat="";
        if (!isNaN(l)){
            resultat=`Els noms de persones no contenen el número: ${l}`;
        } else if (["A", "I", "U", "E", "O"].includes(l)){
            resultat = `He trobat la VOCAL: ${l}`;
        } else {
            resultat = `He trobat la CONSONANT: ${l}`;
        }
        console.log(resultat);
        const newLi = document.createElement("li");
        newLi.textContent = resultat;
        e2Ul.append(newLi);
    }
})
e3Btn.addEventListener("click", function(){
    const arrayNom = nomInput.value.toUpperCase().split("");
    const e3Ul = document.querySelector(".e3 ul");
    e3Ul.textContent = "";

    let countMap = new Map();
    for (letter of arrayNom){
        if (countMap.has(letter)){
            let newValue = countMap.get(letter)+1;
            countMap.set(letter, newValue);
        } else {
            countMap.set(letter, 1);
        }
    }
    console.log(countMap);
    for (let item of countMap){
        console.log(item);
        const newLi = document.createElement("li");
        newLi.textContent = `${item[0]} ----- ${item[1]}`;
        e3Ul.append(newLi);
    }
})

e4Btn.addEventListener("click", function(){
    const arrayNom2 = nom2Input.value.toUpperCase().split("");
    const arrayCognom = cognomInput.value.toUpperCase().split("");
    const divAnswer = document.querySelector(".c4 .answer");
    console.log("original", arrayNom2, arrayCognom);
    const newArray = arrayNom2.concat(" ", arrayCognom);
    console.log(newArray);
    const h3 = document.createElement("h3");
    divAnswer.append(h3);
    h3.textContent = newArray;
})

e5Btn.addEventListener("click", function(){
    const e5Ul = document.querySelector(".e5 ul");
    e5Ul.textContent = "";
    const str = emailInput.value;
    const condition = /[a-zA-ZÀ-ÿ\u00f1\u00d10-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-ZÀ-ÿ\u00f1\u00d10-9-]+(?:\.[a-zA-ZÀ-ÿ\u00f1\u00d10-9-]+)*/g;
    let emails = str.match(condition);
    console.log(emails);

    let resultat = [];
    for (let email of emails){
        email = email.toLowerCase();
        let varidar = resultat.includes(email);
        if (!varidar){
            resultat.push(email);
        }
    }
    console.log(resultat);
    
    for (let email of resultat){
        console.log(email);
        const newLi = document.createElement("li");
        newLi.textContent = email;
        e5Ul.append(newLi);
    }
})