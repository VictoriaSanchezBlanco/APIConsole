'use strict'

var express = require('express');

var app = express();

var api = express.Router();

var playStation1 = 
    {
        Known_like: 'PS1',
         Date: 'On September 29, 1995 in Europe.',
         Features: 'A CD-ROM drive reader' +
                     'Two ports for control commands' +
                     'Two ports, one parallel and one serial' +
                     'Two slots intended for memory cards' +
                     'One multipurpose analogue output, RF, Composite, S-Video and RGBs' +
                     'A AC power input, 220-240 V',
         Games: 'Battle Arena Toshinden, Kileak: The Blood, Rapid Reload, Ridge Racer, Street Fighter: The Movie and Wipeout',
        
    }


var playStation2 = 
    {
        Known_like: 'PS2',
        Date: 'On November 24 in Europe',
        Features: 'A / V Multi Out x1 (proprietary connector): Analog video and audio signals' +
                        'Digital Out (Optical) x1 (Toslink connector): digital optical audio signal' +
                        'Port of controls x2: Connection of the controls of PlayStation 2 and PlayStation' +
                        'Memory Card Port x2: Connection for PlayStation 2 and PlayStation memory cards' +
                        'iLink S400 x1: Connection to establish network games and connect cameras' +
                        'Infrared port: Receiver for the infrared control of DVD' +
                        'PCMCIA x1 (Models SCPH-1000X to SCPH-1800X): Connection for External Network Adapter and Hard Disk' +
                        'Expansion Bay x1 (DEV9 connector, models SCPH-3000X to SCPH-5000X): Connection for the Network Adapter and hollow to accommodate an IDE 3.5 hard drive.',
        Games: 'Call of Duty, Call of Duty 2: Big Red One, Call of Duty 3',
    }


var playStation3 = 
    {
        Known_like: 'PS3',
        Date: 'On March 23, 2007 in Europe',
        Features: 'Cell Broadband Engine 3.2 GHz with 1PPE and 8 SPEs' +
                         'NVIDIA / SCEI RSX 550 MHz' +
                         '256 MB RAM of type GDDR3 VRAM at 700 MHz with bandwidth of 128 bits and 256 MB Rambus XDR DRAM at 3.2 GHz with a bandwidth of 64 bits' +
                         'Any SATA hard drive 2.5 "Inches and a maximum of 10 mm in height Recommended 5200rpm to decrease the heat generated' +
                         'Blu-ray Discs 2x, DVD 16x, Cds 52x' +
                         'Ethernet (10BASE-T, 100BASE-TX, 1000BASE-T). EEE 802.11 b / g (Wi-Fi). Bluetooth ® 2.0 (EDR) ',
         Games: 'Resistance: Fall of Man, The Elder Scrolls IV: Oblivion, FEAR, Sonic the Hedgehog, Mobile Suit Gundam: Crossfire',
        
    }


var playStation4 = 
    {
        Known_like: 'PS4',
        Date: 'On November 29, 2013 in Europe',
        Features: 'It has a microprocessor type APU eight-core x86-64 to 1.6 GHz' +
                         'An AMD 787032 GPU with a processing power of 1.84 Teraflops' +
                         'It also has a unified RAM of 8 GB, GDDR5, with a bandwidth of 176 GB / second' +
                         'Connectivity with the console would have Ethernet (10BASE-T, 100BASE-TX, 1000BASE-T), 802.11 b / g / n and Bluetooth 2.1 (with EDR)' +
                         'HDMI ports, digital optical output and USB 3.0 (2X)',
         Games: 'Alien: Isolation, Assassins Creed: Origins, Batman: Arkham Knight, Battlefield 4, Call of Duty: Ghosts and Daylight',
        
    }


var xbox = 
    {
        Known_like: 'Xbox',
        Date: 'On March 14, 2002 in Europe',
        Features: '32-bit Central processor' +
                         '733 MHz clock speed' +
                         '64 MiB of RAM '+
                         'A hard drive, (whose size is 8 GB in the first model and 10 GB in later models)' +
                         'The multimedia controller will perform the tasks of video playback, Dolby Digital audio decoding and network controller' +
                         '2 processors, based on the nForce range of nVidia, were connected to each other via a HyperTransport bus',
         Games: 'Halo, Star Wars: Knights of the Old Republic, Doom 3, Project Gotham Racing, The Elder Scrolls III: Morrowind',
        
    }


