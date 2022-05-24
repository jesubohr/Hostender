const ButtonType = (type) => type;
export default function Button ({ children, type = "button", onClick = () => { }, className = "" }) {
    return (
        <button
            type={ ButtonType(type) }
            title={ children }
            className={
                "border-2 " +
                "outline-2 outline-offset-4 outline-sky-300 " +
                className
            }
            onClick={ onClick }
        >{ children }</button>
    );
}
