import React from 'react';
import { Feather } from '@expo/vector-icons'
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native'
import * as MailComposer from 'expo-mail-composer';

import styles from './styles';
import logoImg from '../../assets/logo.png'


export default function Detail(){

    const navigation = useNavigation();
    const mensagem = 'Teste de envi de email via aplicativo';
    const route = useRoute();

    incident = route.params.incident;

    function navegateToIncidents(){
        navigation.goBack();
    }

    function sendMail(){
        MailComposer.composeAsync({
            subject: 'Heroi do casso: Nome do caso',
            recipients: ['yavitaliks@gmail.com'],
            body: mensagem,
        });
    }

    function sendWhatsApp(){
        Linking.openURL(`whatsapp://send?phone=+559681040357&text=WhatsApp OK`)
    }

    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Image source={logoImg}/>
                <TouchableOpacity 
                style={styles.detailButton}
                onPress={navegateToIncidents}>
                    <Feather name="arrow-left" size={28} color="#E82041"/>
                </TouchableOpacity>
            </View>

            <View style={styles.incident}>
                <Text style={[styles.incidentProperty, {marginTop: 0}]}>ONG:</Text>
                <Text style={styles.incidentValue}>{incident.nome}</Text>

                <Text style={styles.incidentProperty}>CASO:</Text>
                <Text style={styles.incidentValue}>{incident.descriptions}</Text>

                <Text style={styles.incidentProperty}>VALOR:</Text>
                <Text style={styles.incidentValue}>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(incident.value)}</Text>
            </View>

            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Salve Dia:</Text>
                <Text style={styles.heroTitle}>Seja Heroi deste caso</Text>
                <Text style={styles.heroDescription}>Entre em contato</Text>

                <View style={styles.actions}>
                    <TouchableOpacity
                    style={styles.action}
                    onPress={sendWhatsApp}>
                        <Text style={styles.actionText}>WhatsApp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                    style={styles.action}
                    onPress={sendMail}>
                        <Text style={styles.actionText}>Email</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}