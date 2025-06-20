import React from 'react'

const Background = () => {
    return (
        <div
            className="fixed top-0 left-0 w-full h-screen z-[-1]"
            style={{
                backgroundImage: "url('/background.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
            }}
        />
    )
}

export default Background