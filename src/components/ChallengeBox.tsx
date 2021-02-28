import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
  const hasActiveChallenge = true;


  return (
    <div className={styles.challengeBoxContainer}>
      { hasActiveChallenge ? (
        <div className={styles.challengeActive}></div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>End a cycle to get a challenge</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level up"/>
            Move forward by completing challenges
          </p>
        </div>
      )}
    </div>
  )
}