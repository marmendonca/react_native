import React, { useState, useEffect } from 'react'
import { 
    View, 
    Text, 
    StyleSheet, 
    TextInput, 
    Platform,
    FlatList
  } from 'react-native'
import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

interface SkillData {
  id: string;
  name: string;
}

export function Home(){
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMyNewSkills] = useState<SkillData[]>([]);
  const [gretting, setGretting] = useState('');

  function handleAddNewSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill
    }
    setMyNewSkills(oldState => [...oldState, data])
  }

  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      setGretting('Good Morning');
    } else if (currentHour >= 12 && currentHour < 18) {
      setGretting('Good Afternoon')
    } else {
      setGretting('Good Night')
    }
  }, [mySkills])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Welcome, Marília
      </Text>

      <Text style={styles.grettings}>
        { gretting }
      </Text>
      
      <TextInput style={styles.input}
      placeholder="New Skill"
      placeholderTextColor="#555"
      onChangeText={setNewSkill}
      />

      <Button onPress={handleAddNewSkill} title="Add"/>

      <Text style={[styles.title, { marginVertical: 50 }]}>
          My Skills
      </Text>

      <FlatList 
        data={mySkills}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
            <SkillCard 
              skill={item.name}
            />
        )}
      />
      
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor:'#121015',
        paddingVertical: 70,
        paddingHorizontal: 30
    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },
    input: {
        backgroundColor: '#1F1E25',
        color: '#fff',
        fontSize: 18,
        padding: Platform.OS == 'ios' ? 15 : 10,
        marginTop: 30,
        borderRadius: 7
    },
    grettings: {
      color: '#FFF'
    }
})

function setMySkills(arg0: (oldState: any) => any) {
  throw new Error('Function not implemented.');
}
