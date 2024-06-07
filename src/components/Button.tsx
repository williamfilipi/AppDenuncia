import React from "react";

import { Button as ButtonNativeBase, IButtonProps,Text } from "native-base";

type Props = IButtonProps &{
    title : string;
}

export function Button({title, ...rest}: Props){
    return(
        <ButtonNativeBase 
        w="full" 
        bg="#f9a8d4" 
        // pressed = hover
        _pressed={{
            bg:"#fbcfe8"
        }}
        
        
        {...rest}>
            


            <Text color="white" fontSize="md">
                {title}
            </Text>
        </ButtonNativeBase>
    )
}