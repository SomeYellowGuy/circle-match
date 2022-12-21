import { useEffect } from "react";
import names from "./names.js"

function Tiles(props) {

    function removeTile(x, y, t) {
        let tiles = props.t;
        let tile = tiles[y]?.[x];
        tile = tile.filter(o=>o!==t);
        tiles[y][x] = tile;
        props.st(tiles);
    }

    function showTiles(t) {
        if (!t) return;
        let x = t[0];
        let y = t[1];
        if (!props.t[y]?.[x]) return;
        let tile = props.t[y]?.[x];
        let items = [];
        for (let t of tile) {
            items.push(<div className="TilesTile" key={t} style={{
                fontSize: "24px",
                fontWeight: "500"
            }}>
                {names[t] || "?"}
                <button className="MenuGoalRemove TilesRemove" onClick={() => removeTile(x, y, t)}>×</button>
            </div>)
        }
        return items;
    }

    return <div className="Tiles">
        <b>Tiles</b>
        <div id="TilesButtonsDiv">
            <button className="TilesDeselect" onClick={() => props.sts(null)}>Deselect Tile</button>
            <button className="TilesDeselect" onClick={() => props.ss(null)}>Deselect Palette Selection</button>
        </div>
        {showTiles(props.ts)}
    </div>
}

export default Tiles;