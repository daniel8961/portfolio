const rcCarMilestones = [
    {
        title: `Components`,
        document: [
            `DC Motor, Servo Motor, ESC (Electronic Speed Controller), Battery, Receiver, 
            Transmitter (remote control)`,
            `Chassis, Wheels (the round part) and Tires (the rubber part), Suspension System, 
            Drivetrain (2WD, 4WD), Body Shell, Differential (control wheels in different speed)`
        ],
        pictures: [
            { src: ``, alt: `` }
        ]
    },
    {
        title: `Motors`,
        document: [
            `2 Main Types: Brushed Motor, Brushless Motor`,
            `<ul>
                <li>Brushed Motor: Generally cheaper and easier to maintain</li>
                <li>Brushless Motor: More efficient and powerful but more expensive</li>
            </ul>`
        ],
        pictures: [
            { src: ``, alt: `` }
        ]
    },
    {
        title: `Servo Motors`,
        document: [
            `A servo motor is responsible for precise control of angular position, velocity, and acceleration. 
            It's typically used for steering and controlling other movable parts`,
            `Quality Identification:`,
            `Torque: 
            <ul>
                <li>Higher torque means more power, unit kg/cm</li>
                <li>Speed: Faster servo respond quicker, unit 60 degrees / sec</li>
                <li>Precision: Higher precision means better control, digital servos over analog ones</li>
            </ul>`,
            `Levels: 
            <ul>
                <li>Entry: Plastic gears, lower torque (&lt;5 kg/cm), slower speed (&gt;0.2 s/60 degree)</li>
                <li>Mid: Metal or hybrid gears, moderate torque (5 - 10 kg/cm), moderate speed: (0.1-0.2 s/60 degree)</li>
                <li>High: All metal gears, high torque (&gt; 10 kg/cm), high speed (&lt;0.1 s/60 degree), often digital</li>
            </ul>`
        ],
        pictures: [
            { src: ``, alt: `` }
        ]
    },
    {
        title: `ESC (Electronic Speed Controller)`,
        document: [
            `Main Function: Speed Control, Direction Control, Braking`,
            `Types: Brushed, Brushless`,
            `Key Components of ESC: Microcontroller, Power MOSFETs, BEC (Battery Eliminator Circuit), Capacitors`,
            `<ul>
                <li>Microcontroller: The brain of ESC, processing input signals and controlling the motor.</li>
                <li>Power MOSFETs: Switches that control the power flow to the motor.</li>
                <li>BEC: Provides power to the receiver and servos from the main battery, cut the need for a separate receiver battery.</li>
                <li>Capacitors: Smooth out voltage spikes and reduce electrical noise.</li>
            </ul>`,
            `How an ESC Work: 
            <ol>
                <li>Signal Reception: The ESC receives signals from the receiver, which gets commands from the transmitter.</li>
                <li>Processing: The microcontroller interprets these signals and determines how much power to send to the motor.</li>
                <li>Power Regulation: Power MOSFETs switch on and off rapidly to control the amount of power delivered to the motor, adjusting speed and direction.</li>
            </ol>`,
            `Choosing an ESC: 
            <ol>
                <li>Compatibility: Ensure the ESC is compatible with your motor (brushed or brushless) and battery type (NiMH, LiPo).</li>
                <li>Current Rating: The ESC should handle the maximum current draw of your motor. Look for an ESC with a current rating higher than your motor's maximum current draw.</li>
                <li>Voltage Rating: Ensure the ESC can handle the voltage of your battery pack.</li>
                <li>BEC Rating: Ensure the BEC can provide sufficient power for your receiver and servos.</li>
            </ol>`
        ],
        pictures: [
            { src: ``, alt: `` }
        ]
    },
    {
        title: `Battery`,
        document: [
            `Types: Nickel-Metal Hydride (NiMH) Batteries, Lithium Polymer (LiPo) Batteries`,
            `NiMH Battery: 
            <ul>
                <li>Voltage: Typically 1.2 volts per cell.</li>
                <li>Common Configurations: 6-cell packs (7.2V) or 7-cell packs (8.4V).</li>
                <li>Pros: Easy to use, relatively safe, no need for special chargers.</li>
                <li>Cons: Heavier, less energy density compared to LiPo, can develop memory effect if not properly maintained.</li>
            </ul>`,
            `LiPo Battery: 
            <ul>
                <li>Voltage: Typically 3.7 volts per cell.</li>
                <li>Common Configurations: 2S (7.4V), 3S (11.1V), etc.</li>
                <li>Pros: Lightweight, high energy density, longer run times, more power.</li>
                <li>Cons: Requires careful handling, special chargers, can be dangerous if overcharged, discharged too low, or physically damaged.</li>
            </ul>`,
            `Battery Specifications:
            <ol>
                <li>Voltage (V):
                    <ul>
                        <li>Indicates the power potential of the battery.</li>
                        <li>Higher voltage usually means more speed and power.</li>
                    </ul>
                </li>
                <li>Capacity (mAh - milliamp hours):
                    <ul>
                        <li>Indicates how much energy the battery can store.</li>
                        <li>Higher capacity means longer run times.</li>
                    </ul>
                </li>
                <li>Discharge Rate (C Rating):
                    <ul>
                        <li>Indicates how quickly the battery can deliver power.</li>
                        <li>Higher C ratings mean the battery can deliver more power faster, which is important for high-performance RC cars.</li>
                    </ul>
                </li>
            </ol>`
        ],
        pictures: [
            { src: ``, alt: `` }
        ]
    },
    {
        title: `Receiver and Transmitter`,
        document: [
            `<b>Transmitter</b>`,
            `Key Features:
            <ol>
                <li>Channels:
                    <ul>
                        <li>Each function (e.g., steering, throttle) requires a channel.</li>
                        <li>Most basic RC cars use a 2-channel transmitter (one for throttle, one for steering).</li>
                        <li>More advanced RC vehicles might use transmitters with more channels for additional controls (e.g., lights, gear shifting).</li>
                    </ul>
                </li>
                <li>Frequency:
                    <ul>
                        <li>Modern RC systems use 2.4 GHz frequency for communication.</li>
                        <li>Older systems may use 27 MHz or 75 MHz, but these are more prone to interference.</li>
                    </ul>
                </li>
                <li>Controls:
                    <ul>
                        <li>Throttle Trigger: Usually a pistol grip trigger that controls speed and braking.</li>
                        <li>Steering Wheel/Stick: Used to control the direction.</li>
                        <li>Additional Switches/Knobs: For controlling other functions on advanced models.</li>
                    </ul>
                </li>
                <li>Adjustable Settings:
                    <ul>
                        <li>Dual Rates: Adjusts the sensitivity of the controls.</li>
                        <li>Exponential: Smooths out the control response, making it less sensitive around the neutral position.</li>
                        <li>Trims: Fine-tunes the neutral positions of the controls.</li>
                    </ul>
                </li>
            </ol>`,
            `<b>Receiver</b>`,
            `Key Features:
            <ol>
                <li>Channels:
                    <ul>
                        <li>Must match the number of channels on the transmitter.</li>
                        <li>Each channel corresponds to a specific function (e.g., throttle, steering).</li>
                    </ul>
                </li>
                <li>Binding:
                    <ul>
                        <li>The process of linking the transmitter to the receiver.</li>
                        <li>Ensures that the receiver only responds to signals from your specific transmitter, preventing interference from other transmitters.</li>
                    </ul>
                </li>
                <li>Connectors:
                    <ul>
                        <li>Channels on the receiver have connectors for servos, ESC, and other components.</li>
                        <li>Typically labeled for easy identification (e.g., CH1, CH2).</li>
                    </ul>
                </li>
            </ol>`,
            `<b>How Transmitter and Receiver Work Together</b>`,
            `<ol>
                <li>Signal Transmission:
                    <ul>
                        <li>The transmitter sends a radio signal when you move the controls.</li>
                        <li>The receiver picks up this signal and converts it into electrical signals.</li>
                    </ul>
                </li>
                <li>Command Execution:
                    <ul>
                        <li>These electrical signals are sent to the ESC (for throttle control) and the steering servo (for steering control).</li>
                        <li>Additional channels can control other functions like lights, winches, etc.</li>
                    </ul>
                </li>
            </ol>`,
            `<b>Choosing the Right System</b>`,
            `<ol>
                <li>Compatibility</li>
                <li>Range</li>
                <li>Channels</li>
            </ol>`
        ],
        pictures: [
            { src: ``, alt: `` }
        ]
    },
    {
        title: `Wheels and Tires`,
        document: [
            `<b>Wheels</b>`,
            `<ol>
                <li>Components:
                    <ul>
                        <li>Rim: The outer edge of the wheel where the tire is mounted. It can come in various designs and materials.</li>
                        <li>Hub: The central part of the wheel that attaches to the axle. It includes the mounting holes or hex shape that connects to the car.</li>
                    </ul>
                </li>
                <li>Materials:
                    <ul>
                        <li>Plastic: Lightweight and inexpensive. Commonly used in most RC cars.</li>
                        <li>Metal (Aluminum): More durable and provides better performance but is heavier and more expensive.</li>
                    </ul>
                </li>
                <li>Wheel Size:
                    <ul>
                        <li>The size of the wheel affects the car's handling and performance. Larger wheels can provide better ground clearance and are typically used for off-road RC cars, while smaller wheels are used for on-road cars for better speed and handling.</li>
                    </ul>
                </li>
            </ol>`,
            `<b>Tires</b>`,
            `<ol>
                <li>Components:
                    <ul>
                        <li>Tread: The part of the tire that makes contact with the ground. Different tread patterns are designed for various surfaces.</li>
                        <li>Sidewall: The side of the tire that connects the tread to the wheel. It can be reinforced for added durability.</li>
                        <li>Foam Inserts: Placed inside the tire to maintain its shape and provide cushioning. These are particularly important for off-road tires.</li>
                    </ul>
                </li>
                <li>Tire Types:
                    <ul>
                        <li>On-Road Tires:
                            <ul>
                                <li>Slick Tires: Smooth surface, ideal for high-speed racing on flat, smooth surfaces.</li>
                                <li>Grooved Tires: Have shallow treads for slightly rougher surfaces but still primarily designed for pavement or asphalt.</li>
                            </ul>
                        </li>
                        <li>Off-Road Tires:
                            <ul>
                                <li>Knobby Tires: Large, spaced-out lugs that provide excellent traction on dirt, mud, and loose surfaces.</li>
                                <li>All-Terrain Tires: A compromise between on-road and off-road tires, suitable for various surfaces but not optimized for any specific one.</li>
                            </ul>
                        </li>
                        <li>Drift Tires: Made of hard plastic or rubber to reduce traction and allow the car to slide easily for drifting maneuvers.</li>
                        <li>Foam Tires: Used in high-performance on-road racing. They provide consistent grip and wear out differently than rubber tires.</li>
                    </ul>
                </li>
            </ol>`
        ],
        pictures: [
            { src: ``, alt: `` }
        ]
    }
];
