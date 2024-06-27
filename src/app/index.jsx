// @ts-nocheck
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator,StyleSheet, Text, View,FlatList } from 'react-native';
import exercises from "../../assets/data/exercises.json"
import ExerciseListItem from '../components/ExerciseListItem.jsx';
import { useQuery } from '@tanstack/react-query';
import {gql} from "graphql-request";
import client from '../graphqlClient.js';


const exercisesQuery = gql `
query MyQuery {
  exercises(muscle: "", name: "") {
    name
    muscle
  }
}
`;

export default function ExercisesScreen() {

  const {data,isLoading,error} = useQuery ({
    queryKey: ['exercises'],
    queryFn: async () => client.request(exercisesQuery),
  });

  if (isLoading) {
    return <ActivityIndicator/>;
  }

  if (error) {
    return <Text> Failed to fetch exercises</Text>
  }

  return (
    <View style={styles.container}>
      <FlatList 
      data={data}
      contentContainerStyle={{gap: 7}}
      keyExtractor={(item) => item.name}
      renderItem={({item}) => <ExerciseListItem item={item} /> }
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 10,
    paddingTop: 70,
  },

});
