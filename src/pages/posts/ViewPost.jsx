import React from 'react';
import CategoryButtons from '../../components/Buttons/CategoryButtons';
import DefaultLayout from '../../components/Layouts/DefaultLayout';
import Posts from './Posts';

const ViewPosts = () => {
    return (
        <DefaultLayout>
            <CategoryButtons />
            <Posts></Posts>
        </DefaultLayout>
    )
}

export default ViewPosts
