import { useIndex } from "../../data/hooks/pages/useIndex.page";
import TextInput from "../components/inputs/TextInput/TextInput";
import Tweet from "../components/data-display/Tweet/Tweet";
import styles from "../styles/pages/index.module.css";

export default function Index() {
    const {
        userData,
        maxTextLength,
        onTextChange,
        tweetText,
        sendTweet,
        sortedTweetList,
    } = useIndex();
    return (
        <div>
            <h1 className={styles["page-title"]}>DevTweet</h1>
            <div className={styles["tweet-container"]}>
                <img
                    src={userData.avatar}
                    alt={userData.name}
                    className={styles["avatar"]}
                />
                <TextInput
                    placeholder={"O que está acontecendo"}
                    rows={3}
                    maxLength={maxTextLength}
                    value={tweetText}
                    onChange={onTextChange}
                />
            </div>
            <div className={styles["button-container"]}>
                <div>{tweetText.length} / {maxTextLength}</div>
                <button onClick={sendTweet} disabled={tweetText.length === 0} className={styles["post-button"]}>Tweetar</button>
            </div>

            <ul className={styles["tweet-list"]}>
                {sortedTweetList.map((tweet) => (
                    <li key={tweet.id} className={styles["tweet-list-item"]}>
                        <Tweet tweet={tweet.data} />
                    </li>
                ))}
            </ul>
        </div>
    );
}
