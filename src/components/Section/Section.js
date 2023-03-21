import { Title } from "./Section.styled";
export const Section = ({title, children}) => {
    return (
        <sectiom>
            <Title>{title}</Title>
            {children}
        </sectiom>
    );
};