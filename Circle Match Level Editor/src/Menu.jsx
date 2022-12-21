import { useEffect, useState } from "react";
import tooltips from "./Tooltips";
import conflictingTiles from "./conflicts"

function Menu(props) {
    const [menuState, setMS] = useState({
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

    let [R, setR] = useState(0)

    const [goals, setGoals] = useState([]);
    const [teleporters, setTeles] = useState([]);
    const [cannons, setCannons] = useState([]);

    function handleChange(c, v, isCheckbox) {
        let MS = { ...menuState };
        MS[c] = isNaN(Number(v)) || isCheckbox ? v : Number(v);
        setMS(MS);
        props.sm(MS);
    }

    function makeSec(name) {
        return <b style={{
            fontWeight: 700,
            fontSize: "40px",
            margin: "10px"
        }}>{name}</b>
    }

    function makeField(name, type, p) {
        let items = [];
        switch (type) {
            case "checkbox":
                // Extra params: dc
                items.push(<div>
                    <label htmlFor="input" className="MenuAreaLabel">{name}<input type="checkbox" className="MenuAreaField"
                        onChange={(e) => handleChange(p.code, e.target.checked, true)} checked={menuState[p.code]} /></label>
                </div>);
                return <div className="MenuArea">{items}</div>;
            case "num":
                // Extra params: min, max, step, code, width
                items.push(<div>
                    <label htmlFor="quantity" className={"MenuAreaLabel"}>{name}<input type="number"
                        className={"MenuAreaField"} onChange={(e) => handleChange(p.code, e.target.value)}
                        min={p.min} max={p.max} step={p.step} value={menuState[p.code]} style={{
                            width: p.width + "%"
                        }} /></label>
                </div>);
                return <div className="MenuArea">{items}</div>;
            case "dropdown":
                // Extra params: options, styled
                let options = [];
                for (let i = 0; i < p.options.length; i++) {
                    let option = p.options[i];
                    let style = null;
                    if (p.styled) style = p.styled[i];
                    options.push(<option style={{
                        backgroundColor: style,
                        color: p.outlineStyled[i]
                    }}>{option}</option>)
                }
                items.push(<div>
                    <label htmlFor="quantity" className="MenuAreaLabel">{name}
                        <select
                            className="MenuAreaField" onChange={(e) => handleChange(p.code, e.target.value)}
                            value={menuState[p.code]} style={{
                                width: p.width + "%"
                            }}>
                            {options}
                        </select>
                    </label>
                </div>);
                return <div className="MenuArea">{items}</div>;
        }
    }
    function makeSpecial(spec) {
        let items = [];
        switch (spec) {
            case "wh":
                return <div className="MenuWHField MenuAreaEDLabel">
                    <label htmlFor="quantity">Width<input type="number" className="MenuWHFieldNum"
                        onChange={(e) => handleChange("width", e.target.value)}
                        min={1} max={12} step={1} value={menuState.width} style={{
                            width: "16%"
                        }} /></label>
                    <label htmlFor="quantity" id="MenuHeight">Height<input type="number" className="MenuWHFieldNum"
                        onChange={(e) => handleChange("height", e.target.value)}
                        min={1} max={9} step={1} value={menuState.height} style={{
                            height: "16%"
                        }} /></label>
                </div>
            default: return <></>
        }
    }

    function addGoal() {
        // Create a goal.
        let oldGoals = [...goals];
        oldGoals.push({
            type: "score"
        });
        setGoals(oldGoals)
        props.sg(oldGoals)
    }

    function addTele() {
        // Create a teleporter.
        let oldTeles = [...teleporters];
        oldTeles.push({
            from: [1, 1],
            to: [9, 9]
        });
        setTeles(oldTeles);
        props.steles(oldTeles);
    }

    function addCannonData() {
        // Create cannon data.
        let c = [...cannons];
        c.push({
            type: "watermelon",
            layer: 1,
            max: 5
        });
        setCannons(c);
        props.sc(c);
    }

    function removeGoal(i) {
        // Remove the goal.
        let oldGoals = [...goals];
        oldGoals.splice(i, 1);
        setGoals(oldGoals)
        props.sg(oldGoals)
    }

    function removeTele(i) {
        // Remove the goal.
        let oldTeles = [...teleporters];
        oldTeles.splice(i, 1);
        setTeles(oldTeles)
        props.steles(oldTeles);
    }

    function removeCannon(i) {
        // Remove the cannon data.
        let c = [...cannons];
        c.splice(i, 1);
        setCannons(c)
        props.sc(c);
    }

    function changeGoalAttribute(n, attrib, to, c) {
        let g = [...goals];
        if (c) g[n][attrib] = !g[n][attrib];
        g[n][attrib] = typeof to !== "number" ? to : Number(to);
        const optionalAmount = ["button"];
        const noAmount = ["score"];
        if (attrib === "type") {
            g[n].optional = optionalAmount.includes(to.toLowerCase());
            g[n].option = false;
            if (noAmount.includes(to.toLowerCase())) g[n].amount = null;
            if (!g[n].amount && g[n].optional) g[n].amount = 3;
            else if (!optionalAmount.includes(to.toLowerCase()) && !g[n].amount) g[n].amount = 3;
        }
        setGoals(g);
        props.sg(g);
    }

    function changeTeleAttribute(n, attrib, to, c) {
        let g = [...teleporters];
        let prop = attrib.slice(0,-1);
        console.log(g, prop)
        let t = g[n][prop];
        t[Number(attrib[attrib.length-1])] = Number(to);
        g[n][prop] = t;
        setTeles(g);
        props.steles(g);
    }

    function changeCAttribute(n, attrib, to) {
        let g = [...cannons];
        g[n][attrib] = attrib === "type" ? to : Number(to);
        setCannons(g);
        props.sc(g);
    }

    function getC(t) {
        t = t.toLowerCase();
        if (t === "score") return "#ff9999";
        if (t === "button") return "#99ddff";
        if (t === "globe") return "#99ffcc";
        return "#ff77ff";
    }

    function makeTeleporters() {
        let items = [];
        // Make an Add Goal button.
        items.push(<button id="MenuGoalAdd" onClick={addTele} key={0}>
            Add Teleporter
        </button>)

        for (let i = 0; i < teleporters.length; i++) {
            let teleporter = teleporters[i]
            let teleItems = [];
            teleItems.push(<button className="MenuGoalRemove" onClick={() => removeTele(i)}>×</button>)
            teleItems.push(<div>
                <label htmlFor="quantity" className={"MenuAreaLabel"}>From
                        <input type="number"
                            className={"MenuTele"} onChange={(e) => changeTeleAttribute(i, "from1", e.target.value)}
                            min={1} max={menuState.height} step={1} value={teleporter.from[1]} style={{
                                width: "40%"
                            }} />
                        <input type="number"
                            className={"MenuTele"} onChange={(e) => changeTeleAttribute(i, "from0", e.target.value)}
                            min={1} max={menuState.width} step={1} value={teleporter.from[0]} style={{
                                width: "40%"
                            }} />                                     </label>
            </div>);
            teleItems.push(<div>
                <label htmlFor="quantity" className={"MenuAreaLabel"}>To
                        <input type="number"
                            className={"MenuTele"} onChange={(e) => changeTeleAttribute(i, "to1", e.target.value)}
                            min={1} max={menuState.height} step={1} value={teleporter.to[1]} style={{
                                width: "40%"
                            }} />
                        <input type="number"
                            className={"MenuTele"} onChange={(e) => changeTeleAttribute(i, "to0", e.target.value)}
                            min={1} max={menuState.width} step={1} value={teleporter.to[0]} style={{
                                width: "40%"
                            }} />                                     </label>
            </div>);
            items.push(<div key={i + 1} className="MenuGoal" style={{
                height: "15%"
            }}>
                {teleItems}
            </div>);
        }

        return items;
    }

    function makeGoals(go) {
        go = goals;
        let items = [];
        // Make an Add Goal button.
        items.push(<button id="MenuGoalAdd" onClick={addGoal} key={0}>
            Add Goal
        </button>)
        // Render the goals.
        const gt = `Score,Button,Globe,Red Circle,Orange Circle,Yellow Circle,Green Circle,
                    Blue Circle,Purple Circle,Striped Circle,Radial Circle,Rainbow Circle,Metal Ball (L),Watermelon (L)`
            .split(",")
        for (let i = 0; i < go.length; i++) {
            let goal = go[i];
            let goalTypes = [];
            let goalItems = [];
            for (let j = 0; j < gt.length; j++) goalTypes.push(<option key={j} style={{
                backgroundColor: getC(gt[j]),
                color: "black"
            }}>{gt[j]}</option>)
            goalItems.push(<button className="MenuGoalRemove" onClick={() => removeGoal(i)}>×</button>)
            goalItems.push(<label className="MenuAreaLabel">Type
                <select
                    className="MenuAreaField" onChange={(e) => changeGoalAttribute(i, "type", e.target.value)}
                    value={goal.type} style={{
                        width: "62%"
                    }}>
                    {goalTypes}
                </select>
            </label>
            )
            goalItems.push(<div style={{ fontSize: "12px", wordSpacing: "2px", lineHeight: 1 }}>{tooltips.goals[goal.type.toLowerCase()]}</div>)
            if (goal.optional) goalItems.push(<div>
                <label htmlFor="input" className={"MenuAreaLabel"}>Specific?<input type="checkbox"
                    className={"MenuAreaField"} onChange={(e) => changeGoalAttribute(i, "option", e.target.checked, true)}
                    min={1} max={Infinity} step={1} checked={goal.option} style={{
                        width: "40%"
                    }} /></label>
            </div>);
            if (goal.amount) goalItems.push(<div>
                <label htmlFor="quantity" className={"MenuAreaLabel"}>Amount<input type="number"
                    className={"MenuAreaField"} onChange={(e) => changeGoalAttribute(i, "amount", e.target.value)}
                    min={1} max={Infinity} step={1} value={goal.amount} disabled={goal.optional && !goal.option} style={{
                        width: "40%"
                    }} /></label>
            </div>);
            items.push(
                <div key={i + 1} className="MenuGoal" style={{
                    height: ((goal.optional ? 18 : (goal.amount ? 10 : 5)) + 7) + "%"
                }}>
                    {goalItems}
                </div>);
        }
        return items;
    }

    function makeCannons() {
        let items = [];
        // Make an Add Goal button.
        items.push(<button id="MenuGoalAdd" onClick={addCannonData} key={0}>
            Add Cannon Data
        </button>)
        // Render the goals.
        const gt = `Watermelon`
            .split(",")
        for (let i = 0; i < cannons.length; i++) {
            let c = cannons[i];
            let cItems = [];
            let goalTypes = [];
            for (let j = 0; j < gt.length; j++) goalTypes.push(<option key={j} style={{
                backgroundColor: "white",
                color: "black"
            }}>{gt[j]}</option>)
            cItems.push(<button className="MenuGoalRemove" onClick={() => removeCannon(i)}>×</button>)
            cItems.push(<label className="MenuAreaLabel">Type
                <select
                    className="MenuAreaField" onChange={(e) => changeGoalAttribute(i, "type", e.target.value)}
                    value={c.type} style={{
                        width: "62%"
                    }}>
                    {goalTypes}
                </select>
            </label>
            )
            cItems.push(<div>
                <label htmlFor="input" className={"MenuAreaLabel"}>Maximum<input type="number"
                    className={"MenuAreaField"} onChange={(e) => changeCAttribute(i, "max", e.target.value)}
                    min={1} max={Infinity} step={1} value={c.max} style={{
                        width: "30%"
                    }} /></label>
            </div>);
            if (c.layer) cItems.push(<div>
                <label htmlFor="quantity" className={"MenuAreaLabel"}>Layer<input type="number"
                    className={"MenuAreaField"} onChange={(e) => changeCAttribute(i, "layer", e.target.value)}
                    min={1} max={10} step={1} value={c.layer} style={{
                        width: "20%"
                    }} /></label>
            </div>);
            items.push(
                <div key={i + 1} className="MenuGoal" style={{
                    height: "25%"
                }}>
                    {cItems}
                </div>);
        }
        return items;
    }

    useEffect(() => {
        setMS(props.m)
        setGoals(props.g)
        setR(r => r + 1);
        setTeles(props.teles);
        setCannons(props.c)
        return () => { };
    }, [props.l, menuState, props.m, props.g, props.teles, props.c]);

    function saveLevel() {
        // Make basic metadata.
        let data = {
            moves: props.m.timed ? undefined : props.m.timemove,
            time: props.m.timed ? props.m.timemove : undefined,
            targets: [props.m.star1, props.m.star2, props.m.star3],
            width: props.m.width === 9 ? undefined : props.m.width,
            height: props.m.height === 9 ? undefined : props.m.height,
            colours: props.m.colours,
            hard: Math.max(0,"Normal Level,Hard Level,Super Hard Level,Extremely Hard Level".split(",").indexOf(props.m.hard)),
            immediateShowdown: !props.m.immediateShowdown ? false : undefined,
            increaseColours: props.m.increaseColours ? true : undefined
        }
        // Goals!
        let goals = props.g
        let dataGoals = goals.map(o=>({
            type: o.type.toLowerCase() === "metal ball (l)" ? "metal_ball" : (o.type.toLowerCase() === "watermelon (l)" ? "watermelon" : o.type.replace(/ /g, '_').toLowerCase()),
            amount: (o.optional ? (o.option ? Number(o.amount) : null) : Number(o.amount) || null)
        }));
        data.goals = dataGoals;
        // Tiles.
        let tilemap = [];
        for (let y = 0; y < props.m.height; y++) {
            let row = [];
            for (let x = 0; x < props.m.width; x++) {
                let tile = props.t[y][x];
                let o = "";
                if (tile.length === 0) o = "--"                             // None
                else o = tile.join("");
                if (!tile.some(o=>conflictingTiles[0].includes(o) || conflictingTiles[3].includes(o) ||
                    o === "-O") && tile.length > 0) 
                            o += "-O";
                for (let te in teleporters) {
                    let t = teleporters[te]
                    if (t.from[0]===x+1&&t.from[1]===y+1) {
                        o += "T"+"000".slice(String(te*2+1).length)+String(te*2+1)
                    }
                    if (t.to[0]===x+1&&t.to[1]===y+1) {
                        o += "T"+"000".slice(String(te*2+2).length)+String(te*2+2)
                    }
                }
                row.push(o)
            }
            tilemap.push(row.join(","))
        }
        data.tilemap = tilemap;
        data.cannons = cannons;
        // Allow thr user to save!
        const picker = window.showSaveFilePicker({
            suggestedName: props.l+".json",
            types: [
                {
                    description: "Circle Match Level",
                    accept: {
                        "application/json": [".json"]
                    }
                }
            ]
        });
        picker.then(async o=>{
            const file = await o.createWritable();
            await file.write(JSON.stringify(data));
            await file.close();
            // Add to levelNums.
            console.log(props.l, props.lns)
            if (!props.lns.includes(props.l)) {
                let m = props.lns;
                m.push(props.l);
                console.log(m)
                props.slns(m);
            }
        })
    }

    return (
        <div className="Menu">
            <b>Menu</b>
            <br />
            {(!props.l) ? "Select a level!" : <>
                <div>{"Level " + props.l}</div>
                <button id="MenuGoalAdd" onClick={saveLevel} key={0}>
            Save Level
        </button>
                {makeSec("Properties")}
                {makeField("Timed?", "checkbox", { code: "timed", dc: false })}
                {makeField(menuState.timed ? "Time (seconds)" : "Moves", "num", { min: 1, max: Infinity, step: 1, value: 30, width: 20, code: "timemove" })}
                {makeField("Number of Colours", "num", { min: 1, max: 6, step: 1, value: 4, width: 13, code: "colours" })}
                {makeSpecial("wh")}
                {makeField("Difficulty", "dropdown", {
                    options: ["Normal", "Hard Level", "Super Hard Level", "Extremely Hard Level"], styled: ["#999999", "#ff8800", "#ff0033", "#333333"],
                    outlineStyled: ["black", "black", "white", "white"], width: 56, code: "hard"
                })}

                {makeField(<><strong style={{ color: "#ff3333" }}>★ </strong>Target</>, "num", { min: 1, max: Infinity, step: 1, value: 10000, width: 50, code: "star1" })}
                {makeField(<><strong style={{ color: "#22bb22" }}>★ </strong>Target</>, "num", { min: 1, max: Infinity, step: 1, value: 20000, width: 50, code: "star2" })}
                {makeField(<><strong style={{ color: "#ffbb00" }}>★ </strong>Target</>, "num", { min: 1, max: Infinity, step: 1, value: 30000, width: 50, code: "star3" })}
                {makeField("Increase colours?", "checkbox", { code: "increaseColours", dc: false })}
                {makeField("Immediate showdown?", "checkbox", { code: "immediateShowdown", dc: true })}
                {makeSec("Goals")}
                {makeGoals(goals)}
                {makeSec("Cannons")}
                {makeCannons()}
                {makeSec("Teleporters")}
                {makeTeleporters()}
            </>
            }
        </div>
    )
}

export default Menu;