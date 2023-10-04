import { useState } from "react";
import SpeakersList from "./SpeakersList";
import SpeakersToolbar from "./SpeakersToolbar";

const Speakers = ({ data, theme,  setTheme }) => {
    const [showSessions, setShowSessions] = useState(true);

    return ( 
        <>
            <SpeakersToolbar 
                theme={theme} 
                setTheme={setTheme}
                showSessions={showSessions}
                setShowSessions={setShowSessions}
            />
            <SpeakersList data={data} showSessions={showSessions} /> 
        </>
     );
}
 
export default Speakers;