export default function Title ({ children, className = "" }) {
    return (
        <h1 className={
            "mb-10 text-4xl font-semibold " +
            className
        }>{ children }</h1>
    );
}
