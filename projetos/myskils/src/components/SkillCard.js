import React from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    Text
} from 'react-native';

export function SkillCard ({ skill }) {
    return (
        <TouchableOpacity 
            key= "skill"
            style={styles.buttonSkill}>
                <Text style={styles.textSkill}>
                    {skill}
                </Text>
            </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonSkill: {
        backgroundColor: '#1F1E25',
        padding: 15,
        borderRadius: 50,
        alignItems: 'center',
        marginVertical: 10
    },
    textSkill: {
        color: '#FFF',
        fontSize: 22,
        fontWeight: 'bold',
    }
})