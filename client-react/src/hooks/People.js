import { useState } from 'react'

export default function usePeople(initialValue = []) {
  const [people, changePeople] = useState(initialValue);
  return { people, changePeople } 
}