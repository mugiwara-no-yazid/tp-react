import { useState } from "react";
import ListeContact from "./listeContact";


const styles = {
  container: {
    maxWidth: "400px",
    margin: "50px auto",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    backgroundColor: "#fff",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    textAlign: "center" as const,
    color: "#333",
  },
  form: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "15px",
  },
  input: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  button: {
    padding: "12px",
    backgroundColor: "#ff4757",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold" as const,
    fontSize: "16px",
  },
  error: {
    color: "red",
    fontSize: "14px",
    margin: "0",
  },
};

export interface Contact {
  [id: string]: {
    name: string;
    num: string;
  };
}


function AddContact() {
    const [annuaire, setAnnuaire] = useState<Contact>({
    });
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [error, setError] = useState("");

  function addContact(e: React.FormEvent) {
    e.preventDefault();

    if (tel.trim() === "" || name.trim() === "") {
      setError("Le nom ou le tel sont vides, veuillez les remplir !");
      return;
    }

    const newId = `id-${Date.now()}`;

    setAnnuaire((prev) => ({
      ...prev,
      [newId]: { name: name, num: tel },
    }));
    
    setName("");
    setTel("");
    setError("");
  }

  return (
    <>
    <div style={styles.container}>
      <h2 style={styles.title}>Ajouter une personne</h2>
      <form onSubmit={addContact} style={styles.form}>
        <input
          style={styles.input}
          type="text"
          placeholder="Nom de la personne"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          style={styles.input}
          type="tel"
          placeholder="Son numéro de tel"
          onChange={(e) => setTel(e.target.value)}
          value={tel}
        />
        
        {error && <p style={styles.error}>{error}</p>}
        
        <button type="submit" style={styles.button}>
          Enregistrer l'individus
        </button>
      </form>
    </div>

    <ListeContact monAnnuaire={annuaire} />
</>
    
  );
}

export default AddContact;