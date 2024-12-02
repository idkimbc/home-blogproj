import React from "react";
import styles from "./leftContainerPg1.module.css";
import Image from "next/image";

function LeftContainerPg1() {
  return (
    <div>
      <div className="h-screen bg-amber-500 relative p-20 flex justify-center items-center flex-col">
        <Image
          src="/yellow1.jpg"
          alt=""
          className={styles.image}
          width={200}
          height={200}
        />
        <div className={styles.dev}>
          the dev made pasta today. he'll take the bus, go to the station and
          come back and go to the station again and come back again. the dev
          will go to the grocery on his way back.
        </div>
      </div>
    </div>
  );
}

export default LeftContainerPg1;
