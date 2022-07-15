import { useIndex } from "../../data/hooks/pages/useIndex.page";
import TextInput from "../components/inputs/TextInput/TextInput";
import Tweet from "../components/data-display/Tweet/Tweet";
import styles from "../styles/pages/index.module.css";

const tweet = {
    tweetText: "Meu primeiro tweet.",
    dateTweet: "há 5 dias",
    userData: {
        avatar: "https://www.github.com/leoalves2010.png",
        name: "Leonardo Dvulatk",
        username: "leoalves2010",
    },
};

export default function Index() {
    const user = useIndex();
    return (
        <div>
            <h1 className={styles["page-title"]}>DevTweet</h1>
            <div className={styles["tweet-container"]}>
                <img
                    src={user.avatar}
                    alt={user.name}
                    className={styles["avatar"]}
                />
                <TextInput />
            </div>
            <div className={styles["button-container"]}>
                <div>0 / 150</div>
                <button className={styles["post-button"]}>Tweetar</button>
            </div>

            <ul className={styles["tweet-list"]}>
                <li className={styles["tweet-list-item"]}>
                    <Tweet tweet={tweet} />
                </li>
                <li className={styles["tweet-list-item"]}>
                    <Tweet tweet={tweet} />
                </li>
                <li className={styles["tweet-list-item"]}>
                    <Tweet tweet={tweet} />
                </li>
                <li className={styles["tweet-list-item"]}>
                    <Tweet tweet={tweet} />
                </li>
                <li className={styles["tweet-list-item"]}>
                    <Tweet tweet={tweet} />
                </li>
            </ul>
        </div>
    );
}
