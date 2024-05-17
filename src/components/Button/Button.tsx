import { PropsWithChildren } from "react";
import "./button.css";
import { BeatLoader } from "react-spinners";

type TButtonSize = "small" | "medium" | "large";

interface IButtonProps extends PropsWithChildren {
    size?: TButtonSize;
    disabled?: boolean;
    loading?: boolean;
    onClick: () => void;
}

const Button = ({
    disabled,
    children,
    loading,
    size = "medium",
    onClick,
}: IButtonProps) => {
    const sizesClassnames: Record<TButtonSize, string | undefined> = {
        small: "small",
        medium: "",
        large: "large",
    };

    return (
        <button
            disabled={disabled || loading}
            className={size ? sizesClassnames[size] : undefined}
            onClick={onClick}
        >
            {children} {loading && <BeatLoader color="var(--white)" size={4} />}
        </button>
    );
};

export default Button;
