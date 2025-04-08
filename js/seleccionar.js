function Select() {

    let seleccionar = document.getElementById("seleccionar").value;
    let caracteres = /^\d{5}$/;
    if (!caracteres.test(seleccionar)) {
        alert("Para selecionar un entrenador debes de ingresar un Codigo de 5 digitos.");
        return false;
    }

      let array = [
        seleccionar,
    ]

    localStorage.setItem("seleccionar", JSON.stringify(array));
    alert("Entrenador selecionado correctamente")

}