/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import "./css/keyboardWin.css";

const KeyboardWin = () => {

    const [pressedKey, setPressedKey] = useState(null);
    const handleKeyDown = (event: { keyCode: any; }) => {

        const keyCode = event.keyCode;
        setPressedKey(keyCode);
        const keyElement = document.querySelector(`.key.c${keyCode}`) as HTMLElement;
        if (keyElement) {
            keyElement.style.color = "#007fff";
            keyElement.style.textShadow = "0 0 10px #007fff";
            keyElement.style.margin = "0px";
            keyElement.style.boxShadow = "inset 0 0 25px #333, 0 0 3px #333";
            keyElement.style.borderTop = "1px solid #000";
        }

    };

    const handleKeyUp = (event: { keyCode: any; }) => {
        const keyCode = event.keyCode;
        console.log(keyCode);
        const keyElement = document.querySelector(`.key.c${keyCode}`) as HTMLElement;

        if (keyElement) {
            keyElement.style.color = "#aaa";
            keyElement.style.textShadow = "none";
            keyElement.style.margin = "0px";
            keyElement.style.boxShadow = "0 0 25px #333, 0 0 3px #333";
            keyElement.style.boxShadow = "inset 0 0 25px #333, 0 0 3px #333";

            keyElement.style.borderTop = "1px solid #000";
            setPressedKey(keyCode);
        }
    };
    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);
        document.addEventListener("keyup", handleKeyUp);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.removeEventListener("keyup", handleKeyUp);
        };
    }, [pressedKey]);

    return (
        <>

            <div className="cable">
            </div>
            <div className="keyboard">

                <div className="section-a">
                    <div className="keyWin function space1">
                        Esc
                    </div>

                    <div className="keyWin function">
                        F1
                    </div>
                    <div className="keyWin function">
                        F2
                    </div>
                    <div className="keyWin function">
                        F3
                    </div>

                    <div className="keyWin function space2">
                        F4
                    </div>
                    <div className="keyWin function">
                        F5
                    </div>
                    <div className="keyWin function">
                        F6
                    </div>
                    <div className="keyWin function">
                        F7
                    </div>
                    <div className="keyWin function space2">
                        F8
                    </div>

                    <div className="keyWin function">
                        F9
                    </div>
                    <div className="keyWin function">
                        F10
                    </div>
                    <div className="keyWin function">
                        F11
                    </div>
                    <div className="keyWin function">
                        F12
                    </div>


                    <div className="keyWin num dual">
                        ~<br />`
                    </div>

                    <div className="keyWin num dual">
                        !<br />1
                    </div>
                    <div className="keyWin num dual">
                        @<br />2
                    </div>
                    <div className="keyWin num dual">
                        #<br />3
                    </div>
                    <div className="keyWin num dual">
                        $<br />4
                    </div>
                    <div className="keyWin num dual">
                        %<br />5
                    </div>
                    <div className="keyWin num dual">
                        ^<br />6
                    </div>
                    <div className="keyWin num dual">
                        &<br />7
                    </div>
                    <div className="keyWin num dual">
                        *<br />8
                    </div>
                    <div className="keyWin num dual">
                        (<br />9
                    </div>
                    <div className="keyWin num dual">
                        )<br />0
                    </div>
                    <div className="keyWin num dual">
                        _<br />-
                    </div>
                    <div className="keyWin num dual">
                        +<br />=
                    </div>
                    <div className="keyWin backspace">
                        Backspace
                    </div>


                    <div className="keyWin tab">
                        Tab
                    </div>

                    <div className="keyWin letter">
                        Q
                    </div>
                    <div className="keyWin letter">
                        W
                    </div>
                    <div className="keyWin letter">
                        E
                    </div>
                    <div className="keyWin letter">
                        R
                    </div>
                    <div className="keyWin letter">
                        T
                    </div>
                    <div className="keyWin letter">
                        Y
                    </div>
                    <div className="keyWin letter">
                        U
                    </div>
                    <div className="keyWin letter">
                        I
                    </div>
                    <div className="keyWin letter">
                        O
                    </div>
                    <div className="keyWin letter">
                        P
                    </div>
                    <div className="keyWin dual">
                        {'{'}<br />{'['}
                    </div>
                    <div className="keyWin dual">
                        {'}'}<br />{']'}
                    </div>
                    <div className="keyWin letter dual slash">
                        |<br />\
                    </div>
                    <div className="keyWin caps">
                        Caps<br />Lock
                    </div>
                    <div className="keyWin letter">
                        A
                    </div>
                    <div className="keyWin letter">
                        S
                    </div>
                    <div className="keyWin letter">
                        D
                    </div>
                    <div className="keyWin letter">
                        F
                    </div>
                    <div className="keyWin letter">
                        G
                    </div>
                    <div className="keyWin letter">
                        H
                    </div>
                    <div className="keyWin letter">
                        J
                    </div>
                    <div className="keyWin letter">
                        K
                    </div>
                    <div className="keyWin letter">
                        L
                    </div>
                    <div className="keyWin dual">
                        :<br />;
                    </div>
                    <div className="keyWin dual">
                        "<br />'
                    </div>
                    <div className="keyWin enter">
                        Enter
                    </div>

                    <div className="keyWin shift left">
                        Shift
                    </div>
                    <div className="keyWin letter">
                        Z
                    </div>
                    <div className="keyWin letter">
                        X
                    </div>
                    <div className="keyWin letter">
                        C
                    </div>
                    <div className="keyWin letter">
                        V
                    </div><div className="keyWin letter">
                        B
                    </div><div className="keyWin letter">
                        N
                    </div><div className="keyWin letter">
                        M
                    </div>
                    <div className="keyWin dual">
                        {'<'} <br /> ,
                    </div>
                    <div className="keyWin dual">
                        {'>'} <br />.
                    </div>
                    <div className="keyWin dual">
                        ? <br />/
                    </div>
                    <div className="keyWin shift right">
                        Shift
                    </div>
                    <div className="keyWin ctrl">
                        Ctrl
                    </div>
                    <div className="keyWin">
                        &hearts;
                    </div>
                    <div className="keyWin">
                        Alt
                    </div>
                    <div className="keyWin space">



                    </div>
                    <div className="keyWin">
                        Alt
                    </div>
                    <div className="keyWin">
                        &hearts;
                    </div>
                    <div className="keyWin">
                        Prnt
                    </div>
                    <div className="keyWin ctrl">
                        Ctrl
                    </div>
                </div>

                <div className="section-b">
                    <div className="keyWin function small">
                        Prnt Scrn
                    </div>
                    <div className="keyWin function small">
                        Scroll Lock
                    </div>
                    <div className="keyWin function small">
                        Pause Break
                    </div>

                    <div className="sec-func">
                        <div className="keyWin">
                            Insert
                        </div>
                        <div className="keyWin">
                            Home
                        </div>
                        <div className="keyWin dual">
                            Page Up
                        </div>
                        <div className="keyWin">
                            Del
                        </div>
                        <div className="keyWin">
                            End
                        </div>
                        <div className="keyWin dual">
                            Page Down
                        </div>

                        <div className="arrows">
                            <div className="keyWin hidden">

                            </div>
                            <div className="keyWin">
                                ^
                            </div>
                            <div className="keyWin hidden">

                            </div>
                            <div className="keyWin">
                                {'<'}
                            </div>
                            <div className="keyWin">
                                v
                            </div>
                            <div className="keyWin">
                                {'>'}
                            </div>
                        </div>
                    </div>


                </div>

            </div>

        </>
    );

};

export default KeyboardWin;