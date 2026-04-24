import type { Contact } from "./addContact";

function ListeContact({ monAnnuaire }: { monAnnuaire: Contact }) {
    return (
    
    <>
    
      <h1>Vos contacts</h1>
      
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2', textAlign: 'left' }}>
            <th style={cellStyle}>ID</th>
            <th style={cellStyle}>Nom</th>
            <th style={cellStyle}>Numéro</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(monAnnuaire).map(([id, contact]) => (
            <tr key={id} style={{ borderBottom: '1px solid #ddd' }}>
              <td style={cellStyle}>{id}</td>
              <td style={cellStyle}>{contact.name}</td>
              <td style={cellStyle}>{contact.num}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

const cellStyle = { padding: '12px', border: '1px solid #ddd' };

export default ListeContact;