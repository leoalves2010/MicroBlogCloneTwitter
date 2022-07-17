import { useApi } from "../useApi";
import { useState, useMemo } from "react";
import { ApiService } from "../../services/ApiService";
import { mutate } from "swr";

export function useIndex() {
    const userData = {
        name: "Leonardo Dvulatk",
        username: "leoalves2010",
        avatar: "http://www.github.com/leoalves2010.png",
    };

    const maxTextLength = 125;

    const tweetsList = useApi("tweets").data;

    const sortedTweetList = useMemo(() => {
        return (tweetsList || []).sort((a, b) =>
            a.data.date < b.data.date ? 1 : -1
        );
    }, [tweetsList]);

    const [tweetText, setTweetText] = useState("");

    const onTextChange = (event) => {
        let text = event.target.value;
        if (text.length <= maxTextLength) {
            setTweetText(text);
        }
    };

    const sendTweet = async () => {
        await ApiService.post("tweets", {
            data: {
                userData,
                tweetText,
                dateTweet: new Date().toISOString(),
            },
        });
        setTweetText("");
        mutate("tweets");
    };

    return {
        userData,
        maxTextLength,
        onTextChange,
        tweetText,
        sendTweet,
        sortedTweetList,
    };
}