var xbox360 = 
    {
        Known_like: 'Xbox 360',
        Date: 'On December 2, 2005 in Europe',
        Features: 'A central processing unit based on an IBM PowerPC and its graphics processing unit that supports Unified Shaders technology' +
                     'A special port to add an external hard drive and is compatible with most devices with USB' +
                     'A unified RAM of type GDDR3 whose size is 512 MB' +
                     'Two slots for memory cards, and supports four wireless controllers' +
                     'The equipment has a size of approximately 258mm (width) x 309mm (height) x 83mm (depth) and weighs approximately 3.5 kilograms',
         Games: 'Grand Theft Auto V, State of Decay, RAGE, Mortal Kombat X, Left 4 Dead 2, Dragon Ball: Xenoverse',
        
    }


var xboxone = 
    {
        Known_like: 'Xbox One',
        Date: 'On November 22, 2013 in Europe',
        Features: 'Xbox One has an integrated GPU based on AMD technology' +
                        'An 8-core x86 processor with architecture similar to that of a PC' +
                        'Xbox One also has the Microsoft cloud, which is capable of making calculations to free the processing of the consoles' +
                        'The main one is that the triggers have an independent vibration system' +
                        'It has Bluetooth 4.0 connectivity to connect to a PC' +
                        '8 GB of DDR3 RAM plus 32MB of ESRAM, with a speed of up to 204GB / s18 500 GB of hard disk and a Blu-ray reader 6x' +
                        'with a 1080p camera that processes 2 GB of data per second with a response time of 13 billionths of a second' +
                        'The operating system consists of a Windows Kernel that has several multimedia functions and Internet Explorer',
        Games: 'PlayerUnknowns Battlegrounds, Shadow of the Tomb Raider, FIFA 19, Fortnite, Assassins Creed: Odyssey, Resident Evil 2',
        
    }


var xboxonex = 
    {
        Known_like: 'Xbox One X',
        Date: 'On November 7, 2017 in Europe',
        Features: 'It has 6 teraflops of graphic performance' +
                         'Two Jaguar Evolved CPU modules with four cores each at 2.3GHz' +
                         'RAM memory of 12GB GDDR5 at 320 Gbit / s bandwidth and a GPU of 40 computing units at 1172 MHz' +
                         'It has Bluetooth 4.0 connectivity to connect to a PC' +
                         'Xbox One also has Microsofts cloud, which is capable of calculating to free console processing',
         Games: 'PlayerUnknowns Battlegrounds, Shadow of the Tomb Raider, FIFA 19, Fortnite, Assassins Creed: Odyssey, Resident Evil 2',
        
    }


var wii = 
    {
        Known_like: 'WII',
        Date: 'On December 8, 2006 year in Europe',
        Features: 'CPU: IBM PowerPC unit with code name Broadway. Made with 90nm SOI CMOS technology, with a frequency: 729 MHz and with a bandwidth: 1.9 GB per second.' +
                         'GPU: Resolution up to 480p, with an optional panoramic mode and with 3 MB eDRAM and 24 MB RAM (operating at 486 MHz)' +
                         '1T-SRAM memory' +
                         'As for maintenance, it has 512MB of flash memory to save games and download content, it also has an SD memory card slot and 2 Gamecube memory card slots',
         Games: 'Wii Play, Wii Fit, Wii Fit Plus, Super Smash Bros, Super Mario Galaxy and Wii Party',
        
    }


var wiiu = 
    {
        Known_like: 'WII U',
        Date: 'On September 13, 2012 in Europe',
        Features: 'Graphics in high definition up to a resolution of 1080p' +
                        'A new control that incorporates a touch screen that receives signal in 480p quality of the console' +
                        'The system is retrocompatible with Wii games, and supports Wii peripherals, such as the Wiimote or the Wii Balance Board and including NFC technology' +
                        'USB 2.0 ports (2 on the front and 2 on the back)' +
                        'CPU: IBM tri-core microprocessor 45 nm Power Architecture based on the POWER7 architecture of the Watson supercomputer at 1.24 Ghz' +
                        'GPU: an AMD Radeon HD designed especially for the console, enhanced, based on the Radeon E6760 with R770 core running at 550 MHz',
        Games: 'Call of Duty: Black Ops II, Call of Duty: Ghosts, Darksiders II, Deus Ex: Human Revolution - Directors Cut, Dirt and Disney Infinity',
        
    }


