import styles from "../styles/components/ChallengeBox.module.css";

export function ChallengeBox() {
  const hasActiveChallenge = true;

  return (
    <div className={styles.challengeBoxContainer}>
      {hasActiveChallenge ? (
        <div className={styles.challengeActive}>
          <header>Win 400xp</header>

          <main>
            <img src="icons/body.svg" alt="" />
            <strong>New challenge</strong>
            <p>Stand up and walk for 3 minutes</p>
          </main>

          <footer>
            <button type="button" className={styles.challengeFailedButton}>
              Failed
            </button>
            <button type="button" className={styles.challengeSucceededButton}>
              Completed
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>End a cycle to get a challenge</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level up" />
            Move forward by completing challenges
          </p>
        </div>
      )}
    </div>
  );
}
