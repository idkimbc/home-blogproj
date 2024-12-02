import Image from "next/image";
import styles from "./homepagePosts.module.css";
import React from "react";

function HomepagePosts() {
  return (
    <div>
      <div className={styles.post}>
        <Image
          className={styles.postImage}
          src="/picture1.png"
          alt=""
          width={110}
          height={110}
        />
        <div className="">
          <div className="">my hands ain't warm enough</div>
          <div className="text-amber-500">dev</div>
          <div className="">14/10/2003</div>
          <div className="">self-reflection</div>
        </div>
      </div>
    </div>
  );
}

export default HomepagePosts;
