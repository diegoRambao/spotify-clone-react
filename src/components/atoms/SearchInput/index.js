import { useRef } from 'react'
import { InputRoot, TextField, Icon } from './style'

export function SearchInput ({ onSubmit }) {
  const textFieldEl = useRef()

  const handleEnter = (event) => {
    if (event.key === 'Enter') {
      const { value } = textFieldEl.current
      onSubmit(value)
    }
  }

  return (
    <InputRoot>
      <Icon />
      <TextField
        ref={textFieldEl}
        onKeyDown={handleEnter}
        type='text'
        name='search'
        spellCheck='false'
        placeholder='Buscar canciones...'
        autoFocus
      />
    </InputRoot>
  )
}
