import React from 'react'

import code from "../../images/code_128.png"
import design from "../../images/design_128.png"
import launch from "../../images/launch_128.png"

import styles from "./Card.module.css"

const Card = () => {
  return (
    <div class={styles.container}>
    <div class={styles.card}>
        <div class={`${styles.face} ${styles.face1}`}>
            <div class={styles.content}>
                <img src={design} alt="aaa"/>
                <h3>Design</h3>
            </div>
        </div>
        <div class={`${styles.face} ${styles.face2}`}>
            <div class={styles.content}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                    <a href="#">Read More</a>
            </div>
        </div>
    </div>

    <div class={styles.card}>
        <div class={`${styles.face} ${styles.face1}`}>
            <div class={styles.content}>
                <img src={code} alt="aaa"/>
                <h3>code</h3>
            </div>
        </div>
        <div class={`${styles.face} ${styles.face2}`}>
            <div class={styles.content}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                    <a href="#">Read More</a>
            </div>
        </div>
    </div>

    <div class={styles.card}>
        <div class={`${styles.face} ${styles.face1}`}>
            <div class={styles.content}>
                <img src={launch} alt="aaa"/>
                <h3>Launch</h3>
            </div>
        </div>
        <div class={`${styles.face} ${styles.face2}`}>
            <div class={styles.content}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                    <a href="#">Read More</a>
            </div>
        </div>
    </div>
    {/* <div class="card">
        <div class="face face1">
            <div class={styles.content}>
                <img src={design} alt="aaa"/>
                <h3>Code</h3>
            </div>
        </div>
        <div class="face face2">
            <div class="content">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                    <a href="#">Read More</a>
            </div>
        </div>
    </div>
    <div class="card">
        <div class="face face1">
            <div class="content">
                <img src={launch} alt="aaa"/>
                <h3>Launch</h3>
            </div>
        </div>
        <div class="face face2">
            <div class="content">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                    <a href="#">Read More</a>
            </div>
        </div>
    </div> */}
</div>
  )
}

export default Card