import React from 'react';
import { firestore } from '../firebase.config';

export const addFormData = async ({ formData, table }) => {
    return await firestore.collection(table).add(formData);
}

export const updateFormData = () => {

}