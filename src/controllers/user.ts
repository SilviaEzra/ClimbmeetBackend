import { Request, Response } from "express";
import bcrypt from 'bcrypt';
import User from "../models/user";
import jwt from "jsonwebtoken";

export const newUser = async (req: Request, res: Response) => {
    const { username, password, firstName, lastName, email, address, gender, climbingType, climbingLevel } = req.body;

    console.log('Datos de entrada para registro:', req.body);

    if (!username || !password) {
        return res.status(400).json({
            msg: 'Faltan parámetros en la solicitud'
        });
    }

    try {
        const user = await User.findOne({ where: { username: username }});

        if (user) {
            console.log('Usuario encontrado:', user);
            return res.status(400).json({
                msg: 'Ya existe un usuario con el nombre ' + username
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        console.log('Contraseña hasheada:', hashedPassword);

        await User.create({
            username,
            password: hashedPassword,
            firstName,
            lastName,
            email,
            address,
            gender,
            climbingType,
            climbingLevel
        });

        console.log('Usuario creado correctamente');

        res.json({
            msg: 'Usuario ' + username + ' creado correctamente',
        });
    } catch (error) {
        console.error('Error al crear usuario:', error);
        res.status(400).json({
            msg: 'Ups, ha habido un error al crear el usuario'
        });
    }
};

export const loginUser = async (req: Request, res: Response) => {
    const { username, password } = req.body;

    console.log('Datos de entrada para login:', req.body);

    if (!username || !password) {
        return res.status(400).json({
            msg: 'Faltan parámetros en la solicitud'
        });
    }

    try {
        const user: any = await User.findOne({ where: { username: username }});

        if (!user) {
            return res.status(400).json({
                msg: 'No existe un usuario con el nombre ' + username + ' en la base de datos'
            });
        }

        const passwordValid = await bcrypt.compare(password, user.password);
        if (!passwordValid) {
            return res.status(400).json({
                msg: 'Password Incorrecto'
            });
        }

        const token = jwt.sign(
            { id: user.id },
            process.env.SECRET_KEY || 'pepito123',
            { expiresIn: '1h' }
        );

        res.json({ token });
    } catch (error) {
        console.error('Error al iniciar sesión:', error);
        res.status(500).json({
            msg: 'Ups, ha habido un error al iniciar sesión'
        });
    }
};

export const updateUser = async (req: Request, res: Response) => {
    const { username, firstName, lastName, email, address, gender, climbingType, climbingLevel } = req.body;

    console.log('Datos de entrada para actualización:', req.body);

    try {
        const user = await User.findOne({ where: { username: username }});

        if (!user) {
            return res.status(400).json({
                msg: 'No existe un usuario con el nombre ' + username
            });
        }

        await User.update(
            { firstName, lastName, email, address, gender, climbingType, climbingLevel },
            { where: { username: username } }
        );

        console.log('Usuario actualizado correctamente');

        res.json({
            msg: 'Usuario ' + username + ' actualizado correctamente',
        });
    } catch (error) {
        console.error('Error al actualizar usuario:', error);
        res.status(400).json({
            msg: 'Ups, ha habido un error al actualizar el usuario'
        });
    }
};

export const getUserProfile = async (req: Request, res: Response) => {
    const authHeader = req.headers.authorization;
    const token = authHeader?.split(' ')[1];

    if (!token) {
        console.error('No token provided');
        return res.status(401).json({ msg: 'No token provided' });
    }

    try {
        const decoded: any = jwt.verify(token, process.env.SECRET_KEY || 'pepito123');
        const user = await User.findOne({ where: { id: decoded.id } });

        if (!user) {
            console.error('User not found');
            return res.status(404).json({ msg: 'User not found' });
        }

        res.json(user);
    } catch (error) {
        console.error('Error fetching user profile:', error);
        res.status(500).json({ msg: 'Internal server error' });
    }
};
