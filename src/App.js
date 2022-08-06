/* src/App.js */
import './App.css'
import { useState } from 'react'
import { create } from 'ipfs-http-client'

const client = create('https://ipfs.infura.io:5001/api/v0')

function App() {
  const [fileUrl, updateFileUrl] = useState(``)
  const [fileUrl2, updateFileUrl2] = useState(``)
  const [fileUrl3, updateFileUrl3] = useState(``)
  async function onChange(e) {
    const file = e.target.files[0]
    try {

      const added = await client.add(file)
      console.log(`https://ipfs.infura.io/ipfs/${added.path}`)
      const url = `https://ipfs.infura.io/ipfs/${added.path}`
      updateFileUrl(url)
    } catch (error) {
      console.log('Error uploading file: ', error)
    }
  }
  async function onChange2(e) {
    const file = e.target.files[0]
    try {
      const added = await client.add(file)
      console.log(`https://ipfs.infura.io/ipfs/${added.path}`)
      const url = `https://ipfs.infura.io/ipfs/${added.path}`
      updateFileUrl2(url)
    } catch (error) {
      console.log('Error uploading file: ', error)
    }
  }
  const handleGenerate = async () => {
    const obj =
    {
      dna: "614131007",
      name: "Hottie book",
      description: "hot guy rolling his eyes",
      image: fileUrl,
      pdf: fileUrl2,
      attributes: [
        {
          trait_type: "cover photo hotness",
          value: "epic"
        },
        {
          trait_type: "Book rating",
          value: "5"
        }
      ]
    }
    const fileName = 'metadata'
    const json = JSON.stringify(obj)
    const blob = new Blob([json], { type: 'application/json' })
    const href = URL.createObjectURL(blob)
    try {
      const added = await client.add(json)

      console.log(`https://ipfs.infura.io/ipfs/${added.path}`)
      const url = `https://ipfs.infura.io/ipfs/${added.path}`
      updateFileUrl(url)
    } catch (error) {
      console.log('Error uploading file: ', error)
    }


    //const link = document.createElement('a')
    //link.href = href
    //link.download = fileName + '.json'
    //link.click()

    //// document.body.removeChild(link)
    //// URL.revokeObjectURL(href)

  }
  return (
    <div className="App" style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <h1>IPFS Example</h1>
      <input type="file" onChange={onChange} />
      <input type="file" onChange={onChange2} />

      {fileUrl && (
        <img src={fileUrl} width="600px" />
      )
      }
      {fileUrl2 && (
        <iframe src={fileUrl2} width="600px" />
      )
      }

      <button onClick={handleGenerate}>GenerateToken</button>
      <button>Mint</button>
    </div>
  );
}

export default App

