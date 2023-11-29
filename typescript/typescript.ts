
function checkForError(value : number): void {
    if (value === -1) {
        throw new Error('値が -1 なのでエラーです');
    }
}

//try catch 文の中でこの関数の引数に -1を設定します


try {
    checkForError(-1);
} catch (error) {
    console.error(`エラーが発生しました: ${(error as Error).message}`);
}