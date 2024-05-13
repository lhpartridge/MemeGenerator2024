import { useState, useEffect } from "react"
import axios from 'axios'

// import memesData from "../memesData"

const Meme =()=> {

    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        randomImage: 'http://i.imgflip.com/1bij.jpg'
    })

    const [allMemes, setAllMemes] = useState({})

    useEffect(()=> {
        axios.get('https://api.imgflip.com/get_memes')
            .then(data => {
                setAllMemes(data.data)
            })
    }, [])

    // console.log(allMemes)

    const getMeme =()=> {
            const memes = allMemes.data.memes
            let idx = Math.floor(Math.random() * memes.length)

        setMeme(prevState => ({
            ...prevState, 
            randomImage: memes[idx].url
        }))
    }
    
    const handleChange=(event)=> {
        const { name, value } = event.target
        setMeme(prevState => ({
            ...prevState, 
            [name]: value
        }))
    }

    return(
        <>
            <main className="main">
                <section className="section meme-section">
                    <div className="container">
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="topText" className="form-label">Top Text</label>
                                    <input 
                                        id="topText"
                                        type="text" 
                                        placeholder="Shut up"
                                        name="topText"
                                        onChange={handleChange}
                                        value={meme.topText}
                                        className="form-control text-1"
                                    />
                                </div>
                                <div className="col">
                                    <label htmlFor="bottomText" className="form-label">Bottom Text</label>
                                    <input 
                                        id="bottomText"
                                        type="text"
                                        placeholder="and take my money"
                                        name="bottomText"
                                        value={meme.bottomText}
                                        onChange={handleChange}
                                        className="form-control text-2"
                                    />
                                </div>
                                <div className="row">
                                    <div className="d-grid">
                                        <button
                                            className="btn submit-btn form-button"
                                            type="button"
                                            onClick={ getMeme }
                                            >Get a new meme image</button>
                                    </div>
                                </div>
                            </div>
                                <div className="meme-img-div">
                                    <img 
                                        src={meme.randomImage}
                                        alt="meme image" 
                                        className="img-fluid image meme-img rounded" 
                                    />
                                    <h2 className="meme-text top">{meme.topText}</h2>
                                    <h2 className="meme-text bottom">{meme.bottomText}</h2>
                                </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Meme