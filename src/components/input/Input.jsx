export default function Input ({ type, name, label, placeholder, minLength, error = '' }) {
    return (
        <input
            aria-label={ label }
            type={ type }
            name={ name }
            placeholder={ placeholder }
            className={
                "border-2 " +
                "outline-2 outline-offset-4 outline-sky-300 " +
                "focus-within:invalid:border-red-500" +
                (error ? "error" : "")
            }
            required
            minLength={minLength}
            maxLength={20}
        />
    );
}
