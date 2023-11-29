function checkForError(value) {
    if (value === -1) {
        throw new Error('値が -1 なのでエラーです');
    }
}
//try catch 文の中でこの関数の引数に -1を設定します
try {
    checkForError(-1);
}
catch (error) {
    console.error("\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3057\u305F: ".concat(error.message));
}
