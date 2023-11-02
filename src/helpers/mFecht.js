const products = [ // simulamos una respuesta de una API
    {id: '1', name: 'maceta', categoria: 'ceramica', precio: 1000, stock: 1,url:'../src/assets/img/c1.jpeg'},
    {id: '2', name: 'maceta_jardinera', categoria: 'mosaiquismo', precio: 2000, stock: 1,url:'../src/assets/img/M16.jpeg'},
    {id: '3', name: 'compotera amarillo', categoria: 'ceramica', precio: 1000, stock: 2,url:'../src/assets/img/c7.jpeg'},
    {id: '4', name: 'compotera colores', categoria: 'ceramica', precio: 1000, stock: 2,url:'../src/assets/img/c15.jpeg'}
]

export const mFetch = (id) =>{
    return new Promise((res, rej)=>{ // fetch(promesa)  
        setTimeout(()=>{
            res(id ? products.find(prod=> prod.id===id):products)
        }, 1000)

    })
}