import { db, getDocs, collection } from "./firebase.js";

// Function to populate products


// Function to populate camisas
export async function populateCamisas() {
  const camisasSnapshot = await getDocs(collection(db, "camisas"));
}

// Function to populate pantalones
export async function populatePantalones() {
  const pantalonesSnapshot = await getDocs(collection(db, "pantalones"));
}

// Function to populate tiposC
export async function populateTiposC() {
  
  const tiposCSnapshot = await getDocs(collection(db, "tiposC"));
  const tipoCSelect = document.getElementById("camisa-tipo");
  tiposCSnapshot.forEach((doc) => {
    const option = document.createElement("option");
    option.text = doc.data().nombre;
    option.value = doc.id;
    tipoCSelect.add(option);
  });
}

//Function to populate tiposP
export async function populateTiposP() {
  
  const tiposPSnapshot = await getDocs(collection(db, "tiposP"));
  const tipoPSelect = document.getElementById("pantalon-tipo");
  tiposPSnapshot.forEach((doc) => {
    const option = document.createElement("option");
    option.text = doc.data().nombre;
    option.value = doc.id;
    tipoPSelect.add(option);
  });
}