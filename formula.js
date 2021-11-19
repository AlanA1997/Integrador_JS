const cantidad = document.getElementById(`cantidad`);
const boton_resultado = document.getElementById(`boton_resultado`);
const categoria = document.getElementById(`personas`);
const totalCompra = document.getElementById(`total_boton`);
const ValorTicket = 200;
const boton_borrar = document.getElementById('boton_borrar');
const formulario_completo = document.getElementById('formulario_completo');

function resultado() {
    console.log(categoria.value)
    console.log(cantidad.value)
    cantidad.value;
    let valorcompleto = cantidad.value * ValorTicket;

    totalCompra.innerHTML = `Total a pagar: $ ${valorcompleto}`;


    switch (categoria.value) {
        case 'estudiante':
            let estudiante = valorcompleto - valorcompleto * 80 / 100;
            totalCompra.innerHTML = `Total a pagar: $ ${estudiante}`;
            break;
        case 'trainee':
            let trainee = valorcompleto - valorcompleto * 50 / 100;
            totalCompra.innerHTML = `Total a pagar: $ ${trainee}`;
            break;

        case 'junior':
            let junior = valorcompleto - valorcompleto * 15 / 100;
            totalCompra.innerHTML = `Total a pagar: $ ${junior}`;
            break;
        default:
            alert("Debe seleccionar una categoria. Gracias!");
            break;
    }
}

function borrar() {
    document.getElementById("formulario_completo").reset();
    totalCompra.innerHTML = "Total a pagar: $";
}