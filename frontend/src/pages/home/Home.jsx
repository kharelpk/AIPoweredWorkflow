

import "./home.scss";
import React, { useState } from 'react';
import TopBar from '../../components/TopBar.jsx';
import Sidebar from '../../components/SideBar.jsx';
import Layout from '../../components/Layout/Layout.jsx';
import InputBar from '../../components/InputBar.jsx';
import CodeDisplay from '../../components/CodeDisplay.jsx';
import CodeInfo from '../../components/CodeInfo.jsx';
import sampleTextContent from '../../data/sampleTextv3';
import classFunctions from '../../data/classFunctions.json';

import { Rings } from 'react-loading-icons'




const Home = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [displayCode, setDisplayCode] = useState(false);
  const [apiInfo, setApiInfo] = useState('');
  const [currentTask, setCurrentTask] = useState('');
  const [apiCode, setApiCode] = useState('');
  const [thinking, setThinking] = useState(false); 
  const [showExamplePrompts, setShowExamplePrompts] = useState(true); 


  const handleBurgerMenuClick = () => {
    setSidebarVisible(!sidebarVisible);
  };

  function parseResponse(responseText) {
    var codeRegex = /```python([\s\S]+?)```/;
    var codeMatch = responseText.match(codeRegex);

    if (codeMatch==null){
        codeRegex = /```([\s\S]+?)```/;
        codeMatch = responseText.match(codeRegex);
    }
    if (codeMatch==null){
        codeRegex = /Code:([\s\S]+)/;
        codeMatch = responseText.match(codeRegex);
    }


  const code = codeMatch ? codeMatch[1].trim() : '';

  // Remove the code section from the response text
  var otherInfo = responseText.replace(codeRegex, "").trim();
  // Remove the prompt from the response text
  otherInfo = otherInfo.replace("Code:", "").trim();

      // Remove the assumptions works
      otherInfo = otherInfo.replace("Assumptions:", "").trim();

  return {
    code,
    otherInfo,
  };
}


//   const parseAPIResponse = (responseText) => {
//     var codeRegex = /```python([\s\S]+?)```/;
//     var codeMatch = responseText.match(codeRegex);
//     if (codeMatch==null){
//         codeRegex = /```([\s\S]+?)```/;
//         codeMatch = responseText.match(codeRegex);
//     }
//     if (codeMatch==null){
//         codeRegex = /Code:([\s\S]+?)/;
//         codeMatch = responseText.match(codeRegex);
//     }
//     const code = codeMatch ? codeMatch[1] : "";
    
//     // Remove the code section from the response text
//     var otherInfo = responseText.replace(codeRegex, "").trim();

//     // Remove the prompt from the response text
//     otherInfo = otherInfo.replace("Code:", "").trim();



//     return {
//       code,
//       otherInfo,
//     };
//   };

async function getClientIPAddress() {
    try {
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      return data.ip;
    } catch (error) {
      console.error('Error fetching IP address:', error);
      return null;
    }
  }
  
  

