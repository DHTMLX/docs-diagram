import { useCallback } from 'react';
import React from 'react';

import styles from './styles.module.scss';

export default function DiagramPreview() {
  const dotClickHandler = useCallback((event) => {
    let dotBtn = document.querySelectorAll(".jsFDot_src-components-DiagramPreview-styles-module");
    let dotNote = document.querySelectorAll(".jsFNote_src-components-DiagramPreview-styles-module");

    const currentDot = event.target.closest('.diagramScreenDot_src-components-DiagramPreview-styles-module');

    let dotNumber = currentDot.getAttribute("data-dot");

    dotBtn.forEach((el) => {
        el.classList.remove("hidden_src-components-DiagramPreview-styles-module");
    });

    dotNote.forEach((el) => {
        el.classList.remove("active_src-components-DiagramPreview-styles-module");
    });

    currentDot.classList.add("hidden_src-components-DiagramPreview-styles-module");

    document.querySelector(".jsFNote_src-components-DiagramPreview-styles-module[data-note='" + dotNumber + "']").classList.add("active_src-components-DiagramPreview-styles-module");
  }, [])
    
    
  return (
    <div style={{maxWidth: '958px', margin: '0 auto', padding: '40 0'}}>
        <div className={styles.diagramFeaturesContainer}>
            <div className={styles.diagramFeatures}>
                <div className={styles.diagramFeaturesPict}>
                    <picture className={styles.blockC}>
                        <source media="(min-width: 810px)" srcset="https://dhtmlx.com/docs/products/dhtmlxDiagram/images/screens/demo.webp?v=2" />
                        <source media="(min-width: 0)" srcset="https://dhtmlx.com/docs/products/dhtmlxDiagram/images/screens/demo1540.webp?v=2"  />
                        <img src="https://dhtmlx.com/docs/products/dhtmlxDiagram/images/screens/demo.png?v=2" alt="" className={styles.diagramFeaturesImg} width="1220" height="640" />
                    </picture>
                    <div className={styles.diagramScreenDots}>
                        <div className={`${styles.diagramScreenDot} ${styles.dot1} ${styles.jsFDot}`} data-dot="1" onClick={dotClickHandler}>
                            <div className={`${styles.diagramScreenDotC} ${styles.f}`}>
                                <div className={`${styles.diagramScreenDotCi} ${styles.f}`}></div>
                            </div>
                            <div className={`${styles.diagramScreenDotC} ${styles.s}`}>
                                <div className={`${styles.diagramScreenDotCi} ${styles.s}`}></div>
                            </div>
                            <div className={`${styles.diagramScreenDotC} ${styles.th}`}>
                                <div className={`${styles.diagramScreenDotCi} ${styles.th}`}></div>
                            </div>
                            <div className={`${styles.diagramScreenDotC} ${styles.fh}`}>
                                <div className={`${styles.diagramScreenDotCi} ${styles.fh}`}></div>
                            </div>
                        </div>
                        <div className={`${styles.diagramScreenDot} ${styles.dot2} ${styles.jsFDot}`} data-dot="2" onClick={dotClickHandler}>
                            <div className={`${styles.diagramScreenDotC} ${styles.f}`}>
                                <div className={`${styles.diagramScreenDotCi} ${styles.f}`}></div>
                            </div>
                            <div className={`${styles.diagramScreenDotC} ${styles.s}`}>
                                <div className={`${styles.diagramScreenDotCi} ${styles.s}`}></div>
                            </div>
                            <div className={`${styles.diagramScreenDotC} ${styles.th}`}>
                                <div className={`${styles.diagramScreenDotCi} ${styles.th}`}></div>
                            </div>
                            <div className={`${styles.diagramScreenDotC} ${styles.fh}`}>
                                <div className={`${styles.diagramScreenDotCi} ${styles.fh}`}></div>
                            </div>
                        </div>
                        <div className={`${styles.diagramScreenDot} ${styles.dot3} ${styles.jsFDot} ${styles.hidden}`} data-dot="3" onClick={dotClickHandler}>
                            <div className={`${styles.diagramScreenDotC} ${styles.f}`}>
                                <div className={`${styles.diagramScreenDotCi} ${styles.f}`}></div>
                            </div>
                            <div className={`${styles.diagramScreenDotC} ${styles.s}`}>
                                <div className={`${styles.diagramScreenDotCi} ${styles.s}`}></div>
                            </div>
                            <div className={`${styles.diagramScreenDotC} ${styles.th}`}>
                                <div className={`${styles.diagramScreenDotCi} ${styles.th}`}></div>
                            </div>
                            <div className={`${styles.diagramScreenDotC} ${styles.fh}`}>
                                <div className={`${styles.diagramScreenDotCi} ${styles.fh}`}></div>
                            </div>
                        </div>
                        <div className={`${styles.diagramScreenDot} ${styles.dot4} ${styles.jsFDot}`} data-dot="4" onClick={dotClickHandler}>
                            <div className={`${styles.diagramScreenDotC} ${styles.f}`}>
                                <div className={`${styles.diagramScreenDotCi} ${styles.f}`}></div>
                            </div>
                            <div className={`${styles.diagramScreenDotC} ${styles.s}`}>
                                <div className={`${styles.diagramScreenDotCi} ${styles.s}`}></div>
                            </div>
                            <div className={`${styles.diagramScreenDotC} ${styles.th}`}>
                                <div className={`${styles.diagramScreenDotCi} ${styles.th}`}></div>
                            </div>
                            <div className={`${styles.diagramScreenDotC} ${styles.fh}`}>
                                <div className={`${styles.diagramScreenDotCi} ${styles.fh}`}></div>
                            </div>
                        </div>
                        <div className={`${styles.diagramScreenDot} ${styles.dot5} ${styles.jsFDot}`} data-dot="5" onClick={dotClickHandler}>
                            <div className={`${styles.diagramScreenDotC} ${styles.f}`}>
                                <div className={`${styles.diagramScreenDotCi} ${styles.f}`}></div>
                            </div>
                            <div className={`${styles.diagramScreenDotC} ${styles.s}`}>
                                <div className={`${styles.diagramScreenDotCi} ${styles.s}`}></div>
                            </div>
                            <div className={`${styles.diagramScreenDotC} ${styles.th}`}>
                                <div className={`${styles.diagramScreenDotCi} ${styles.th}`}></div>
                            </div>
                            <div className={`${styles.diagramScreenDotC} ${styles.fh}`}>
                                <div className={`${styles.diagramScreenDotCi} ${styles.fh}`}></div>
                            </div>
                        </div>
                        <div className={`${styles.diagramScreenDot} ${styles.dot6} ${styles.jsFDot}`} data-dot="6" onClick={dotClickHandler}>
                            <div className={`${styles.diagramScreenDotC} ${styles.f}`}>
                                <div className={`${styles.diagramScreenDotCi} ${styles.f}`}></div>
                            </div>
                            <div className={`${styles.diagramScreenDotC} ${styles.s}`}>
                                <div className={`${styles.diagramScreenDotCi} ${styles.s}`}></div>
                            </div>
                            <div className={`${styles.diagramScreenDotC} ${styles.th}`}>
                                <div className={`${styles.diagramScreenDotCi} ${styles.th}`}></div>
                            </div>
                            <div className={`${styles.diagramScreenDotC} ${styles.fh}`}>
                                <div className={`${styles.diagramScreenDotCi} ${styles.fh}`}></div>
                            </div>
                        </div>
                        <div className={`${styles.diagramScreenDot} ${styles.dot7} ${styles.jsFDot}`} data-dot="7" onClick={dotClickHandler}>
                            <div className={`${styles.diagramScreenDotC} ${styles.f}`}>
                                <div className={`${styles.diagramScreenDotCi} ${styles.f}`}></div>
                            </div>
                            <div className={`${styles.diagramScreenDotC} ${styles.s}`}>
                                <div className={`${styles.diagramScreenDotCi} ${styles.s}`}></div>
                            </div>
                            <div className={`${styles.diagramScreenDotC} ${styles.th}`}>
                                <div className={`${styles.diagramScreenDotCi} ${styles.th}`}></div>
                            </div>
                            <div className={`${styles.diagramScreenDotC} ${styles.fh}`}>
                                <div className={`${styles.diagramScreenDotCi} ${styles.fh}`}></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.diagramScreenNote} ${styles.note1} ${styles.jsFNote}`} data-note="1">
                    <a href="https://snippet.dhtmlx.com/f0cespbk?tag=diagram&mode=wide"  className={styles.screenNoteHead} target="_blank">
                        📊 Automatic diagram placement
                    </a>
                    <br />
                    Arrange shapes neatly with a single click via 2 smart algorithms.
                    <span className={`${styles.diagramScreenNoteArrow} ${styles.arrow1}`}></span>
                </div>
                <div className={`${styles.diagramScreenNote} ${styles.note2} ${styles.jsFNote}`} data-note="2">
                    <a href="https://snippet.dhtmlx.com/1p0wemnn?tag=diagram&mode=wide" className={styles.screenNoteHead} target="_blank">
                        🧩 Fully customizable Shapebar
                    </a>
                    <br />
                    Add custom sections with any shapes you want, set any size for preview.
                    <span className={`${styles.diagramScreenNoteArrow} ${styles.arrow2}`}></span>
                </div>
                <div className={`${styles.diagramScreenNote} ${styles.note3} ${styles.jsFNote} ${styles.active}`} data-note="3">
                    <a href="https://snippet.dhtmlx.com/ealq0m4l?tag=diagram&mode=wide"  className={styles.screenNoteHead} target="_blank">
                        🎨 Fully customizable Editbar
                    </a>
                    <br />
                    Manage sections and settings for live editing.
                    <span className={`${styles.diagramScreenNoteArrow} ${styles.arrow3}`}></span>
                </div>
                <div className={`${styles.diagramScreenNote} ${styles.note4} ${styles.jsFNote}`} data-note="4">
                    <a href="https://snippet.dhtmlx.com/xshe9ut7?tag=diagram&mode=wide"  className={styles.screenNoteHead} target="_blank">
                        🔮 Manipulate multiple items
                    </a>
                    <br />
                    Select several items, drag, align, distribute, or simply delete them.
                    <span className={`${styles.diagramScreenNoteArrow} ${styles.arrow4}`}></span>
                </div>
                <div className={`${styles.diagramScreenNote} ${styles.note5} ${styles.jsFNote}`} data-note="5">
                    <a href="//snippet.dhtmlx.com/u1xqyo9w?tag=diagram&mode=wide"  className={styles.screenNoteHead} target="_blank">
                        <span className={styles.emojiIcon}>
                            <picture className={styles.blockC}>
                                <source srcset="https://dhtmlx.com/docs/products/dhtmlxDiagram/images/emoji/magic.webp" />
                                <img src="https://dhtmlx.com/docs/products/dhtmlxDiagram/images/emoji/magic.png"  className={styles.emojiIconImg} width="18" height="18" />
                            </picture>
                        </span>
                        Custom shapes
                    </a>
                    <br />
                    Create any new shape and add event handlers for custom shapes.
                    <span className={`${styles.diagramScreenNoteArrow} ${styles.arrow5}`}></span>
                </div>
                <div className={`${styles.diagramScreenNote} ${styles.note6} ${styles.jsFNote}`} data-note="6">
                    <a href="https://snippet.dhtmlx.com/t6t8ay80?tag=diagram&mode=wide" className={styles.screenNoteHead} target="_blank">
                        📐 Snap lines
                    </a>
                    <br />
                    Select and drag shapes in the grid with greater precision.
                    <span className={`${styles.diagramScreenNoteArrow} ${styles.arrow6}`}></span>
                </div>
                <div className={`${styles.diagramScreenNote} ${styles.note7} ${styles.jsFNote}`} data-note="7">
                    <a href="https://snippet.dhtmlx.com/1p0wemnn?tag=diagram&mode=wide"  className={styles.screenNoteHead} target="_blank">
                        📌 Configurable Toolbar
                    </a>
                    <br/>
                    Manage toolbar elements to help users to control the editing process.
                    <span className={`${styles.diagramScreenNoteArrow} ${styles.arrow1}`}></span>
                </div>
            </div>
        </div>
    </div>
  );
}
