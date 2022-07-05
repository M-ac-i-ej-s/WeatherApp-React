import {useState} from 'react'

const Header = ({onCity}) => {
    const [text, setText] = useState('')

    onCity(text)

    return (
    <div>
       <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
    </div>
  )
}

export default Header
