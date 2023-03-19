import { Title } from "./Section.styled";
export const Sectiom = ({title, children}) => {
    return (
        <sectiom>
            <Title>{title}</Title>
            {children}
        </sectiom>
    );
};