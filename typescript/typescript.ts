
function checkValue(value: number) {
    if (value < 0) { // マイナスの値の場合エラーをthrowする（投げる）。
        throw new Error(`Value cannot be negative`); // エラーメッセージ設定
    }	
    }
    
    // try-catch構文：上記とセットで使う
    try {
        // 例外を起こすコード
    checkValue(-1);
    } catch (error) { // throwされたエラーを検知した場合の処理
        // 例外が発生した場合の処理
        console.error(error.message);
    }
    