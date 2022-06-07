export default function Input ({
    type, name, label, placeholder, minLength, maxLength, value = '', error = '', max
}) {
    return (
        <input
            aria-label={ label }
            type={ type }
            name={ name }
            step="any"
            min={ 0 }
            max={ max }
            defaultValue={ value }
            placeholder={ placeholder }
            className={
                "py-1 px-3 w-full border-2 " +
                "outline-2 outline-offset-4 outline-sky-300 " +
                "focus-within:invalid:border-red-500" +
                (error ? "error" : "")
            }
            required
            minLength={ minLength }
            maxLength={ maxLength }
        />
    );
}
