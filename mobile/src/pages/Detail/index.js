import React from 'react';
import { View,TouchableOpacity, Image, Text, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';

import styles from './style';

import logoImg from '../../assets/logo.png';
import { Feather } from '@expo/vector-icons'

export default function Detail(){

    const navigation = useNavigation();
    const message = 'Olá APAD, estou entrando em contato pois gostaria de ajudar no caso "caso teste" com o valor de R$120,00';

    function navigateBack(){
        navigation.goBack();
    }

    function sendMail(){
        MailComposer.composeAsync({
            subject: 'Herói do caso: Caso teste',
            recipients: ['maiconfsanto@gmail.com'],
            body: message
        });
    }

    function sendWhatsapp(){
        Linking.openURL(`whatsapp://send?phone=51985831741&text=${message}`);
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color="#E82041" />
                </TouchableOpacity>
           </View>

           <View style={styles.incident}>
                <Text style={[styles.incidentProperty, { marginTop:0 }]}>ONG:</Text>
                <Text style={styles.incidentValue}>APAD:</Text>
                <Text style={styles.incidentProperty}> CASO:</Text>
                <Text style={styles.incidentValue}>CASO DE TESTE:</Text>
                <Text style={styles.incidentProperty}> VALOR:</Text>
                <Text style={styles.incidentValue}> R$ 120,00:</Text>
           </View>

           <View style={[styles.contactBox, {marginTop: 5}]}>
                <Text style={styles.heroTitle}>Salve o dia!</Text>
                <Text style={styles.heroTitle}>Seja o Herói deste caso</Text>

                <Text style={styles.heroDescription}>Entre em contato:</Text>

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
                        <Text style={styles.actionText}>WhatsApp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.action} onPress={sendMail}>
                        <Text style={styles.actionText}>Email</Text>
                    </TouchableOpacity>
                </View>
           </View>
        </View>
    );
}