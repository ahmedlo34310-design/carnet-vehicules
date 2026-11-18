const vehicules = [
    { marque: "Toyota", modele: "Hilux" }
];

const liste = document.getElementById("liste");
vehicules.forEach(v => {
    const li = document.createElement("li");
    li.textContent = v.marque + " " + v.modele;
    liste.appendChild(li);
});
const vehicules = [
    { marque: "Toyota", modele: "Hilux" },
    { marque: "Nissan", modele: "Patrol" }
];