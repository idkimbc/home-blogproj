import React from "react";
import styles from "./rightContainerPg1.module.css";

function RightContainer() {
  return (
    <div className="h-screen bg-black relative">
      <div className="w-[100%] text-right absolute top-[-80px]">
        <div className={styles.title1}>home</div>
        <div className={styles.title2}>HOME</div>
      </div>
      <div
        className={`${styles.statusContainer} flex flex-col w-[100%] text-center`}
      >
        <div className={styles.status}>
          make me listen to my demons, make me embrace them
        </div>
        <div className={styles.status}>a strand of hair on my plate</div>
        <div className={styles.status}>
          the poster says you're not paid to think??
        </div>
        <div className={styles.status}>
          why is it hard to compute 'd' in T=dP
        </div>
        <div className={styles.status}>how to crack games</div>
      </div>
    </div>
  );
}

export default RightContainer;
