import { useEffect } from "react";
import { useState } from "react";

function Levels(props) {
    const [handle, setHandle] = useState(null)
    const [levelNums, setLN] = useState([])

    useEffect(()=>{
        console.log(props.lns)
        setLN(props.lns)
    }, [props.lns])

    async function generateHandle() {
        let h = await window.showDirectoryPicker();
        setHandle(h);
        let numbers = [];
        // Get levels that exist.
        for await (const [n] of h.entries()) {
            if (n.slice(-5) !== ".json") continue;
            if (isNaN(Number(n.slice(0, -5)))) continue;
            if (Number(n.slice(0, -5)) > 0) numbers.push(Number(n.slice(0, -5)));
        }
        setLN(numbers.sort((a,b)=>a-b));
        props.slns(numbers.sort((a,b)=>a-b))
    }

    async function getLevelData(l) {
        for await (const [n, data] of handle.entries()) {
            if (n !== l+".json") continue;
            const fH = await data.getFile();
            const lD = JSON.parse(await fH.text());
            return lD;
        }
        return null;
    }

    function applySelectedLevel(o) {
        getLevelData(o).then((r)=>{
            props.sl(o);
            load(r);
        })
    }

    function load(d) {
        // Load various things of the data.
        props.sm({
            timed: !!d.time,
            timemove: d.time || d.moves,
            colours: d.colours,
            width: d.width || 9,
            height: d.height || 9,
            hard: ["Normal Level","Hard Level","Super Hard Level","Extremely Hard Level"][d.hard || 0],
            star1: d.targets[0],
            star2: d.targets[1],
            star3: d.targets[2],
            increaseColours: !!d.increaseColours,
            immediateShowdown: d.immediateShowdown ?? true
        });
        // Load goals.
        let go = [];
        for (let i of d.goals) {
            if (!i.type) return false;
            let g = {};
            g.type = i.type.replace(/_/g, ' ').split(" ").map(o=>o[0].toUpperCase()+o.slice(1)).join(" ");
            if (i.type === "metal_ball") g.type = "Metal Ball (L)";
            if (i.type === "watermelon") g.type = "Watermelon (L)";
            if (i.type==="button") g.optional = true;
            g.option = !!(!!g.optional && !!i.amount)
            if (i.type !== "score") g.amount = i.amount || 3
            go.push(g)
        }
        let editorTiles = [];
        let tiles = d.tilemap.map(o=>o.split(","));
        let tc = [];
        for (let i = 0; i < 499; i++) tc.push([null, null]);
        for (let y = 0; y < tiles.length; y++) {
            let xt = [];
            for (let x = 0; x < tiles[0].length; x++) {
                let tileC = tiles[y][x].match(/.{1,2}/g);
                let ti = [];
                for (let i = 0; i < tileC.length; i++) {
                    let t = tileC[i]
                    if (t[0] === "T") {
                        let tid = Number((t+tileC[i+1]).slice(1));
                        if (tid % 2 === 0) {
                            // Exit
                            console.log(tid)
                            tc[tid/2-1][1] = [x, y];
                        } else {
                            // Enter
                            tc[(tid-1)/2][0] = [x, y];
                        }
                        i++;
                        continue;
                    }
                      else if (t === "-O") ti.push("-O");
                      else if (t !== "--") ti.push(tileC[i]);
                }
                let z = ti.sort(((a,b) => (a[0]==="B" ? -2 : 
                ("D1,D2,b1,b2,b3".split(",").includes(a) ? 2 :
                ("G-".split(".").includes(a) ? -1 : 0)))));
                z = z.sort(((a,b) => -1*(b[0]==="B" ? -2 : 
                ("D1,D2,b1,b2,b3".split(",").includes(b) ? 2 :
                ("G-".split(".").includes(b) ? -1 : 0)))));
                xt.push(z)
            }
            editorTiles.push(xt);
        }
        props.sg(go);
        props.st(editorTiles);
        props.sc(d.cannons || [])
        let teleporters = [];
        for (let i = 0; i < tc.length; i++) {
            if (tc[i][0] && tc[i][1]) teleporters.push({from: [...tc[i][0]].map(o=>o+1), to: [...tc[i][1]].map(o=>o+1)})
        }
        props.steles(teleporters);
    }

    function makeLevelButtons() {
        let comps = levelNums.map(o => <button 
            className={props.l === o ? "LNButton LNSel" : "LNButton"}
            key={o}
            onClick={() => applySelectedLevel(o)}
        >{o}</button>)
        return comps;
    }

    return (
        <div className="Levels">
            <b>Levels</b>
            <button className="LevelsButton" onClick={generateHandle}>
                Select Level Folder
            </button>
            <button className="LevelsButton" onClick={()=>{
                let t = [];
                for (let i = 0; i < 9; i++) {
                    let l = [];
                    for (let j = 0; j < 12; j++) l.push([]);
                    t.push(l)
                }
                props.st(t);
                props.steles([]);
                props.sg([]);
                props.sl(Math.max(...levelNums)+1);
            }}>
                Create New Level
            </button>
            <div id="LNDiv">
                {levelNums.length > 0 ? makeLevelButtons() : (handle ? "There are no levels! Create one!" : "Select a folder to get started!")}
            </div>
        </div>
    )
}

export default Levels;