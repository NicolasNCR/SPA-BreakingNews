import { InputSpace } from "./InputStyle";

// eslint-disable-next-line react/prop-types
export function Input({ type, placeholder, name }) {
    return (
        <InputSpace type={type} placeholder={placeholder} />
    )
}