import { PropsWithChildren } from "react";
import "./button.css";

interface IButtonProps extends PropsWithChildren {
    disabled?: boolean;
}

const Button = ({ disabled, children }: IButtonProps) => {
    return <button disabled={disabled}>{children}</button>;
};

export default Button;
