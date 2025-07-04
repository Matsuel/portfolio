import React from 'react'

const Background = () => {
    return (
        <div
            className="fixed top-0 left-0 w-full h-screen z-[-1]"
        >
            <div
                className='xl:bg-center bg-left'
                style={{
                    backgroundImage: "url('/wallpaper.webp')",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    top: 0,
                    left: 0,
                }}
            />
            <div
                style={{
                    background: "rgba(0,0,0,0.5)", // plus on se rapproche de 0, plus la luminosité est élevée
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    top: 0,
                    left: 0,
                }}
            />
        </div>
    )
}

export default Background