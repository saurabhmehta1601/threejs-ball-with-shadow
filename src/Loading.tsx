import { Html, useProgress } from '@react-three/drei'
import React from 'react'

const styles = {
    display: "grid", placeItems: "center", backgroundColor: "#2d2b2b", width: "100vw", height: "100vh"
}

const Loading = () => {
    const { active, progress, errors, item, loaded, total } = useProgress()
    console.log("progess", progress)
    return <Html center style={styles}>
        <div>
            <div style={{ height: "12px", width: "20vw", backgroundColor: "#fff", borderRadius: "12px", position: "relative", overflow: "hidden", borderWidth: "0" }}>
                <div style={{ position: "absolute", top: 0, left: 0, height: "125%", width: `${progress}%`, backgroundColor: "#018de4", borderWidth: "0" }}></div>
            </div>
            <h2 style={{ textAlign: "center", margin: "0.5em", color: "#fff" }}>{progress} %</h2>

        </div>
    </Html>
}

export default Loading