// Función para redirigir y almacenar los detalles del producto seleccionado
function verDetalle(id) {
    let productos = [
        {
            id: 1,
            nombre: "MLU12",
            descripcion: "Mesa Ratona 61cm x 51cm x 45cm",
            precio: "$22,339.99",
            imagen: "imagesProductos/Product-Detail-Spartacus-FantasticFurniture-WF-null (1).jpeg", // Imagen principal
            imagenesAdicionales: [
                "imagesProductos/Product-Detail-Spartacus-FantasticFurniture-WF-null (1).jpeg", // Imagen adicional 1
                "../imagesProductos/Product-Detail-Spartacus-FantasticFurniture-WF-null (2).jpeg", // Imagen adicional 2
                "../imagesProductos/Product-Detail-Spartacus-FantasticFurniture-WF-null.jpeg"  // Imagen adicional 3
            ]
        },
        {
            id: 2,
            nombre: "Silla de Oficina 2",
            descripcion: "Descripción del producto 2",
            precio: "$11,999.99",
            imagen: "imagesProductos/Product-Detail-Spartacus-FantasticFurniture-WF-null (2).jpeg", // Imagen principal
            imagenesAdicionales: [
                "imagesProductos/Product-Detail-Spartacus-FantasticFurniture-WF-null (1).jpeg", // Imagen adicional 1
                "imagesProductos/Product-Detail-Spartacus-FantasticFurniture-WF-null (2).jpeg", // Imagen adicional 2
                "imagesProductos/Product-Detail-Spartacus-FantasticFurniture-WF-null.jpeg"  // Imagen adicional 3
            ]
        },
        {
            id: 3,
            nombre: "Cama King 3",
            descripcion: "Descripción del producto 3",
            precio: "$45,999.99",
            imagen: "imagesProductos/Product-Detail-Spartacus-FantasticFurniture-WF-null (2).jpeg", // Imagen principal
            imagenesAdicionales: [
                "imagesProductos/Product-Detail-Spartacus-FantasticFurniture-WF-null (1).jpeg", // Imagen adicional 1
                "imagesProductos/Product-Detail-Spartacus-FantasticFurniture-WF-null (2).jpeg", // Imagen adicional 2
                "imagesProductos/Product-Detail-Spartacus-FantasticFurniture-WF-null.jpeg"  // Imagen adicional 3
            ]
        }
    ];

    let producto = productos.find(p => p.id === id);

    if (producto) {
        // Redirige al detalle del producto, se puede pasar un ID por URL
        window.location.href = "detalle-producto.html?id=" + producto.id;
    }
}
