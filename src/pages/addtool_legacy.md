import React, { useState } from 'react';
import { Client, Databases ,ID} from 'appwrite';

function UploadTool() {
  const [toolData, setToolData] = useState({
    name: '',
    stars: [],
    description: '',
    url: '',
    Category: ["art"],
    'img-url': 'https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?w=1380&t=st=1692904237~exp=1692904837~hmac=dea301319f7503541f980d4952302dcf4bd5c32cf6eeefbc01c41db428b3ea93',
    'date-uploaded': new Date().toISOString(),
    username: ''
  });

  const  handleChange = (event) => {
    const { name, value } = event.target;
    setToolData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic to send the toolData to the server or database

    try {

        const client = new Client();
        client
        .setEndpoint('https://back.forward2shraga.com/v1')
        .setProject('64e5f5f143de3b93878f');


        const databases = new Databases(client);

        let response =   databases.createDocument(
            '64e5f63ced5a6c8b0dc8',
            '64e5f649cd29c8b0d743',
            ID.unique(), 
            toolData,
            {}
            // ['read'],  // Read permissions. Adjust as needed.
            // ['write']   // Write permissions. Adjust as needed.
        );
        
        console.log('Data submitted successfully:', response);
    } catch (error) {
        console.error('Error submitting data:', error);
    }
    console.log(toolData);
  };

  return (
    <div>
    <br/>     <br/> 
    <br/> 
    <br/> 
    <br/> 
    <br/> 
    <br/> 
    <br/> 

    <div style={styles.container}>
      <h1 style={styles.header}>הוספת כלי לארגז כלים של שרגא</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="שם הכלי/סוכן"
          value={toolData.name}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <textarea
          name="description"
          placeholder="תיאור"
          value={toolData.description}
          onChange={handleChange}
          style={styles.textarea}
          required
        />
        <input
          type="url"
          name="url"
          placeholder="כתובת הכלי"
          value={toolData.url}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <input
          type="url"
          name="img-url"
          placeholder="תמונה"
          value={toolData.imgUrl}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="text"
          name="username"
          placeholder="שם מלא"
          value={toolData.username}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <button type="submit" style={styles.button}>Submit</button>
      </form>
    </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '600px',
    margin: '2rem auto',
    padding: '1rem',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    backgroundColor: '#fff'
  },
  header: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '1.5rem'
  },
  form: {
    display: 'flex',
    flexDirection: 'column'
  },
  input: {
    padding: '0.5rem',
    fontSize: '1rem',
    borderRadius: '5px',
    margin: '0.5rem 0',
    border: '1px solid #ccc',
    outline: 'none',
    transition: 'border 0.2s'
  },
  textarea: {
    padding: '0.5rem',
    fontSize: '1rem',
    borderRadius: '5px',
    margin: '0.5rem 0',
    border: '1px solid #ccc',
    minHeight: '100px',
    outline: 'none',
    transition: 'border 0.2s'
  },
  button: {
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    borderRadius: '5px',
    margin: '1rem 0',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.2s'
  }
};

export default UploadTool;
