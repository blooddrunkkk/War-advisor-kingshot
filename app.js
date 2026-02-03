function analyze() {
  const duration = document.getElementById("duration").value;
  const frontline = document.getElementById("frontline").checked;
  const lowDps = document.getElementById("lowDps").checked;
  const enemyControl = document.getElementById("enemyControl").checked;

  let result = {
    name: "Thurd",
    why: "Balanced pressure suitable for even fights."
  };

  if (frontline) {
    result = {
      name: "Long Fei",
      why: "Frontline collapsed early. Damage reduction and survivability stabilize the fight."
    };
  } else if (lowDps && duration === "LONG") {
    result = {
      name: "Viviane",
      why: "Enemy frontline sustains too well. Vulnerability debuff scales better than raw attack."
    };
  } else if (enemyControl) {
    result = {
      name: "Long Fei",
      why: "Heavy control detected. Anti-control restores attack rhythm and skill procs."
    };
  }

  document.getElementById("result").innerHTML = `
    <h3>⭐ Recommended</h3>
    <strong>${result.name}</strong>
    <p>${result.why}</p>
  `;
}
