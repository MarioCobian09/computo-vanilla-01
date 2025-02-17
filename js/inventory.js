import { db } from './firebase.js'
import {
    collection,
    addDoc,
    getDocs,
    updateDoc,
    deleteDoc,
    doc
} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js"

const productTable = document.getElementById('productTable')
const addProductForm = document.getElementById('addProductForm')

const products = collection(db, 'products')


const loadProducts = async () => {
    productTable.innerHTML = ''
    const allProducts = await getDocs(products)
    
    allProducts.forEach((item) => {
        const product = item.data()

        const row = document.createElement('tr')
        row.innerHTML = `
            <td>${product.name}</td>
            <td>${product.stock}</td>
            <td>
                <div>
                    <button class="btn btn-warning btn-sm edit-product" data-id="${item.id}"><i class="fas fa-edit"></i></button>
                    <button class="btn btn-danger btn-sm delete-product" data-id="${item.id}"><i class="fas fa-trash"></i></button>
                </div>
            </td>
        `

        productTable.appendChild(row)
    })
}

loadProducts()

addProductForm.addEventListener('submit', async (e) => {
    e.preventDefault()

    const name = document.getElementById('producto').value
    const stock = document.getElementById('stock').value

    try {
        await addDoc(products, {name, stock})
        alert('Producto agregado satisfactoriamente')
        addProductForm.reset()
        loadProducts()
    } catch (error) {
        alert('Error al agregar el producto: ' + error.message)
    }
})