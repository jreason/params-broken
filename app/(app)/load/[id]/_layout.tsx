import {Stack} from 'expo-router';
import React from 'react';

export default function AppLayout() {

  return (
      <Stack>
          <Stack.Screen name="jobs" options={{title: 'Jobs'}}/>
          <Stack.Screen name="view-job" options={{title: 'View Job'}}/>
      </Stack>
  );
}
