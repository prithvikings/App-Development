import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import Colors from '@/constants/Colors'
import { FilterOptions, TASKS } from '@/constants/tasks'
import Header from '@/components/Header'
import Dateselector from '@/components/Dateselector'
import Filterstabs from '@/components/Filterstabs'
import { useState } from 'react'
import Taskcard from '@/components/Taskcard'

const index = () => {
  const insets=useSafeAreaInsets()
  const [activeFilter, setActiveFilter] = useState<FilterOptions>('All')

  const filteredTasks = TASKS.filter((task) => {
    if (activeFilter === 'All') return true
    if (activeFilter === 'To do') return task.status === 'To-do'
    if (activeFilter === 'In Progress') return task.status === 'In Progress'
    if (activeFilter === 'Completed') return task.status === 'Done'
    return true
  })
  return (
    <View style={[styles.container,{paddingTop: insets.top, paddingBottom: insets.bottom}]}>
      <StatusBar style='light' />
      <FlatList 
      data={filteredTasks}
      keyExtractor={(item)=>item.id}
      renderItem={({item})=><Taskcard task={item} />}
      ListHeaderComponent={
        <>
        {/* Header */}
        <Header />
        {/* DataSelector */}
        <Dateselector />
        {/* FiltersTab */}
        <Filterstabs selected={activeFilter} onSelect={setActiveFilter} />
        </>
      }

      contentContainerStyle={styles.list}
      showsVerticalScrollIndicator={false}
      
      />
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  list: {
    paddingBottom: 24,
  },
});