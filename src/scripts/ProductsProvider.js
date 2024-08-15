
import { db } from './env';
import { collection, addDoc, query, where, getDocs} from 'firebase/firestore';
import { toast } from 'react-toastify';

export const storeProduct = async (name, description, quantity, category, photo) => {
    try {
        const docRef = await addDoc(collection(db, 'products'), {
            name,
            description,
            quantity,
            category,
            photo
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

