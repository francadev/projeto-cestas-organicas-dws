
import { auth, db } from './env';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';

export const register = (email, senha, endereco, foto, nome) => {
    createUserWithEmailAndPassword(auth, email, senha)
      .then(async (credentials) => {
        console.log("Usuário criado com sucesso", credentials);
        try {
          await storeUser(nome, email, endereco, foto);
          toast.success("Usuário cadastrado com sucesso");
        } catch (error) {
          toast.error("Erro ao armazenar o usuário: " + error.message);
        }
      })
      .catch((error) => {
        console.log("Erro ao criar o usuário:", error);
        toast.error("Erro ao criar o usuário: " + error.message);
      });
  };

  export const autenticateUser = (email, senha) => {
    signInWithEmailAndPassword(auth, email, senha)
      .then((credentials) => {
        console.log("Usuário logado com sucesso", credentials);
        toast.success("Usuário logado com sucesso!");
        const user = auth.currentUser;
        console.log("Current User: ", user);
        window.location.href = '/carrinho';
      })
      .catch((error) => {
        console.log("Erro ao logar o usuário:", error);
        toast.error("Erro ao logar o usuário: Email/Senha inválidos");
      });
  };

  const storeUser = async (nome, email, endereco, foto) => {
    try {
      const docRef = await addDoc(collection(db, 'users'), {
        nome,
        email,
        endereco,
        foto
      });
      console.log('Usuário armazenado com sucesso, ID do documento:', docRef.id);
    } catch (error) {
      console.error('Erro ao armazenar o usuário:');
      throw error;
    }
  }

export const signoutUser = async (onSuccess) => {
  try {
    await signOut(auth);
    console.log("Usuário deslogado com sucesso");
    toast.success("Usuário deslogado com sucesso!");
    if (onSuccess) onSuccess();
  } catch (error) {
    console.log("Erro ao deslogar o usuário:", error);
    toast.error("Erro ao deslogar o usuário: " + error.message);
  }
};