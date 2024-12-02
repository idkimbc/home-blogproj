import React from "react";
import styles from "./leftContainerPg2.module.css";
import Image from "next/image";
import HomepagePosts from "../homepage-posts/HomepagePosts";

function LeftContainerPg2() {
  return (
    <div className="h-screen py-14 px-16">
      <div className={styles.pgTitle}>the dev might have written these</div>
      <div className={styles.postList}>
        <HomepagePosts />
        <HomepagePosts />
        <HomepagePosts />
      </div>
    </div>
  );
}

export default LeftContainerPg2;
