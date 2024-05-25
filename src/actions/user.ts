'use server';

import { Address, User } from '@prisma/client';

import userAPI from '@/lib/api/user';

export const editName = (formData: FormData, user: User) => {
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;

    if (!firstName || !lastName) {
        throw new Error('You must provide a first and last name.');
    }

    user.firstName = firstName;
    user.lastName = lastName;

    return userAPI.updateUser(user);
};

export const editEmail = async (formData: FormData, user: User) => {
    const email = formData.get('email') as string;

    if (!email) {
        throw new Error('You must provide an email address.');
    }

    user.email = email;

    return userAPI.updateUser(user);
};

export const editAddress = async (formData: FormData, user: User) => {
    const street1 = formData.get('street1') as string;
    const street2 = formData.get('street2') as string;
    const city = formData.get('city') as string;
    const state = formData.get('state') as string;
    const postal = formData.get('postal') as string;
    const country = formData.get('country') as string;

    if (!street1 || !city || !state || !postal || !country) {
        throw new Error('You must provide a street address, city, state, postal code, and country.');
    }

    const address = {
        street1,
        street2,
        city,
        state,
        postal,
        country,
    };

    return userAPI.setUserAddress(user, address);
};

export const editPhoneNumber = async (formData: FormData, user: User) => {
    const phone = formData.get('phone') as string;

    if (!phone) {
        throw new Error('You must provide a phone number.');
    }

    let phone_number_regex = /^\+[1-9]\d{1,14}$/;
    if (!phone_number_regex.test(phone)) {
        throw new Error('You must provide a valid phone number. Example: +1234567890');
    }

    user.phone = phone;

    return userAPI.updateUser(user);
};
