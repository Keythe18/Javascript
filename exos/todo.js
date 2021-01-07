let newElem = document.getElementById("nouvElem");

let newTodo = function(crea){
    let liste = document.createElement("li");
    let box = document.createElement("input");
    let label = document.createElement("label");
    let modButton = document.createElement("button");
    let delButton = document.createElement("button");

    label.innerText = newTodo;

    box.type="checkbox";

	modButton.innerText="Edit";
	modButton.className="edit";
	delButton.innerText="Delete";
    delButton.className="delete";
    
    liste.appendChild(box);
	liste.appendChild(label);
	liste.appendChild(modButton);
    liste.appendChild(delButton);
    return liste;
}