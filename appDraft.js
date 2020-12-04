"use strict"
// ---------- Variables ----------
const formHTML = {}
const formData = {}
var affichage ;
var clearButton ;
var resultat ;
// ---------- Fonctions ----------
function getData()
{
    formData.firstName = formHTML.firstName.value
    formData.lastName = formHTML.lastName.value
    formData.sexe = formHTML.sexe.value
}
function saveData()
{
    const dataToString = JSON.stringify(formData) // Passage en string pour stockage dans localstorage
    localStorage.setItem('infos', dataToString)
}
function showData()
{
    const localContent = localStorage.getItem('infos')
    if (localContent)
    {
        resultat.innerHTML = ""
        const formData = JSON.parse(localContent)
        if (Object.keys(formData).length != 0)
        {
            const ul = document.createElement('ul')
            for (var item in formData)
            {
                const li = document.createElement('li')
                li.innerText = item + " : " + formData[item]
                ul.appendChild(li)
            }
            resultat.appendChild(ul)
        }
    }

}
function main(event){
    event.preventDefault()
    getData();
    saveData();
    showData();
    formHTML.form.reset()
}
// ---------- Execution ----------
document.addEventListener('DOMContentLoaded', function()
{
    formHTML.firstName = document.getElementById('firstName')
    formHTML.lastName = document.getElementById('lastName')
    formHTML.sexe = document.getElementById('sexe')
    formHTML.form = document.querySelector("form")
    affichage = document.getElementById('result') // Recuperation de l'emplacement HTML pour l'affichage
    clearButton = document.querySelector('.btn.btn-success')
    showData()
    formHTML.form.addEventListener('submit', main)
    //formHTML.form.onsubmit = main

    clearButton.addEventListener('click', function() {
        localStorage.clear();
        affichage.innerHTML = ''
    })
})

