import { useState } from "react";
import tabTiles from "./tabTiles.js";
import PaletteTile from "./PaletteTile.jsx"

function Palette(props) {
    const [currentTab, setTab] = useState(null);
    const [sel, setSel] = useState(null);
    const [clickHistory, setCH] = useState([]);

    function makeTabs() {
        const tabs = "Circles,Blockers,Misc,Cannons,All";
        return tabs.split(",").map((o, i) =>
            <button className="PaletteTab" id={"Palette" + o + "Tab"} key={i} onClick={() => setTab(o)}>
                {tabTiles[o.toLowerCase()].name}
            </button>)
    }

    function showItems(t) {
        if (!t) return <></>;
        const sec = tabTiles[t.toLowerCase()];
        const title = sec?.name;
        let items = [];
        // Palette > Tab > Section > Tile
        // Make sections.
        let i = 0;
        if (t !== "Recently Used Tiles")
            for (let s in sec) {
                if (s === "name") continue;
                const name = sec[s].name;
                let item = [];
                const tiles = sec[s].tiles;
                let j = 0;
                for (let it of tiles) {
                    if (it[0] === "?" || it.length > 2) continue;
                    item.push(<PaletteTile code={it} key={j} sel={sel} setsel={setSel} setselapp={props.ss} rut={clickHistory} setrut={setCH} />)
                    j++;
                }
                items.push(<div key={i} className="PaletteSectionA">
                    <div>{name}</div><div>{item}</div>
                </div>);
                i++;
            }
        else {
            let item = [];
            let i = 0;
            let done = [];
            for (let it of clickHistory.reverse()) {
                if (it === "??" || done.includes(it)) continue;
                done.push(it)
                i++;
                item.push(<PaletteTile code={it} key={i} sel={sel} setsel={setSel} rut={clickHistory} setrut={setCH} />)
            }
            items.push(<div key={i}>
                <div></div><div>{item}</div>
            </div>);
        }

        return (
            <>
                <b className="PaletteTabTitle">{title}</b>
                <div>
                {items}
                </div>
            </>
        )
    }

    return (
        <div className="PaletteDiv">
            <b>Palette</b>
            <div className="PaletteStuff">
                <div className="PaletteItems">
                    {showItems(currentTab)}
                </div>
                <div className="PaletteTabs">
                    {makeTabs()}
                    <b style={{
                        fontSize: "14px",
                        textAlign: "right",
                        float: "right",
                        marginRight: "3px"
                    }}>v1.0</b>
                </div>
            </div>
        </div>
    )
}

export default Palette;