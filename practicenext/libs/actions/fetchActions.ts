export async function getAllFetchUser() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!res.ok) throw new Error("failed to fetch data")
    return res.json();
}
export async function getUserByID(id: number) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    if (!res.ok) throw new Error("failed to fetch data")
    return res.json();
}

export async function getAllFetchPost(userId: number) {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        return res.json();
    } catch (error: any) {
        throw new Error(`failed to fetch Posts data ${error.message}`)

    }
}



import Yup from 'yup';

const schema = Yup.object().shape({
    username: Yup.string().required("This field is required"),
    email: Yup.string().email().required(),
    password: Yup.string().min(6).required(),
});

import { NextApiRequest, NextApiResponse } from 'next'

export async function signup(req: NextApiRequest, res: NextApiResponse) {
    // Get the user data from the request body
    const { name, email, password } = req.body;
    console.log(name)
    const data = await schema.validate(req.body);
    console.log("hello")
    // Create a new user account in the database

    // Set the cookie for the user
    //   res.cookie('token', user.id, {
    //     maxAge: 60 * 60 * 24,
    //     httpOnly: true,
    //   });

    // Return a success response
    res.status(200).json({
        message: 'User created успешно.',
    });
};