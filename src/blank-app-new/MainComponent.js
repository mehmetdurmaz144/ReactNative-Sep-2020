import React, {useState} from 'react';
import { StyleSheet, Text} from 'react-native';

import {RegisterForm} from './form/RegisterForm.js';

const MainComponent = () => {
    return (
        <>
            <Text>C ve Sistem Programcıları Derneği</Text>
            <RegisterForm/>
        </>
    )
}


export {MainComponent}
