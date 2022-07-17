import styles from "./Tweet.module.css";
import { DateService } from "../../../../data/services/DateService";

export default function Tweet({ tweet }) {
    return (
        <div className={styles["tweet-container"]}>
            <img
                src={tweet.userData.avatar}
                alt={tweet.userData.name}
                className={styles["avatar"]}
            />
            <div className={styles["user"]}>
                <span className={styles["user-name"]}>
                    {tweet.userData.name}
                </span>
                <span className={styles["user-username"]}>
                    {" "}
                    @{tweet.userData.username}
                </span>
                <span className={styles["date-tweet"]}>
                    {" "}
                    - {DateService.relativeTime(tweet.dateTweet)}
                </span>
            </div>
            <div className={styles["tweet-text"]}>{tweet.tweetText}</div>
        </div>
    );
}
