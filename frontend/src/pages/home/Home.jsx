

import "./home.scss";
import React, { useState } from 'react';
import TopBar from '../../components/TopBar.jsx';
import Sidebar from '../../components/SideBar.jsx';
import Layout from '../../components/Layout/Layout.jsx';
import InputBar from '../../components/InputBar.jsx';
import pythonCodeData from '../../data/pythonCode.json';
import CodeDisplay from '../../components/CodeDisplay.jsx';
import CodeInfo from '../../components/CodeInfo.jsx';
import sampleTextContent from '../../data/sampleTextv2';




const Home = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [pythonCode, setPythonCode] = useState('');
  const [displayCode, setDisplayCode] = useState(false);

  const handleBurgerMenuClick = () => {
    setSidebarVisible(!sidebarVisible);
  };

  async function sendRequestToGPT3(inputText, textContent) {
    const openAI_API_KEY = "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";
    const apiUrl = "https://api.openai.com/v1/chat/completions";
  
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${openAI_API_KEY}`,
    };
  
    const prompt = `My question is: ${inputText}\n\n. 
    Write me a python code to accomplish this task. 
    Below I will provide you all the drivers written in python with classes names and available methods. 
    It is important that you use methods provided for each class. 
    Make sure to comment the code and explain to users what assumptions you made so the result should always have three sections "Assumptions", "Explanation", and "Code" \n\n${textContent}\n\n`;
    console.log(prompt);
    const data = {
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
    };
  
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(data),
      });
      const result = await response.json();
      console.log(result.choices[0].message.content);
    } catch (error) {
      console.error("Error fetching answer from OpenAI API:", error);
    }
  }
  
  

  return (
    <div className="home">
      <TopBar onBurgerMenuClick={handleBurgerMenuClick} />
      <div className="homeContainer">
        <Sidebar visible={sidebarVisible} />
        <Layout>
          <h5 className="text-md font-bold mt-10 sticky top-0 text-white">
            GENERATE AUTOMATION WORKFLOW
          </h5>
          
          <InputBar className="mt-25" onSend={(text) => {
                sendRequestToGPT3(text,  sampleTextContent);
                setPythonCode(pythonCodeData.code);
                setDisplayCode(true);
                }} />

          <div className="content">
            {displayCode && (
              <div className="code-section grid grid-cols-1 md:grid-cols-2 mt-4 w-full h-[calc(100%-3rem)] gap-4">
                <div className="col-span-1 md:flex-1 overflow-y-auto">
                  <CodeInfo />
                </div>
                <div className="col-span-1 md:flex-1">
                  <CodeDisplay code={pythonCode} />
                </div>
              </div>
            )}
          </div>
        </Layout>
      </div>
    </div>
  );
};

export default Home;
