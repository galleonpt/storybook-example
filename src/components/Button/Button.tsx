import { PropsWithChildren } from "react";
import "./button.css";

interface IButtonProps extends PropsWithChildren {
    disabled?: boolean;
    onClick: () => void;
}

const Button = ({ disabled, children, onClick }: IButtonProps) => {
    return (
        <button disabled={disabled} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
