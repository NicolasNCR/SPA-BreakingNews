import { InputSpace, TextAreaSpace } from './InputStyle';

// eslint-disable-next-line react/prop-types
export function Input({ type, placeholder, name, register, isInput=true, value }) {
    let inputProps = {
        type,
        placeholder,
        ...register(name)
    }
    
    if (value) inputProps.value = value;

    return (
        <>
            {isInput ? (
                <InputSpace {...inputProps} />
            ) : (
                <TextAreaSpace {...inputProps} />
            )}
        </>

    )
}