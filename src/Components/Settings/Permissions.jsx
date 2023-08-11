import { faBluetooth, faNfcSymbol } from '@fortawesome/free-brands-svg-icons';
import { faBell, faCamera, faClipboard, faCompass, faDatabase, faDesktop, faInfoCircle, faLightbulb, faMagnet, faMapMarkerAlt, faMicrophone, faMusic, faRightLeft, faSync, faTachometerAlt, faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from "react";
import { styled } from "styled-components";

const permissionsNames = [
    {
      id: 1,
      name: "geolocation",
      description: "This permission allows websites to access your geographic location. It's useful for location-based services, maps, and location-aware websites.",
      icon: faMapMarkerAlt,
    },
    {
      id: 2,
      name: "notifications",
      description: "This permission allows websites to show you system notifications, like alerts or messages, even when you're not actively using the website.",
      icon: faBell,
    },
    {
      id: 3,
      name: "push",
      description: "This permission enables websites to send you real-time updates and notifications directly to your device.",
      icon: faBell,
    },
    {
      id: 4,
      name: "midi",
      description: "This permission lets websites interact with MIDI devices connected to your system. It's handy for web-based music applications and working with MIDI controllers.",
      icon: faMusic,
    },
    {
      id: 5,
      name: "camera",
      description: "This permission allows websites to access your camera. It enables video conferencing, photo capture, and camera-related features.",
      icon: faCamera,
    },
    {
      id: 6,
      name: "Microphone",
      description: "This permission allows websites to access your microphone. It's used for voice recording, voice chat, and other audio-related functionalities.",
      icon: faMicrophone,
    },
    {
      id: 7,
      name: "Speaker",
      description: "This permission allows websites to access your device's speaker. It enables web-based audio playback and interactions.",
      icon: faVolumeUp,
    },
    {
      id: 8,
      name: "device Info",
      description: "This permission allows websites to access general information about your device, such as the model, operating system, and browser details.",
      icon: faInfoCircle,
    },
    {
      id: 9,
      name: "background-fetch",
      description: "This permission allows websites to perform periodic background fetches for updates or data synchronization, even when the website is not open.",
      icon: faRightLeft,
    },
    {
      id: 10,
      name: "background-sync",
      description: "This permission allows websites to schedule background sync tasks to synchronize data with a server, even when the website is not active.",
      icon: faSync,
    },
    {
      id: 11,
      name: "bluetooth",
      description: "This permission allows websites to access Bluetooth devices and interact with them.",
      icon: faBluetooth,
    },
    {
      id: 12,
      name: "persistent-storage",
      description: "This permission allows websites to store data persistently on your device.",
      icon: faDatabase,
    },
    {
      id: 13,
      name: "ambient-light-sensor",
      description: "This permission lets websites access your device's ambient light sensor. It enables adjustments to the screen brightness based on the surrounding light conditions.",
      icon: faLightbulb,
    },
    {
      id: 14,
      name: "accelerometer",
      description: "This permission allows websites to access your device's accelerometer sensor, which measures acceleration and orientation.",
      icon: faTachometerAlt,
    },
    {
      id: 15,
      name: "gyroscope",
      description: "This permission allows websites to access your device's gyroscope sensor, which measures rotation and orientation.",
      icon: faCompass,
    },
    {
      id: 16,
      name: "magnetometer",
      description: "This permission allows websites to access your device's magnetometer sensor, which measures magnetic fields.",
      icon: faMagnet,
    },
    {
      id: 17,
      name: "clipboard",
      description: "This permission allows websites to read from and write to your clipboard, enabling copying and pasting of content.",
      icon: faClipboard,
    },
    {
      id: 18,
      name: "display-capture",
      description: "This permission allows websites to capture your display, useful for screen sharing and recording functionalities.",
      icon: faDesktop,
    },
    {
      id: 19,
      name: "nfc",
      description: "This permission allows websites to access Near Field Communication (NFC) features on supported devices, enabling interactions with NFC tags and devices.",
      icon: faNfcSymbol,
    },
  ];

export default function Permissions(){
    const [allPermissions, setAllPermissions] = useState([]);

    const getAllPermissions = async () => {
        const permissionsArray = await Promise.all(
            permissionsNames.map(async (permissionName) => {
                try {
                let permission;
                switch (permissionName.name) {
                    case 'push':
                    permission = await navigator.permissions.query({ name: permissionName.name, userVisibleOnly: true });
                    break;
                    default:
                    permission = await navigator.permissions.query({ name: permissionName.name });
                }
                return { ...permissionName, state: permission.state, value: permission.state === 'granted' ? true : false};
                } catch (error) {
                return { ...permissionName, state: 'error', errorMessage: error.toString() };
                }
            })
        );
        setAllPermissions(permissionsArray);
      };
    
    useEffect(() => {
      getAllPermissions();
    }, []);
    
    localStorage.setItem('permissions', JSON.stringify([...allPermissions]))
    sessionStorage.setItem('permissions', JSON.stringify([...allPermissions]))
  return(
        <>
            <h2 id="Permissions">Permissions</h2>
            {
              allPermissions.map((item)=>{
                    return(
                        <StyledSection key={item.id}>
                            <StyledStatus title={item?.errorMessage}><p>{item.state}</p></StyledStatus>
                            <VerticalLine />
                            <SpanCollom>
                                <SpanRow>
                                    <h4>{item.name}</h4>
                                    <FontAwesomeIcon icon={item.icon} />
                                </SpanRow>
                                <p>{item.description}</p>
                            </SpanCollom>
                        </StyledSection>
                    )
                })
            }
        </>
    )
}

const StyledSection = styled.section`
    padding: 1rem;
    background-color: var(--wrapperColor);
    border-radius: var(--borderRadius);
    height: 100%;
    display: flex;
    justify-items: center;
    align-items: center;
    &:hover{
        box-shadow: 4px 4px 0 black;
        transform: translateX(-4px);
        transform: translateY(-4px);
        border-bottom: 1px solid var(--activeColor);
        border-right: 1px solid var(--activeColor);
    }
`

const SpanRow = styled.span`
    display: flex;
    gap: .5rem;
    align-items: center;
`

const SpanCollom = styled.span`
    display: flex;
    flex-direction: column;
`

const StyledStatus = styled.div`
    min-width: 100px;
    min-height: 100px;
    border: 1px solid;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-items: center;
    p{
        margin: auto;
    }
`

const VerticalLine = styled.div`
    border-right: 1px solid ;
    height: 100%;
    background-color: var(--fontColor);
    margin: .8rem;
`