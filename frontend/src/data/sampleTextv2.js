const sampleTextContent = `
File: cbeam.py
  Class: CBEAM
  Docstring: Class used to communicate with the CBEAM CNC machine from Openbuilds.
  Functions:
    __init__(self, address, baudrate, timeout)
    connect(self)
    disconnect(self)
    _send_command(self, command)
    wait_for_move_complete(self)
    run_gcode(self, filename)
    set_unlock(self)
    set_position_X(self, value)
    set_position_Y(self, value)
    set_position_Z(self, value)
    set_grbl_command(self, command)
    set_home(self)
File: tllcc25.py
  Class: DLLWrapper
  Docstring: None
  Functions:
    __init__(self, dll_path)
    _bind_functions(self, function_bindings)
    _bind_function(self, name, argtypes, restype)
  Class: TLLCC25
  Docstring: None
  Functions:
    __init__(self, dll_path)
    list(self)
    get_ports(self)
    open(self, serial_no, n_baud, timeout)
    set_output_mode(self, hdl, mode)
    get_output_mode(self, hdl)
    set_voltage1(self, hdl, vol)
    set_voltage2(self, hdl, vol)
    close(self, hdl)
    _test_for_error(self, result)
File: ueyewrapper.py
  Class: UYECAM
  Docstring: Wrapper class for controlling uEye machine vision cameras.
  Functions:
    __init__(self, device_id)
    connect(self)
    get_camera_info(self)
    get_sensor_info(self)
    reset_to_default(self)
    get_aoi(self)
    set_aoi(self, x, y, width, height)
    get_colormode(self)
    set_colormode(self, colormode)
    allocate_image_memory(self)
    capture_video(self, wait)
    inquire_image_mem(self)
    get_image_data(self)
    stop_video(self)
    free_image_memory(self)
    exit(self)
    get_bits_per_pixel(self, color_mode)
    __check_error(self, ret)
File: tlkbd101.py
  Class: TLKBD101
  Docstring: A class to control the Thorlabs KBD101 brushless DC motor.
  Functions:
    __init__(self, serial_number, dll_path)
    build_device_list(self)
    connect(self)
    home(self)
    move_to_position_device_units(self, position)
    get_device_unit_from_real_value(self, real_value, unit_type)
    move_to_position_real_units(self, position)
    set_velocity_parameters_real_units(self, acceleration, max_velocity)
    set_velocity_parameters_device_units(self, acceleration, max_velocity)
    get_position(self)
    set_motor_params(self, counts_per_rev)
    disconnect(self)
File: itla.py
  Class: ITLA
  Docstring: A class for controlling pure photonics ITLA laser. RS-232 communication is used to control the laser.
  Functions:
    __init__(self, address, baudrate, timeout)
    connect(self)
    disconnect(self)
    _issue_command(self, register, data, rw)
    _decode_response(self, response)
    _send_command(self, byte0, byte1, byte2, byte3)
    _receive_response(self)
    _wait_until_no_operation(self)
    _checksum(self, byte0, byte1, byte2, byte3)
    set_enable_output(self, value)
    set_power(self, power)
    get_power(self)
    set_frequency_THz(self, frequency)
    get_frequency_THz(self)
    set_wavelength_nm(self, wavelength)
    get_wavelength_nm(self, wavelength)
    get_temperature(self)
    get_current(self)
    get_min_power(self)
    get_max_power(self)
    get_min_frequency_THz(self)
    get_max_frequency_THz(self)
    set_mode(self, mode)
File: tlcss.py
  Class: DLLWrapper
  Docstring: None
  Functions:
    __init__(self, dll_path)
    _bind_functions(self, function_bindings)
    _bind_function(self, name, argtypes, restype)
  Class: TLCCS
  Docstring: None
  Functions:
    __init__(self, dll_path)
    init(self, resource_name, id_query, reset_device)
    identification_query(self, instrument_handle)
    close(self, instrument_handle)
    set_integration_time(self, instrument_handle, integration_time)
    start_scan(self, instrument_handle)
    get_scan_data(self, instrument_handle)
    get_wavelength_data(self, instrument_handle, data_set)
    __test_for_error(self, instrument_handle, status)
    __throw_error(self, instrument_handle, status)
File: tllfl.py
  Class: TLLFL
  Docstring: A class to communicate with the Thorlabs Fiber laser.
  Functions:
    __init__(self, port)
    send_command(self, command)
    get_id(self)
    get_commands(self)
    set_target_temp(self, temp)
    get_target_temp(self)
    get_actual_temp(self)
    set_current(self, current)
    get_current(self)
    get_power(self)
    get_enable(self)
    set_enable(self, enable)
    get_specs(self)
    set_step(self, step)
    get_step(self)
    save_parameters(self)
    get_status(self)
    close(self)
File: tlkim101.py
  Class: TLKIM101
  Docstring: A class to control the Thorlabs KIM101 and KIM001 Inertial Motor Controller.
Needs Thorlabs.MotionControl.KCube.IntertialMotor.dll.
  Functions:
    __init__(self, serial_number, dll_path)
    build_device_list(self)
    connect(self, channel)
    home(self, channel)
    move_absolute(self, channel, position)
    move_relative(self, channel, step_size)
    move_jog(self, channel, direction)
    move_stop(self, channel)
    wait_for_move(self, channel)
    disconnect(self)
File: tlpax.py
  Class: TLPAX
  Docstring: A Python class for controlling the Thorlabs PAX1000 polarimeter using SCPI commands.
  Functions:
    __init__(self, resource_name)
    send_command(self, command)
    query(self, command)
    get_identification(self)
    reset(self)
    operation_complete(self)
    wait_to_continue(self)
    self_test(self)
    close(self)
    set_averaging_mode(self, mode)
    get_averaging_mode(self)
    set_wavelength(self, wavelength)
    get_wavelength(self)
    set_power_range_upper(self, value)
    get_power_range_upper(self)
    set_power_range_auto(self, value)
    get_power_range_auto(self)
    set_power_range_index(self, index)
    get_power_range_index(self)
    get_power_range_nominal(self, index)
    get_latest_primary_measurement_data(self)
    get_calibration_string(self)
    set_waveplate_rotation_state(self, state)
    get_waveplate_rotation_state(self)
    set_waveplate_rotation_velocity(self, velocity)
    get_waveplate_rotation_velocity(self)
    get_waveplate_rotation_velocity_limits(self)
File: tllk220.py
  Class: DLLWrapper
  Docstring: None
  Functions:
    __init__(self, dll_path)
    _bind_functions(self, function_bindings)
    _bind_function(self, name, argtypes, restype)
  Class: TLLK220
  Docstring: None
  Functions:
    __init__(self, dll_path)
    list(self)
    open(self, serial_no, n_baud, timeout)
    set_enable(self, hdl, value)
    set_target_temp(self, hdl, value)
    close(self, hdl)
    __test_for_error(self, result)
File: tledfa300s.py
  Class: EDFA300S
  Docstring: Class to control the EDFA 300s from Thorlabs.
  Functions:
    __init__(self, port)
    send_command(self, command)
    help(self)
    enable_laser(self)
    disable_laser(self)
    set_laser_diode_current(self, current)
    get_laser_diode_current(self)
    get_status(self)
    run_pid_power_control(self, power)
    run_pid_gain_control(self, gain)
    close(self)
File: tlpm.py
  Class: DLLWrapper
  Docstring: None
  Functions:
    __init__(self, dll_path)
    _bind_functions(self, function_bindings)
    _bind_function(self, name, argtypes, restype)
  Class: TLPM
  Docstring: None
  Functions:
    __init__(self, dll_path)
    init(self, resource_name, id_query, reset_device)
    close(self, instrument_handle)
    identification_query(self, instrument_handle)
    set_avg_time(self, instrument_handle, average_time)
    set_wavelength(self, instrument_handle, wavelength)
    set_power_auto_range(self, instrument_handle, power_auto_range_mode)
    meas_power(self, instrument_handle)
    __test_for_error(self, instrument_handle, status)
    __throw_error(self, instrument_handle, status)
File: tlwfs.py
  Class: DLLWrapper
  Docstring: None
  Functions:
    __init__(self, dll_path)
    _bind_functions(self, function_bindings)
    _bind_function(self, name, argtypes, restype)
  Class: TLWFS
  Docstring: None
  Functions:
    __init__(self, dll_path)
    init(self, resource_name, id_query, reset_device)
    close(self, instrument_handle)
    identification_query(self, instrument_handle)
    take_spotfield_image(self, instrument_handle)
    get_spotfield_image(self, instrument_handle)
    __test_for_error(self, instrument_handle, status)
    __throw_error(self, instrument_handle, status)
File: tlup.py
  Class: DLLWrapper
  Docstring: None
  Functions:
    __init__(self, dll_path)
    _bind_functions(self, function_bindings)
    _bind_function(self, name, argtypes, restype)
  Class: TLUP
  Docstring: None
  Functions:
    __init__(self, dll_path)
    init(self, resource_name, id_query, reset_device)
    close(self, instrument_handle)
    find_rsrc(self, instrument_handle)
    get_rsrc_info(self, instrument_handle, index)
    measure_device_temperature(self, instrument_handle)
    switch_led_output(self, instrument_handle, enable_led_output)
    set_led_current_setpoint(self, instrument_handle, led_current_setpoint)
    __test_for_error(self, instrument_handle, status)
    __throw_error(self, instrument_handle, status)
File: tlkst101.py
  Class: TLKST101
  Docstring: A class to control the Thorlabs KCube Stepper Motor Controller.
Needs Thorlabs.MotionControl.KCube.StepperMotor.dll.
  Functions:
    __init__(self, serial_number, dll_path)
    build_device_list(self)
    connect(self)
    home(self)
    move_to_position_device_units(self, position)
    wait_for_move(self, num)
    get_device_unit_from_real_value(self, real_value, unit_type)
    move_to_position_real_units(self, position)
    set_velocity_parameters_real_units(self, acceleration, max_velocity)
    set_velocity_parameters_device_units(self, acceleration, max_velocity)
    get_position(self)
    disconnect(self)
`;

export default sampleTextContent;
