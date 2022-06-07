const cliente = {
    nombre: 'Manuel',
    apellidos: 'Torres',
    datos: {
        dirección: 'Jaén',
        mensaje: "¿Qué forma jurídica es más beneficiosa?"
    }
};
// Jaén
console.log(cliente.nombre);
// Cualquier texto
console.log(cliente.datos.mensaje);
//{dirección: 'Jaén', mensaje: 'Cualquier texto'}
console.log(cliente.datos);

const gestor = {
    nombre: 'Raquel',
    apellidos: 'Garcia',
    datos: {
        dirección: 'Jaén',
       
    }
};
// Jaén
console.log(gestor.nombre);
//{dirección: 'Jaén', mensaje: 'Cualquier texto'}
console.log(gestor.datos);
