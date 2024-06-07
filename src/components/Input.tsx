import React from "react";
// utilizando o 'as' colocamos um apelido
import {  Input as NativeBaseInput, IInputProps, FormControl  } from "native-base";


type Props = IInputProps & {
    errorMessage ?: string | null;
}

export function Input({errorMessage = null, isInvalid, ...rest}: Props){

    const invalid = !!errorMessage || isInvalid;

    return(
        <FormControl mb={4} isInvalid={invalid}>
            <NativeBaseInput
                bg="gray.500"
                fontSize="md"
                h={12} //height
                isInvalid={invalid}
                {...rest}
                _focus={{
                    bg:"pink.100",
                    borderWidth: 1,
                    borderColor: "#f9a8d4",
                }}
            />

            <FormControl.ErrorMessage>
                {errorMessage}
            </FormControl.ErrorMessage>

        </FormControl>

    )
}