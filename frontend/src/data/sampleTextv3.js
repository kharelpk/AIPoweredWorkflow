const sampleTextContent = `
File: cbeam.py
  Class: CBEAM
  Description: This Class is used to communicate with the CBEAM CNC machine from Openbuilds. 

File: tldc4100.py
  Class: TLDC4100
  Description: This Class is used to control the Thorlabs DC4100 4-channel LED controller.

File: tllcc25.py
  Class: TLLCC25
  Description: This Class is used to control the Thorlabs LCC25 Liquid crystal controller. Needs LCC25CommandLib_win32.dll

File: tlx3.py
  Class: TLX3
  Description: This Class is to control the TLX3 tunable O-band laser from Thorlabs. RS-232 communication is used to control the laser.

File: tlkbd101.py
  Class: TLKBD101
  Description: This Class is  to control the Thorlabs KBD101 k-cube brushless DC motor. Needs Thorlabs.MotionControl.KCube.BrushlessMotor.dll.

File: wfs.py
  Class: TLWFS
  Description: This Class is  used to control the Thorlabs wavefront sensor.

File: itla.py
  Class: ITLA
  Description: This Class is for controlling pure photonics laser. RS-232 communication is used to control the laser.

File: ueyecam.py
  Class: UEYECAM
  Description: This Class is for controlling uEye cameras used for machine vision application.

File: tllfl.py
  Class: TLLFL
  Description: This Class is to communicate with the Thorlabs Thulium doped Fiber laser via serial communication.

File: tlkim101.py
  Class: TLKIM101
  Description: This Class is to control the Thorlabs KIM101 and KIM001 four channel K-cube piezo Inertial Motor Controller. Needs Thorlabs.MotionControl.KCube.IntertialMotor.dll.

File: tlpax.py
  Class: TLPAX
  Description: This Class is used to control the Thorlabs PAX1000 polarimeter using SCPI commands.

File: tllk220.py
  Class: TLLK220
  Description: This Class is used to control the Thorlabs LK220 thermoelectric liquid chiller via serial communication. Needs Thorlabs.LK220.CommandLibrary-win32.dll.

File: tledfa300s.py
  Class: EDFA300S
  Description: This Class is used to control the Erbium-doped Fiber amplifiers (EDFA 300S) from Thorlabs via serial communication.

File: mx10b.py
  Class: MX10B
  Description: This Class is used to control mx10B digital reference transmitter from Thorlabs via serial communication.

File: tlpm.py
  Class: TLPM
  Description: This Class is used to control the Thorlabs power meter. Works with PM100 and PM200 series power meters.

File: tlccs.py
  Class: TLCCS
  Description: This Class is used to control CCS compact spectrometers from Thorlabs. Needs TLCCS_64.dll or TLCCS_32.dll depending on the architecture of the python interpreter.

File: tlup.py
  Class: TLUP
  Description: This Class is used to control Thorlabs upLED driver.

File: tlkst101.py
  Class: TLKST101
  Description: This Class is used to control the Thorlabs k-cube Stepper Motor Controller. Needs Thorlabs.MotionControl.KCube.StepperMotor.dll.

File: esp32.py
  Class: ESP32
  Description: This class is used to control ESP32 or esp32 microcontroller using Micropython via Serial connection. 
`;

export default sampleTextContent;
