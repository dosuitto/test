const moveble = document.querySelector(".problem-clients");
const box = document.querySelector(".box-info");



// Відстеження подій перетягування для перетягуваного об'єкту
moveble.addEventListener("dragstart", dragStart);
moveble.addEventListener("dragend", dragEnd);



// Відстеження подій перетягування для приймача
box.addEventListener("dragover", dragOver);
box.addEventListener("dragenter", dragEnter);
box.addEventListener("dragleave", dragLeave);
box.addEventListener("drop", dragDrop);



// Функції перетягування
function dragStart() {
     this.classList.add("hold");
     setTimeout(() => this.classList.add("invisible"), 0)
}

function dragEnd() {
     this.classList.add("fill");
     this.classList.remove("invisible");
     this.classList.remove("hold");
}

function dragOver(e) {
     e.preventDefault();

}

function dragEnter(e) {
     e.preventDefault();
     this.classList.add("hovered");
}

function dragLeave() {
     this.classList.remove("hovered");
}

function dragDrop() {
     this.append(moveble);
     this.classList.remove("hovered");
}

