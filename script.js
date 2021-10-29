const list = document.querySelector('.list');
const products = {
    1: {
        "nombre": 'Short Sport',
        "precio": '10.5'
    },
    2: {
        "nombre": 'Jogger',
        "precio": '6.25'
    },
    3: {
        "nombre": 'Chaqueta Cortavientos',
        "precio": '5'
    },
    4: {
        "nombre": 'Billetera Membense',
        "precio": '260'
    },
    5: {
        "nombre": 'Kit de Maquillaje Zero',
        "precio": '20.5'
    },
    6: {
        "nombre": 'Colonia Viajera Masculina',
        "precio": '12.75'
    },
    7: {
        "nombre": 'Vestido Vintage',
        "precio": '15'
    },
    8: {
        "nombre": 'Buzo Puma',
        "precio": '15'
    },
    9: {
        "nombre": 'Chaqueta de Jean Clásica',
        "precio": '10.5'
    },
    10: {
        "nombre": 'Driver en Cuero',
        "precio": '25'
    },
    11: {
        "nombre": 'Tacones Rojo Pasión',
        "precio": '20.5'
    },
    12: {
        "nombre": 'Tenis Casuales Hombres',
        "precio": '13.45'
    }
}
let item = [];
let bill = [];

function agregarCarro(x) {
    const span = `<span class="precio">$${products[x].precio}</span>`
    const result = products[x].nombre + " " + span;
    if (item.includes(products[x]) === false) item.push(result);
    bill.push(products[x].precio);

}

function cart() {
    list.innerHTML = "";
    for (let i = 0; i < item.length; i++) {
        let text = item[i];
        let listItem = document.createElement("LI");
        listItem.innerHTML = text;
        list.appendChild(listItem);
        listItem.style.textAlign = 'left';
    }
    const btn = document.querySelector('.bill');
    const total = bill.reduce(add);

    function add(accumulator, a) {
        return parseInt(accumulator) + parseInt(a);
    }
    console.log(total);
    btn.innerHTML = `El Total a cancelar es $${total}`;
}