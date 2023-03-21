import { useDispatch } from "react-redux";
import { register } from "redux/auth/operations";
import {Form, Label, Input, Button } from './RegisterForm.styled';


export const RegisterForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        const from = e.currentTarget;
        dispatch (
            register({
                name: from.elements.name.value,
                email: from.elements.email.value,
                password: from.elements.password.value,
            })
        );
        from.reset();
    };

    return (
        <Form onSubmit={handleSubmit} autoComplete="off">
            <Label>
                UserName
                <Input type="text" name="name" />
            </Label>
            <Label>
               Email
                <Input type="email" name="email" />
            </Label>
            <Label>
                Password
                <Input type="password" name="password" />
            </Label>
            <Button type="submit">Register</Button>
        </Form>
    );
};