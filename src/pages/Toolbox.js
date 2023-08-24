
// Temp.jsimport React, { useState, useEffect } from 'react';
import React, { useState, useEffect } from 'react';
import ToolsList from '../components/tools/card';
// import { Client, Databases } from 'appwrite';
// import React, { useState } from 'react';
import { Client, Databases ,ID} from 'appwrite';
import Select from 'react-select';



function Toolbox() {
    const [data2, setData2] = useState(null);
    const [mish, setMish] = useState("dsadsads");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const client = new Client();
                client
                .setEndpoint('https://back.forward2shraga.com/v1')
                .setProject('64e5f5f143de3b93878f');

                const databases = new Databases(client);
                const fetchedData = await databases.listDocuments('64e5f63ced5a6c8b0dc8', '64e5f649cd29c8b0d743');
                
                console.log(fetchedData);
                setData2(fetchedData);
            } catch (error) {
                console.log(error);
                setMish("Error fetching data");
            }
        };

        fetchData();
    }, []);


    

    const urls = [
     'https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg',
     'https://img.freepik.com/free-vector/mysterious-gangster-character_23-2148483453.jpg' , // Replace with your second URL
     'https://img.freepik.com/free-photo/full-shot-scary-character-posing_23-2150701192.jpg',
     'https://img.freepik.com/free-photo/global-business-internet-network-connection-iot-internet-things-business-intelligence-concept-bus_1258-176843.jpg',
     'https://img.freepik.com/free-photo/glowing-cyborg-statue-illuminated-blue-mystery-generated-by-ai_188544-14044.jpg'
];

const options = [
  { value: "art", label: "Art" },
  { value: "productivity", label: "Productivity" },
  { value: "development", label: "Development" },
  { value: "voice", label: "Voice" },
  { value: "image", label: "Image" },
  { value: "video", label: "Video" },
  { value: "text", label: "Text" },
  { value: "multi-agent", label: "Multi-agent" },
  { value: "workflow", label: "Workflow" }
];

const handleSelectChange = (selectedOptions) => {
  setToolData(prevData => ({ ...prevData, Category: selectedOptions.map(option => option.value) }));
};

    const [toolData, setToolData] = useState({
      name: '',
      stars: ['5'],
      description: '',
      url: '',
      Category: ["art"],
      'img-url': urls[Math.floor(Math.random() * urls.length)],
      'date-uploaded': new Date().toISOString(),
      username: '',

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
          alert("תודה על הוספת כלי חדש לארגז של שרגא!")
          window.location.reload();

      } catch (error) {
          console.error('Error submitting data:', error);
          alert("קרתה תקלה בהוספת הכלי- נסו שנית")

      }
      console.log(toolData);
    };

    return (
        <div>
            <h1>..</h1>
            <h1>..</h1>


            {data2 && <ToolsList data={data2} />}

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
          placeholder="קישור של תמונה"
          value={toolData.imgUrl}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="text"
          name="username"
          placeholder="כינוי"
          value={toolData.username}
          onChange={handleChange}
          style={styles.input}
          required
        />

<Select
        isMulti
        name="Category"
        placeholder="קטגוריה"
        options={options}
        className="input"
        styles={styles.input}
        classNamePrefix="select"
        onChange={handleSelectChange}
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
export default Toolbox;
