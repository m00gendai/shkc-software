import Versions from './components/Versions'
import electronLogo from './assets/electron.svg'
import Papa from 'papaparse'
import { useRef } from 'react';

function App(): React.JSX.Element {
  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')
  const inputRef = useRef(null);

  const handleFile = (e) => {
    console.log("handler")
    const file = e.target.files[0];
    if (!file) return;
console.log("file loaded")
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      dynamicTyping: true,
      complete: (results) => console.log({ rows: results.data }),
    });

    e.target.value = ''; // allow re-selecting the same file
  };

  return (
    <>
      <button onClick={() => inputRef.current.click()}>Select CSV</button>
      <input ref={inputRef} type="file" accept=".csv" hidden onChange={handleFile} />
    </>
  )
}

export default App
