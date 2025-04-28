document.addEventListener("DOMContentLoaded", () => { // Aqui está esperando o dom ser carregado
    const draggable = document.getElementById("draggable");

    draggable.addEventListener("mousedown", (event) => {
        let shiftX = event.clientX - draggable.getBoundingClientRect().left;
        let shiftY = event.clientY - draggable.getBoundingClientRect().top;

        draggable.innerHTML = '<img src="img/nostaticface.jpg" style="width: 200px; height: 200px;">';
    

        draggable.style.position = "absolute";
        draggable.style.zIndex = 1000;
        document.body.append(draggable); // Aqui estamos adicionando o elemento degrabble ao body

        function moveAt(pageX, pageY) {
            draggable.style.left = pageX - shiftX + "px"; // Aqui estamos mudando a posição do elemento draggable para a posição do mouse menos a posição do lemento draggable
            draggable.style.top = pageY - shiftY + "px";
        }

        function onMouseMove(event) {
            moveAt(event.pageX, event.pageY);
        }

        document.addEventListener("mousemove", onMouseMove); // Aqui estamos adicionando um evento do mouse no documento

        draggable.addEventListener("mouseup", () => {
            document.removeEventListener("mousemove", onMouseMove);
            draggable.onmouseup = null;
            draggable.innerHTML = '<img src="img/staticface.jpg" style="width: 200px; height: 200px;">';
        });
    });

    draggable.ondragstart = () => {
        return false;
    };
});
