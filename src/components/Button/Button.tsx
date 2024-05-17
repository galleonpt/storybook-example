import { PropsWithChildren } from "react";
import "./button.css";
import { BeatLoader } from "react-spinners";

interface IButtonProps extends PropsWithChildren {
    disabled?: boolean;
    loading?: boolean;
    onClick: () => void;
}

const Button = ({ disabled, children, loading, onClick }: IButtonProps) => {
    return (
        <button disabled={disabled || loading} onClick={onClick}>
            {loading && <BeatLoader color="var(--white)" size={4} />}
            {!loading && children}
        </button>
    );
};

export default Button;
