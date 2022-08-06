/* src/App.js */
import './App.css'
import './mint.css'

import { useState } from 'react'
import { create } from 'ipfs-http-client'

const client = create('https://ipfs.infura.io:5001/api/v0')

function App() {
  const [fileUrl, updateFileUrl] = useState(``)
  const [fileUrl2, updateFileUrl2] = useState(``)
  const [fileUrl3, updateFileUrl3] = useState(``)
  async function onChange(e) {
    const file = e.target.files[0]
    try { const added = await client.add(file) 
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
      name: "November 9",
      description: "Colleen Hoover's one-of-a-kind style of storytelling shines with November 9—a story about a boy and a girl who fall in love, one day at a time. ",
      image: fileUrl,
      pdf: fileUrl2,
      attributes: [
        {
          trait_type: "rating",
          value: "3.9"
        },
        {
          trait_type: "genre",
          value: "romance"
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
    //<>
      //<>
        //<span className="navdiv1">
          //<div id="mySidenav" className="sidenav">
            //<a href="javascript:void(0)" className="closebtn" onClick="closeNav()">&times;</a>
            //<a href="#" id="home">Home</a>
            //<a href="#">Writers</a>
            //<a href="#">Books</a>
            //<a href="#">Your Likes</a>
            //<a href="#">Best Of The Month</a>
            //<a href="#">NewBie Writer</a>
            //<a href="#">Special Edition</a>
          //</div>

          //<div className="leftpar">
            //<span className="sidenav1" onClick="openNav()"><a href="#" className="leftobj" /><img src="res/3lines.svg" /></span>
            //<span className="sidenav1"><a href="#" className="leftobj" /><img src="res/search.svg" /></span>
          //</div>


        //</span>
        //<div className="navdiv2"><a href="#" /><img src="res/Scribe.io.svg" /></div>
        //<div className="sangam">
          //<span className="navdiv3">
            //<a href="#" /><img src="res/cart.svg" />
          //</span>
          //<span className="navdiv3">
            //<a href="#" /><img src="res/idlogo.svg" />
          //</span>
        //</div>

        //<h2>Submit the file to mint as NFT</h2>
        //<div className="container">
          //<form>
            //<div className="row">
              //<div className="col-25">
                //<label for="fname">Title</label>
              //</div>
              //<div className="col-75">
                //<input type="text" id="fname" name="firstname" placeholder="Title" />
              //</div>
            //</div>
            //<div className="row">
              //<div className="col-25">
                //<label for="lname">Genre</label>
              //</div>

              //<div className="col-75">
                //<input type="text" id="lname" name="lastname" placeholder="Genre of Creation" />
              //</div>
            //</div>
            //<div className="row">
              //<div className="col-25">
                //<label for="lname">Tier </label>
              //</div>

              //<div className="col-75">
                //<input type="text" id="lname" name="lastname" placeholder="Type of Creation" />
              //</div>
            //</div>
            //<div className="row">
              //<div className="col-25">
                //<label for="email">E-Mail</label>
              //</div>
              //<div className="col-75">
                //<input type="email" id="email" name="mailid" placeholder="Your mail id.." />
              //</div>
            //</div>

            //<div className="row">
              //<div className="col-25">
                //<label for="country">Language</label>
              //</div>
              //<div className="col-75">
                //<select id="country" name="country">
                  //<option value="none">Select Language</option>
                  //<option value="English">English</option>
                  //<option value="Chinese">Chinese</option>
                  //<option value="French">French</option>
                  //<option value="Russian">Russian</option>
                  //<option value="Japanese">Japanese</option>
                  //<option value="Hindi">Hindi</option>
                  //<option value="Nepali">Nepali</option>
                //</select>
              //</div>
            //</div>

            //<div className="row">
              //<div className="col-25">
                //<label for="country">Country</label>
              //</div>
              //<div className="col-75">
                //<select id="country" name="country">
                  //<option value="none">Select Country</option>
                  //<option value="australia">Australia</option>
                  //<option value="canada">Canada</option>
                  //<option value="usa">USA</option>
                  //<option value="russia">Russia</option>
                  //<option value="japan">Japan</option>
                  //<option value="india">India</option>
                  //<option value="china">China</option>
                //</select>
              //</div>
            //</div>
            //<div className="row">
              //<div className="col-25">
                //<label for="feed_back">Choose a Coverfile </label>
                //<input type="file" id="myFile" name="filename" />
              //</div>
              //<div className="col-25">
                //<label for="feed_back">Choose PDF </label>
                //<input type="file" id="myFile" name="filename" />
              //</div>
              //<div className="col-7">
                //<input type="submit" />
              //</div>
            //</div>
          //</form>
        //</div>

      //</>
    //</>
  );
}

export default App

