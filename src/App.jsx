import { useState, useRef } from 'react';
import './App.css'
import JoditEditor from 'jodit-react';
import HTMLReactParser from 'html-react-parser';

export default function App() {
  const editor = useRef(null);
	const [content, setContent] = useState('');
  const [texto, setTexto] = useState('')

  const handleSave = () => {
    setTexto(content)
  }

  const config = {
    height: 300,
    placeholder: 'Escreva aqui ...'
  }

  return (
    <>
      <div className='container'>
        <h1>Editor de Texto</h1>
        <div>
          <JoditEditor
          ref={editor}
          config={config}
          value={content}
          onBlur={(newContent) => setContent(newContent)}
          />
          <div className='btns'>
            <button onClick={handleSave}>Salvar</button>
            <button onClick={() => setContent('')}>Limpar</button>
          </div>
        </div>
      </div>
      <div>
          {HTMLReactParser(texto)}
        </div>
    </>
  )
}

