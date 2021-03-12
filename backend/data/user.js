import bcrypt from 'bcryptjs'

const users = [
    {
        name: "Admin User",
        email: "admin@gmail.com",
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },

    {
        name: "Johny",
        email: "johny@gmail.com",
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },

    {
        name: "Hania",
        email: "Hania@gmail.com",
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },


]

export default users