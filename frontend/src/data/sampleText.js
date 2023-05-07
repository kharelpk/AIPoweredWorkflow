const sampleTextContent = `
File: cbeam.py
  Class: CBEAM
  Docstring: Class used to communicate with the CBEAM CNC machine from Openbuilds.
  Functions:
    __init__
    connect
    disconnect
    _send_command
    wait_for_move_complete
    run_gcode
    set_unlock
    set_position_X
    set_position_Y
    set_position_Z
    set_grbl_command
    set_home
File: tllcc25.py
  Class: DLLWrapper
  Docstring: None
  Functions:
    __init__
    _bind_functions
    _bind_function
  Class: TLLCC25
  Docstring: None
  Functions:
    __init__
    list
    get_ports
    open
    set_output_mode
    get_output_mode
    set_voltage1
    set_voltage2
    close
    _test_for_error
File: ueyewrapper.py
  Class: UYECAM
  Docstring: Wrapper class for controlling uEye cameras.
  Functions:
    __init__
    connect
    get_camera_info
    get_sensor_info
    reset_to_default
    get_aoi
    set_aoi
    get_colormode
    set_colormode
    allocate_image_memory
    capture_video
    inquire_image_mem
    get_image_data
    stop_video
    free_image_memory
    exit
    get_bits_per_pixel
    __check_error
File: tlkbd101.py
  Class: TLKBD101
  Docstring: A class to control the Thorlabs KBD101 brushless DC motor.
  Functions:
    __init__
    build_device_list
    connect
    home
    move_to_position_device_units
    get_device_unit_from_real_value
    move_to_position_real_units
    set_velocity_parameters_real_units
    set_velocity_parameters_device_units
    get_position
    set_motor_params
    disconnect
File: itla.py
  Class: ITLA
  Docstring: A class for controlling pure photonics ITLA laser. RS-232 communication is used to control the laser.
  Functions:
    __init__
    connect
    disconnect
    _issue_command
    _decode_response
    _send_command
    _receive_response
    _wait_until_no_operation
    _checksum
    set_enable_output
    set_power
    get_power
    set_frequency_THz
    get_frequency_THz
    set_wavelength_nm
    get_wavelength_nm
    get_temperature
    get_current
    get_min_power
    get_max_power
    get_min_frequency_THz
    get_max_frequency_THz
    set_mode
File: tlcss.py
  Class: DLLWrapper
  Docstring: None
  Functions:
    __init__
    _bind_functions
    _bind_function
  Class: TLCCS
  Docstring: None
  Functions:
    __init__
    init
    identification_query
    close
    set_integration_time
    start_scan
    get_scan_data
    get_wavelength_data
    __test_for_error
    __throw_error
File: tllfl.py
  Class: TLLFL
  Docstring: A class to communicate with the Thorlabs Fiber laser.
  Functions:
    __init__
    send_command
    get_id
    get_commands
    set_target_temp
    get_target_temp
    get_actual_temp
    set_current
    get_current
    get_power
    get_enable
    set_enable
    get_specs
    set_step
    get_step
    save_parameters
    get_status
    close
File: tlkim101.py
  Class: TLKIM101
  Docstring: A class to control the Thorlabs KIM101 and KIM001 Inertial Motor Controller.
Needs Thorlabs.MotionControl.KCube.IntertialMotor.dll.
  Functions:
    __init__
    build_device_list
    connect
    home
    move_absolute
    move_relative
    move_jog
    move_stop
    wait_for_move
    disconnect
File: tlpax.py
  Class: TLPAX
  Docstring: A Python class for controlling the Thorlabs PAX1000 polarimeter using SCPI commands.
  Functions:
    __init__
    send_command
    query
    get_identification
    reset
    operation_complete
    wait_to_continue
    self_test
    close
    set_averaging_mode
    get_averaging_mode
    set_wavelength
    get_wavelength
    set_power_range_upper
    get_power_range_upper
    set_power_range_auto
    get_power_range_auto
    set_power_range_index
    get_power_range_index
    get_power_range_nominal
    get_latest_primary_measurement_data
    get_calibration_string
    set_waveplate_rotation_state
    get_waveplate_rotation_state
    set_waveplate_rotation_velocity
    get_waveplate_rotation_velocity
    get_waveplate_rotation_velocity_limits
File: tllk220.py
  Class: DLLWrapper
  Docstring: None
  Functions:
    __init__
    _bind_functions
    _bind_function
  Class: TLLK220
  Docstring: None
  Functions:
    __init__
    list
    open
    set_enable
    set_target_temp
    close
    __test_for_error
File: tledfa300s.py
  Class: EDFA300S
  Docstring: Class to control the EDFA 300s from Thorlabs.
  Functions:
    __init__
    send_command
    help
    enable_laser
    disable_laser
    set_laser_diode_current
    get_laser_diode_current
    get_status
    run_pid_power_control
    run_pid_gain_control
    close
File: tlpm.py
  Class: DLLWrapper
  Docstring: None
  Functions:
    __init__
    _bind_functions
    _bind_function
  Class: TLPM
  Docstring: None
  Functions:
    __init__
    init
    close
    identification_query
    set_avg_time
    set_wavelength
    set_power_auto_range
    meas_power
    __test_for_error
    __throw_error
File: tlwfs.py
  Class: DLLWrapper
  Docstring: None
  Functions:
    __init__
    _bind_functions
    _bind_function
  Class: TLWFS
  Docstring: None
  Functions:
    __init__
    init
    close
    identification_query
    take_spotfield_image
    get_spotfield_image
    __test_for_error
    __throw_error
File: tlup.py
  Class: DLLWrapper
  Docstring: None
  Functions:
    __init__
    _bind_functions
    _bind_function
  Class: TLUP
  Docstring: None
  Functions:
    __init__
    init
    close
    find_rsrc
    get_rsrc_info
    measure_device_temperature
    switch_led_output
    set_led_current_setpoint
    __test_for_error
    __throw_error
File: tlkst101.py
  Class: TLKST101
  Docstring: A class to control the Thorlabs KCube Stepper Motor Controller.
Needs Thorlabs.MotionControl.KCube.StepperMotor.dll.
  Functions:
    __init__
    build_device_list
    connect
    home
    move_to_position_device_units
    wait_for_move
    get_device_unit_from_real_value
    move_to_position_real_units
    set_velocity_parameters_real_units
    set_velocity_parameters_device_units
    get_position
    disconnect`;

export default sampleTextContent;
