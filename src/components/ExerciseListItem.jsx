import React from 'react';
import { StyleSheet, Text, View, Pressable} from 'react-native';
import { Link } from 'expo-router';

export default function ExerciseListItems ({item})
{
  return (
   <Link href={`/${item.name}`} asChild>
    <Pressable style ={styles.exerciseContainer}>
          <Text style = {styles.exerciseName}>{item.name} </Text>
          
        <Text style = {styles.exerciseSubtitle}>
        <Text style={styles.subValue}>{item.muscle} </Text>| {' '}
          <Text style={styles.subValue}>{item.equipment} </Text>
          </Text>
          </Pressable>
          </Link>
          
  );
}

const styles = StyleSheet.create({ 
    exerciseContainer:{
      backgroundColor: 'grey',
      padding: 9,
      borderRadius: 9,
      gap: 5,
   },
  
    exerciseName:{
      fontSize: 25,
      fontWeight: '300'
    },
  
    exerciseSubtitle: {
    color: 'pink'
    },
      
    subValue: {
      textTransform: 'capitalize',
     } 

  });
