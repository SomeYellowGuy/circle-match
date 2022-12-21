import at from "./aliasTiles.js";
import { useState, useEffect } from "react";

function PaletteTile(props) {
    const [src, setSRC] = useState("");
    const [chosen, setChosen] = useState(false);

    function getDimensions(code) {
        const flatat = at.flat();
        let index = flatat.indexOf(code);
        if (index === -1) index = 8;
        let x = index % 8;
        let y = Math.floor(index / 8);
        return { x: x * 64, y: y * 64, w: 64, h: 64, i: index }
    }

    const d = getDimensions(props.code);

    useEffect(()=>{
        setChosen(props.sel === props.code);
    }, [props.sel])

    useEffect(() => {
        const canvas = document.createElement("canvas");
        canvas.width = 32;
        canvas.height = 32;
        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let image = new Image();
        image.src = "./tiles.png";
        ctx.drawImage(image, d.x, d.y, d.w, d.h, 0, 0, 32, 32);
        setSRC(canvas.toDataURL());

    }, [d.x, d.y, d.w, d.h, src])

    return <button key={d.i} className="PaletteButton" onClick={()=>{props.setsel(props.code); props.setselapp(props.code); props.setrut(props.rut.concat(props.code))}} style={{
        outline: chosen ? "2px solid rgba(0,0,0,0.4)" : "0",
        borderRadius: chosen ? "2px" : "0"
    }}>
        <img src={src} alt={props.code}/>
    </button>
}

export default PaletteTile;