'use client';

import { useState } from 'react';

const CreateProduct = () => {
    return (
        <form action={'/api/products/'} method='post'>
            <input type='text' name='name' placeholder='name' />
            <input type='text' name='description' placeholder='description' />
            <input type='text' name='category' placeholder='category' />
            <input type='text' name='monthlyPrice' placeholder='price' />
            <button type='submit'>Create</button>
        </form>
    );
};

export default CreateProduct;
