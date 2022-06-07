const ButtonType = (type) => type;
export default function Button ({ children, type = "button", onClick = () => { }, className = "" }) {
    return (
        <button
            type={ ButtonType(type) }
            title={ children }
            className={
                "flex justify-center items-center " +
                "py-2 px-4 max-w-xs " +
                "bg-main border-2 border-black " +
                "text-xl font-medium outline-2 outline-offset-4 outline-sky-300 cursor-pointer " +
                className
            }
            onClick={ onClick }
        >{ children }</button>
    );
}
