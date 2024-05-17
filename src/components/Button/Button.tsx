import { PropsWithChildren } from "react";
import "./button.css";
import { BeatLoader } from "react-spinners";

type TButtonSize = "small" | "medium" | "large";

type TButtonType = "default" | "success" | "danger";

interface IButtonProps extends PropsWithChildren {
    size?: TButtonSize;
    type?: TButtonType;
    disabled?: boolean;
    loading?: boolean;
    onClick: () => void;
}

const Button = ({
    disabled,
    children,
    loading,
    size = "medium",
    type = "default",
    onClick,
}: IButtonProps) => {
    const sizesClassnames: Record<TButtonSize, string> = {
        small: "small",
        medium: "",
        large: "large",
    };

    const typesClassnames: Record<TButtonType, string> = {
        default: "",
        success: "success",
        danger: "danger",
    };

    return (
        <button
            disabled={disabled || loading}
            className={[sizesClassnames[size], typesClassnames[type]].join(" ")}
            onClick={onClick}
        >
            {children} {loading && <BeatLoader color="var(--white)" size={4} />}
        </button>
    );
};

export default Button;
