

import "./home.scss";
import React, { useState } from 'react';
import TopBar from '../../components/TopBar.jsx';
import Sidebar from '../../components/SideBar.jsx';
import Layout from '../../components/Layout/Layout.jsx';
import InputBar from '../../components/InputBar.jsx';
import CodeDisplay from '../../components/CodeDisplay.jsx';
import CodeInfo from '../../components/CodeInfo.jsx';
import sampleTextContent from '../../data/sampleTextv2';
import { Rings } from 'react-loading-icons'




const Home = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [displayCode, setDisplayCode] = useState(false);
  const [apiInfo, setApiInfo] = useState('');
  const [apiCode, setApiCode] = useState('');
  const [thinking, setThinking] = useState(false); 
  const [showExamplePrompts, setShowExamplePrompts] = useState(true); 





  const handleBurgerMenuClick = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const parseAPIResponse = (responseText) => {
    var codeRegex = /```python([\s\S]+?)```/;
    var codeMatch = responseText.match(codeRegex);
    if (codeMatch==null){
        codeRegex = /```([\s\S]+?)```/;
        codeMatch = responseText.match(codeRegex);
    }
    const code = codeMatch ? codeMatch[1] : "";
    
    // Remove the code section from the response text
    var otherInfo = responseText.replace(codeRegex, "").trim();

    // Remove the prompt from the response text
    otherInfo = otherInfo.replace("Code:", "").trim();

    return {
      code,
      otherInfo,
    };
  };
  
  

  async function sendRequestToGPT3(inputText, textContent) {
    setThinking(true); 
    const openAI_API_KEY = process.env.REACT_APP_API_KEY;
    const apiUrl = "https://api.openai.com/v1/chat/completions";
  
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${openAI_API_KEY}`,
    };
  
    const prompt = `My task is: ${inputText}\n\n 
    Write me a python code to accomplish this task. 
    Below I will provide class names and available methods for drivers to control hardware. 
    It is important that you use methods provided for each Python driver class when communicating with the instruments. 
    Make sure to comment the code and explain to users what assumptions you made in detail and the result should always have three sections "Assumptions", "Explanation", and "Code".\n "---" \n${textContent}\n\n`;
    // console.log(prompt);
    const data = {
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      temperature: 1.0,
    };
  
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(data),
      });
      const result = await response.json();
      const parsedResponse = parseAPIResponse(result.choices[0].message.content);


      setApiInfo(parsedResponse.otherInfo);
      setApiCode(parsedResponse.code);

      
      setDisplayCode(true);
      setThinking(false); 

    //   console.log(result.choices[0].message.content);
      
    } catch (error) {
      console.error("Error fetching answer from OpenAI API:", error);
      setThinking(false); 
    }
  }
  
  

  return (
    <div className="home">
      <TopBar onBurgerMenuClick={handleBurgerMenuClick} />
      <div className="homeContainer">
        <Sidebar visible={sidebarVisible} />
        <Layout>
          <h5 className="text-md font-bold mt-10 sticky top-0 text-white">
            AUTOMATION WORKFLOW
          </h5>
          
          <InputBar className="mt-25" onSend={(text) => {
                sendRequestToGPT3(text,  sampleTextContent);
                setShowExamplePrompts(false); 
                // setPythonCode(pythonCodeData.code);
                // setDisplayCode(true);
                }} 
                onFocus={() => {
                    setDisplayCode(false);
                    setShowExamplePrompts(true); }} 
                />

            
            {thinking && <Rings stroke="#26947a" height="3em"/>}
            {thinking && <h5 className ="text-white">Thinking...may take a few seconds.</h5>}
            {/* {thinking && (
            <p className="thinking-text text-white">
                Thinking
                <span className="dot dot-1">.</span>
                <span className="dot dot-2">.</span>
                <span className="dot dot-3">.</span>
            </p>
            )} */}

            {showExamplePrompts && (
            <div className="examples mt-4 text-white">
                    <p className="text-md sticky top-0 text-[#26947a] mb-4">Automate a wide range of devices like motorized stages, lasers, sensors, cameras and so on.</p>
                    <h5 className="text-md font-bold sticky mt-10 top-0 text-white">
                    EXAMPLE PROMPTS:
                </h5>
                    <ul className="list-disc">
                    <li className="ml-10 mt-4 text-white">"Read power from a Thorlabs power meter for 2 seconds and get an average power meter reading."</li>
                    <li className="ml-10 mt-4 text-white">"Home the CNC machine and take a picture using the ueye camera after homing."</li>
                    <li className="ml-10 mt-4 text-white">"I have two Thorlabs stages with brushless dc motor controllers. I am using the pure photonics laser and measuring optical power using Thorlabs power meter. I want to run gradient search optimization of the two stages to maximize optical power."</li>
                    {/* <li className="ml-10 mt-4 text-white"> "I want to synchronously acquire power readings from a Thorlabs Power meter and images from a ueye camera. The power readings are stored in a database whereas the camera images are stored in numpy array."</li> */}
                    </ul>
                </div>
            )}

                

          <div className="content">
            {displayCode && (
              <div className="code-section grid grid-cols-1 md:grid-cols-2 mt-4 w-full h-[calc(100%-3rem)] gap-4">
                <div className="col-span-1 md:flex-1 overflow-y-auto">
                  <CodeInfo info={apiInfo}/>
                </div>
                <div className="col-span-1 md:flex-1">
                  <CodeDisplay code={apiCode} />
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
