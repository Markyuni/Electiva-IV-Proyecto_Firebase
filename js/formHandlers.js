import { db, doc, setDoc } from "/js/firebase.js";
import { populateCamisas, populatePantalones, populateTiposC, populateTiposP } from "./populate.js";

// Handle camisa form submission
try {
  document.getElementById("camisa-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const camisaColor = document.getElementById("camisa-color").value;
    const camisaTipo = document.getElementById("camisa-tipo").value;
    const camisaPrecio = document.getElementById("camisa-precio").value;
    const docRef = doc(db, "camisas", camisaColor);

    await setDoc(docRef, {
      color: camisaColor,
      tipo: camisaTipo,
      precio: camisaPrecio
    });
    
    document.getElementById("camisa-form").reset();
    populateCamisas(); // Repopulate camisas after a new one is added
  });
} catch (error) {}

// Handle pantalon form submission
try {
  document.getElementById("pantalon-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const pantalonColor = document.getElementById("pantalon-color").value;
    const pantalonTipo = document.getElementById("pantalon-tipo").value;
    const pantalonPrecio = document.getElementById("pantalon-precio").value;
    const docRef = doc(db, "pantalones", pantalonColor);

    await setDoc(docRef, {
      color: pantalonColor,
      tipo: pantalonTipo,
      precio: pantalonPrecio
    });
    
    document.getElementById("pantalon-form").reset();
    populatePantalones(); // Repopulate pantalones after a new one is added
  });
} catch (error) {}

// Handle tipoC form submission
try {
  document.getElementById("tipoC-form").addEventListener("submit", async (e) => {
      e.preventDefault();
      const tipoCNombre = document.getElementById("tipoC-nombre").value;
      const docRef = doc(db, "tiposC", tipoCNombre);
      await setDoc(docRef, { nombre: tipoCNombre });
      document.getElementById("tipoC-form").reset();
      populateTiposC(); // Repopulate tiposC after a new one is added
    });
} catch (error) {}

// Handle tipoP form submission
try {
  document.getElementById("tipoP-form").addEventListener("submit", async (e) => {
      e.preventDefault();
      const tipoPNombre = document.getElementById("tipoP-nombre").value;
      const docRef = doc(db, "tiposP", tipoPNombre);
      await setDoc(docRef, { nombre: tipoPNombre });
      document.getElementById("tipoP-form").reset();
      populateTiposP(); // Repopulate tiposC after a new one is added
    });
} catch (error) {}