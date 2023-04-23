import React, { useEffect } from "react";
import { Text } from 'react-native';

import { carregaProdutores } from "../../../services/carregaDados";

export default function Produtores() {
    useEffect(() => {
        const retorno = carregaProdutores();
        console.log(retorno);
    }, []);

    return <Text>Produtores</Text>      
}