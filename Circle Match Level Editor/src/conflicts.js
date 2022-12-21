let c = [
    // Layer 0
    ["**", "*0", "*1", "*2", "*3", "*4", "*5", "*/",
     "M1", "M2", "M3", "M4", "M5", "M6",
     "G1", "G2", "W1", "W2", "W3"],
    // Encasing blockers
    ["D1", "D2",
     "b1", "b2", "b3"],
    // Buttons
    ["B1", "B2", "B3"]
]

c.push(c[0].slice(7).concat(["*O","*-","*|","*+"]))

export default c;