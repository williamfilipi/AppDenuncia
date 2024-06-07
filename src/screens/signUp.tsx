import React from 'react';
// Vstack faz alinhar na vertical se quiser um ao lado do outro é o HStack
import { VStack, Heading, Center} from 'native-base';
import { useForm, Controller} from 'react-hook-form'


import {Input} from "../components/Input"
import { Button } from '../components/Button';
import { Pattern } from 'react-native-svg';

type FormDataProps = {
    name: string,
    cpf: number,
    contato1: number,
    contato2: number,
    contato3: number,
    telefone: number;
}

export function SignUp (){

    const { control, handleSubmit, formState:{errors} } = useForm<FormDataProps>()

    function handleSignUp(data: FormDataProps){
        console.log(data);
        
    }

    return (
        <VStack bgColor={'gray.200'} flex={1} padding={5} >
            <Center>
                <Heading marginTop={20} mb={5}>
                    Crie Sua Conta
                </Heading>
                
                <Controller
                    control={control} //Quem é que controla o inpuut
                    name='name'
                    rules={{
                        required: 'Informe o seu Nome',

                    }}
                    render={({field: {onChange} }) => (
                        <Input placeholder='Preencha com Seu Nome' errorMessage={errors.name?.message} onChangeText={onChange}/> 
                    )}
                />

                <Controller
                    control={control} //Quem é que controla o inpuut
                    name='cpf'
                    render={({field: {onChange} }) => (
                        <Input placeholder='Seu CPF' onChangeText={onChange}/> 
                    )}
                />

                <Controller
                    control={control} //Quem é que controla o inpuut
                    name='contato1'
                    rules={{
                        required:'Informe um número de contato valido',
                        pattern: /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/,
                        
    
                    }}
                    render={({field: {onChange} }) => (
                        <Input placeholder='Contato 1' onChangeText={onChange}
                        errorMessage={errors.contato1?.message}
                        /> 
                    )}
                />

                <Controller
                    control={control} //Quem é que controla o inpuut
                    name='contato2'
                    render={({field: {onChange} }) => (
                        <Input placeholder='Contato 2' onChangeText={onChange}/>
                    )}
                />

                <Controller
                    control={control} //Quem é que controla o inpuut
                    name='contato3'
                    render={({field: {onChange} }) => (
                        <Input placeholder='Contato 3' onChangeText={onChange}/> 
                    )}
                />

                <Controller
                    control={control} //Quem é que controla o inpuut
                    name='telefone'
                    render={({field: {onChange} }) => (
                        <Input placeholder='Seu número de Telefone' onChangeText={onChange}/> 
                    )}
                />

                    <Button  title='Cadastrar' onPress={handleSubmit(handleSignUp)}/>

            </Center>
        </VStack>
    );
}
