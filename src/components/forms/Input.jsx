const Input = ({ placeholder, value, onChange }) => {
    return (
        <>
            <input
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </>
    );
};

export default Input;
