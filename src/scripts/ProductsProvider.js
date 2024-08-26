
import { db } from './env';
import { collection, addDoc, query, where, getDocs,  doc, getDoc, updateDoc} from 'firebase/firestore';
import { toast } from 'react-toastify';

export const storeProduct = async (name, description, quantity, category, photo, value) => {
    try {
        const docRef = await addDoc(collection(db, 'products'), {
            name,
            description,
            quantity,
            category,
            photo,
            value
        });
        console.log('Produto armazenado com sucesso, ID do documento:', docRef.id);
        toast.success("Produto armazenado com sucesso");
      } catch (error) {
        console.error('Erro ao armazenar o produto:');
        toast.error("Erro ao armazenar o produto: " + error.message);
        throw error;
      }

}

export const getProductsCategory = async (category) => {
    try {
        const q = query(collection(db, 'products'), where('category', '==', category));
        const querySnapshot = await getDocs(q);

        const products = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        return products;
    } catch (error) {
        console.error('Erro ao buscar produtos por categoria:', error);
        throw error;
    }
};

export const getProductsName = async (name) => {
    try {
        const q = query(collection(db, 'products'), where('name', '>=', name), where('name', '<=', name + '\uf8ff'));
        const querySnapshot = await getDocs(q);

        const products = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        return products;
    } catch (error) {
        console.error('Erro ao buscar produtos por nome:', error);
        throw error;
    }
};

export const updateProductQuantity = async (productId, decrementAmount) => {
    try {
        const productRef = doc(db, 'products', productId);
        const productDoc = await getDoc(productRef);

        if (productDoc.exists()) {
            const currentQuantity = productDoc.data().quantity;
            const newQuantity = currentQuantity - decrementAmount;

            if (newQuantity < 0) {
                throw new Error('Quantidade insuficiente em estoque.');
            }

            await updateDoc(productRef, { quantity: newQuantity });
            
        } else {
            throw new Error('Produto não encontrado.');
        }
    } catch (error) {
        console.error('Erro ao atualizar a quantidade do produto:', error);
        toast.error("Erro ao atualizar a quantidade do produto: " + error.message);
        throw error;
    }
};