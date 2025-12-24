import User from "../models/user.js";

async function handleGetAllUsers(req, res) {
    const allUsers = await User.find({});
    return res.json(allUsers);
}

async function handleGetUserById  (req, res) {
    const user = await User.findById(req.params.id);
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }
    return res.json(user);
}

async function handleUpdateUserById  (req, res) {
    await User.findByIdAndUpdate(req.params.id, { lastname: 'changed' });
    return res.json({ message: 'User updated' });
}

async function handleDeleteUserById  (req, res) {
    await User.findByIdAndDelete(req.params.id);
    return res.json({ message: 'User deleted' });
}

async function handleCreateUser  (req, res) {
    const body = req.body;
    if(
        !body.firstname ||
        !body.lastname ||
        !body.email ||
        !body.gender
    ) {
        return res.status(400).json({ error: 'Firstname, Lastname, Email and Gender are required' });
    }
    const newUser = new User({
        firstname: body.firstname,
        lastname: body.lastname,
        email: body.email,
        gender: body.gender
    });
    const savedUser = await newUser.save();
    return res.status(201).json(savedUser);
}

export default {handleGetAllUsers , handleGetUserById , handleUpdateUserById , handleDeleteUserById , handleCreateUser};