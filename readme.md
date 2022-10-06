1campus/dsutil
====

DSA Client Library

- [xml-js]  

    處理「xml parse」問題。其中相衣的「sax」元件在 browser 中不運作，需要特別的處理。  

    `common/stream.ts` 是模擬空的「Stream」物件，使「sax」元件可以正常運作。

    為了讓「sax」正常也需要在「babel.config.js」中進行「stream」設定，設定方式請自行參考。
    如果不是用 react 需要再研究什麼方式處理。