var nintendo3ds = 
    {
        Known_like: 'Nintendo 3DS',
        Date: 'On March 25, 2011 in Europe',
        Features: 'Two screens: Top screen: 3.53 inches, panoramic with 3D vision without glasses, 800 × 240 pixels resolution and Bottom screen: 3.02 inches, 320 × 240 pixels resolution' +
                        'It has an inner camera and two external ones to recreate the 3D effect, each with a resolution of 0.3 megapixels (640 × 480)' +
                        'It has a 2.4GHz connection. Exchange of data with other 3DS through the Tag Mode. Internet connection in LAN access points' +
                        'A / B / Y / X buttons, D-pad, L / R, Start / Select, Sliding pad (360 °), touch screen, internal microphone, camera, motion sensor, gyroscope, 3D volume, Home button, button wireless connection, power button '+
                        'Slot for game cards, SD card slot, power connection, charging connection, headset connection' +
                        'Touch pencil' +
                        'Adjust the 3D experience to the point of converting it to 2D',
        Games: 'Archer, 3D Reliefs, Minibillar, Fishing, Fishing, Graffiti',
        
    }


var nintendoswitch = 
    {
        Known_like: 'Nintendo Switch',
        Date: 'On March 3, 2017 around the world',
        Features: 'CPU / GPU: NVIDIA Tegra X1 custom processor' +
                         'It has a memory: 4 GB of RAM and a storage: 3 2GB' +
                         'USB Terminal: Type-C (to charge or connect to the base)' +
                         'Sensors: Accelerometer, gyroscope and brightness sensor' +
                         'Quad-core CPU ARM Cortex A57 1.2 GHz and 256 NVIDIA CUDA Cores' +
                         'It has an internal battery: Lithium-ion battery with capacity 4310 mAH non-removable, with a battery life: Between 3 and 6 hours depending on the use of Nintendo Switch',
         Games: 'Splatoon 2, ARMS, Kirby: Star Allies, Xenoblade Chronicles 2, Donkey Kong Country: Tropical Freeze and Mario Tennis Aces',
        
    }


var curiosities = 
    {
        Console: 'The first video game console in history was called Magnavox Odyssey and was commercialized by Philips in 1968.'
    }


//controller

const getPlayStation1 = (req,res)=>{
    res.status(200).send(playStation1);
}

const getPlayStation2 = (req,res)=>{
    res.status(200).send(playStation2);
}

const getPlayStation3= (req,res)=>{
    res.status(200).send(playStation3);
}

const getPlayStation4= (req,res)=>{
    res.status(200).send(playStation4);
}

const getXbox = (req,res)=>{
    res.status(200).send(xbox);
}

const getXbox360 = (req,res)=>{
    res.status(200).send(xbox360);
}

const getXboxone= (req,res)=>{
    res.status(200).send(xboxone);
}

const getXboxonex= (req,res)=>{
    res.status(200).send(xboxonex);
}

const getWii = (req,res)=>{
    res.status(200).send(wii);
}

const getWiiu = (req,res)=>{
    res.status(200).send(wiiu);
}

const getNintendo3ds= (req,res)=>{
    res.status(200).send(nintendo3ds);
}

const getNintendoswitch= (req,res)=>{
    res.status(200).send(nintendoswitch);
}

const getCuriosities= (req,res)=>{
    res.status(200).send(curiosities);
}

//routes

api.get('/play1',getPlayStation1);
api.get('/play2',getPlayStation2);
api.get('/play3',getPlayStation3);
api.get('/play4',getPlayStation4);
api.get('/xbox',getXbox);
api.get('/xbox360',getXbox360);
api.get('/xboxone',getXboxone);
api.get('/xboxonex',getXboxonex);
api.get('/wii',getWii);
api.get('/wiiu',getWiiu);
api.get('/nintendo3ds',getNintendo3ds);
api.get('/nintendoswitch',getNintendoswitch);
api.get('/curiosities',getCuriosities);

// base route
app.use('/api', api);

const port = 4000;

app.listen(port,() =>{
    console.log('listening on http://localhost:' + port);
});