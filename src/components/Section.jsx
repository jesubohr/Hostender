export default function Section ({ children, className }) {
    return (
        <section className={
            "py-10 px-10 sm:px-20 w-full min-h-max-full " +
            (className || "")
        }>
            { children }
        </section>
    );
}