async function sendLogToBackend(question, answer, ipAddress) {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/logs/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "question":question, "answer":answer, "ipaddress":ipAddress}),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
      }
  
    //   const data = await response.json();
      await response.json();
    //   console.log('Data successfully sent to backend:', data);
    } catch (error) {
      console.error('Error sending data to backend:', error);
    }
  }
  

  function extractAllInfoWithFilename(classNames) {
    const allInfoList = classNames.map(className => {
      if (classFunctions.hasOwnProperty(className)) {
        return classFunctions[className].all_info_with_filename;
      }
      return '';
    });
  
    return allInfoList.join('\n');
  }
  
  async function sendfirstQuestion(inputText) {
    setCurrentTask(inputText);
    setThinking(true); 
    const openAI_API_KEY = process.env.REACT_APP_API_KEY;
    const apiUrl = "https://api.openai.com/v1/chat/completions";
  
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${openAI_API_KEY}`,
    };
  
    const prompt = `Task: ${inputText}
    First figure out which devices you will use to accomplish this task from the list of drivers written in python below. I just want a list of class names to accomplish this task in json file.\n ${sampleTextContent}\n`;
    // console.log(prompt);
    const data = {
      model: "gpt-3.5-turbo",
      messages: [{ role: "assistant", content: prompt }],
      temperature: 0.3,
    };
  
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(data),
      });
      const result = await response.json();
  
      const responseText = result.choices[0].message.content;
    //   console.log(responseText);
      
      sendLogToBackend(inputText, responseText);
  
      // Extract class names using a regular expression
      const regex = /"([A-Za-z0-9_]+)"/g;
      let classNames = [];
      let match;
      while ((match = regex.exec(responseText)) !== null) {
        classNames.push(match[1]);
      }
  
      // Return the list of class names
    //   console.log(classNames);
      const allInfoString = extractAllInfoWithFilename(classNames);
    //   console.log(allInfoString);

    //   setApiInfo("I see that you'll need to use the following classes: " + classNames);
      setDisplayCode(true);
      setApiCode("#Using devices: " +classNames+ "\n#Figuring out the code now. Please be patient...:)\n");
      

      await secondQuestion(classNames, inputText, allInfoString);
      setThinking(false);
      return classNames;

  
    } catch (error) {
      setThinking(false); 
      console.error("Error fetching answer from OpenAI API:", error);
      setCurrentTask('');
    }
  }


  async function secondQuestion(classNames, inputText, textContent) {
    setThinking(true); 
    const openAI_API_KEY = process.env.REACT_APP_API_KEY;
    const apiUrl = "https://api.openai.com/v1/chat/completions";
  
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${openAI_API_KEY}`,
    };
  
    const prompt = `Here are the functions you have access to inside these ${classNames} classes. Please write me a python code to accomplish the task:  ${inputText} 
    It is important that you use methods provided for each Python class listed below when communicating with the instruments.  Make sure to comment the code and you do not need to explain the assumptions you made. The result should only have two sections "Assumptions", and "Code".
    ${textContent}`;

    // console.log(prompt);
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
    //   console.log(result)
      const parsedResponse = parseResponse(result.choices[0].message.content);
    //   console.log(result.choices[0].message.content);
      const ipAddress = await getClientIPAddress();
      sendLogToBackend(inputText, result.choices[0].message.content, ipAddress);

    //   console.log("OTHERINFO:::"+ parsedResponse.otherInfo);
    //   console.log("CODE:::"+ parsedResponse.code);
      setApiInfo(parsedResponse.otherInfo);
      setApiCode(parsedResponse.code);


      
      setDisplayCode(true);
      setThinking(false); 

    //   console.log(result.choices[0].message.content);
      
    } catch (error) {
      console.error("Error fetching answer from OpenAI API:", error);
      setThinking(false); 
      setCurrentTask('');
    }
  }
  

  
  return (
    <div className="home">
      <TopBar onBurgerMenuClick={handleBurgerMenuClick} />
      <div className="homeContainer">
        <Sidebar visible={sidebarVisible} />
        <Layout>
          <h5 className="text-md font-bold mt-10 sticky top-0 text-[#26947a]">
            AUTOMATION WORKFLOW
          </h5>
          
          <InputBar className="mt-25" onSend={(text) => {
                // sendRequestToGPT3(text,  sampleTextContent);
                setApiInfo('');
                sendfirstQuestion(text);
                setShowExamplePrompts(false); 
                }} 
                onFocus={() => {
                    setDisplayCode(false);
                    setShowExamplePrompts(true); }} 
                />

            
            {thinking && <Rings stroke="#26947a" height="3em"/>}
            {thinking && <h5 className ="text-white">Thinking...may take more than 10 seconds...</h5>}
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
                    <p className="text-md sticky top-0 mb-4">Automate a wide range of devices like motorized stages, lasers, sensors, cameras, and so on.</p>
                    <h5 className="text-md font-bold sticky mt-10 top-0 text-[#26947a]">
                    EXAMPLE PROMPTS:
                </h5>
                    <ul className="list-disc">

                    <li className="ml-10 mt-4 text-white font-mono Monaco text-sm">"Read power from a Thorlabs power meter for 2 seconds and calculate the average power meter reading."</li>
                    <li className="ml-10 mt-4 text-white font-mono Monaco text-sm">"Home the CNC machine, and take a picture using the ueye camera after homing."</li>
                    <li className="ml-10 mt-4 text-white font-mono Monaco text-sm">"I have two Thorlabs stages with brushless DC motor controllers. I am using the Pure Photonics laser and measuring optical power using a Thorlabs power meter. I want to run gradient search optimization on the two stages to maximize optical power."</li>                    {/* <li className="ml-10 mt-4 text-white"> "I want to synchronously acquire power readings from a Thorlabs Power meter and images from a ueye camera. The power readings are stored in a database whereas the camera images are stored in numpy array."</li> */}
                    </ul>
                </div>
            )}

                

          <div className="content">
            {displayCode && (
              <div className="code-section grid grid-cols-1 md:grid-cols-2 mt-0 w-full h-[calc(100%-3rem)] gap-4">
                <div className="col-span-1 md:flex-1 overflow-y-auto">
                  <CodeInfo task = {currentTask} info={apiInfo}/>
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
