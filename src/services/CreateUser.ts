export default function CreateUser(name = '', email: string, password: string) {
    const user = {
        name,
        email, 
        password,
    }

    return user
}