import Levels from "./Levels.jsx";
import Palette from "./Palette.jsx";
import Menu from "./Menu.jsx";
import Board from "./Board.jsx";
import Tiles from "./Tiles.jsx";

import { useState } from "react";

function App() {
	const [level, setLevel] = useState(null);
	const [selected, setSelected] = useState(null);
	let t = [];
    for (let i = 0; i < 9; i++) {
        let l = [];
        for (let j = 0; j < 12; j++) l.push(["**"]);
        t.push(l)
    }
	const [tiles, setTiles] = useState(t);
	const [g, setG] = useState([]);
	const [teles, setTeles] = useState([]);
	const [c, setC] = useState([]);
	const [ts, setTS] = useState(null);
	const [lns, setLNS] = useState([]);
	const [menuS, setMs] = useState({
        timed: false,
        timemove: 30,
        colours: 4,
        width: 9,
        height: 9,
        hard: "Normal Level",
        star1: 10000,
        star2: 20000,
        star3: 30000,
        increaseColours: false,
        immediateShowdown: true
    });
	return (
		<>
			<Palette ss={setSelected}/>
			<>
			<Menu  l={level} sm={setMs} m={menuS} g={g} sg={setG} teles={teles} steles={setTeles} t={tiles} lns={lns} slns={setLNS} sc={setC} c={c}/> 
			<Board s={selected} m={menuS} l={level} st={setTiles} t={tiles} teles={teles} ts={ts} sts={setTS}/>
			</>
			<>
				<Levels l={level} sl={setLevel} st={setTiles} sm={setMs} sg={setG} steles={setTeles} slns={setLNS} lns={lns} sc={setC}/>
				<Tiles ts={ts} t={tiles} st={setTiles} sts={setTS} ss={setSelected} s={selected}/> 
			</>
		</>
	)
}

export default App;
