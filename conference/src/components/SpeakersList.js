import Speaker from "./Speaker";
import useRequestDelay, { REQUEST_STATUS } from "../hooks/useRequestDelay";
import { data } from "@/SpeakerData";

const SpeakersList = ({ showSessions }) => {

    const {
        data: speakersData, requestStatus, error,
        updateRecord
    } = useRequestDelay(2000, data);

    
    if(requestStatus === REQUEST_STATUS.FAILURE){
        return (
            <div className="text-danger">
                <b>loading Speaker Data Failed {error}</b>
            </div>
        )
    }

    return ( 
        <div className="container speaker-list">
                <div className="row">
                    {speakersData.map(function(speaker) {
                        return (
                            <Speaker 
                                key={speaker.id} 
                                speaker={speaker} 
                                showSessions={showSessions} 
                                onFavoriteToggle={(doneCallback) => {
                                    updateRecord({
                                        ...speaker,
                                        favorite: !speaker.favorite
                                    }, doneCallback);
                                }}
                            />
                        )
                    })}
                </div>
        </div>
    );
}
 
export default SpeakersList;