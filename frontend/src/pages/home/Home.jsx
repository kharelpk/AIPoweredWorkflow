

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
    const openAI_API_KEY = "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";
    const apiUrl = "https://api.openai.com/v1/chat/completions";
  
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${openAI_API_KEY}`,
    };
  
    const prompt = `My question is: ${inputText}\n\n. 
    Write me a python code to accomplish this task. 
    Below I will provide you all the drivers written in python with classes names and available methods. 
    It is important use methods provided below for each class. 
    Make sure to comment the code and explain to users what assumptions you made so the result should always have three sections "Assumptions", "Explanation", and "Code"\n\n${textContent}\n\n`;
    console.log(prompt);
    const data = {
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.70,
    };
  
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(data),
      });
      const result = await response.json();
      const parsedResponse = parseAPIResponse(result.choices[0].message.content);

    //   console.log("CODE::::"+parsedResponse.code)
    //   console.log("INFO::::"+parsedResponse.otherInfo)

      setApiInfo(parsedResponse.otherInfo);
      setApiCode(parsedResponse.code);

    //   setPythonCode(pythonCodeData.code);
      
      setDisplayCode(true);
      setThinking(false); 

      console.log(result.choices[0].message.content);
      
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
            GENERATE AUTOMATION WORKFLOW
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
            {thinking && <h5 className ="text-white">Thinking...</h5>}
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
                    <h5 className="text-md font-bold sticky top-0 text-white">
                    EXAMPLE PROMPTS:
                </h5>
                    <ul className="list-disc">
                    <li className="ml-10 mt-4 text-white"> "I want to synchronously acquire power readings and ueye camera images. The power readings are stored in a database whereas the camera images are stored in numpy array."</li>
                    <li className="ml-10 mt-4 text-white">"Read power from a Thorlabs power meter and get average power meter reading after 2 seconds."</li>
                    <li className="ml-10 mt-4 text-white">"Home the CNC machine and take a picture using the ueye camera."</li>
                    <li className="ml-10 mt-4 text-white">"I have two Thorlabs stages with brushless dc motor controllers. I am using the pure photonics laser and measuring optical power using Thorlabs power meter. I want to run gradient search optimization of the two stages to maximize optical power."</li>
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
