import { firestore } from '../firebase.config';

export const addFormData = async ({ formData, table }) => {
    return await firestore.collection(table).add(formData);
}

export const updateFormData = async ({ formData, table, id}) => {
  const result = await firestore
                  .collection(table)
                  .doc(id)
                  .update(formData);
  return result;
}


export const deleteData = async ({ table, id}) => {
  return await firestore.collection(table).doc(id).delete();
}