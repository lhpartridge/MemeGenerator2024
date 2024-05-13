import memesData from "../memesData"
import { useState } from "react"

const Meme =()=> {

    // const handleClick =()=> {
    //     console.log("I was clicked!")
    // }
    // let [ url, setUrl ] = useState('')
    //"http://i.imgflip/lbij.jpg"


    
    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        randomImage: 'http://i.imgflip.com/1bij.jpg'
    })


    const [allMemeImages, setAllMemeImages] = useState(memesData)

    const getMeme =()=> {

        // setUrl(prevState => {
        //     // console.log('clicked')
            const memes = allMemeImages.data.memes
            let idx = Math.floor(Math.random() * memes.length)
        //     url = `${memes[idx].url}`
        //     // console.log(url)
        //     return url
        // })
        // setMemeImage(memes[idx].url)
        setMeme({
            ...meme, 
            randomImage: memes[idx].url
        })
    }
    
    // getMeme()
    // console.log(memeImgUrl)

    // const mouseOver =()=> {
    //     console.log("Mouse hovered!")
    // }

    return(
        <>
            <main className="main">
                <section className="section meme-section">
                    <div className="container">
                        {/* <form className="form meme-form"> */}
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="topText" className="form-label">Top Text</label>
                                    <input 
                                        type="text" 
                                        placeholder="Shut up"
                                        className="form-control text-1"
                                        id="topText"
                                    />
                                </div>
                                <div className="col">
                                    <label htmlFor="bottomText" className="form-label">Bottom Text</label>
                                    <input 
                                        type="text"
                                        placeholder="and take my money"
                                        className="form-control text-2"
                                        id="bottomText"
                                    />
                                </div>
                                <div className="row">
                                    <div className="d-grid">
                                        <button
                                            className="btn submit-btn form-button"
                                            type="button"
                                            // onClick={ handleClick }
                                            onClick={ getMeme }
                                            >Get a new meme image</button>
                                    </div>
                                </div>
                            </div>
                                <div className="meme-img-div">
                                    <img 
                                        // src={url} 
                                        // src={memeImage}
                                        src={meme.randomImage}
                                        alt="meme image" 
                                        className="img-fluid image meme-img rounded" 
                                        // onMouseOver={ mouseOver }
                                    />
                                </div>
                        {/* </form> */}
                    </div>
                </section>
            </main>
        </>
    )
}

export default Meme