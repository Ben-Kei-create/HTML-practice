let i;
// 変数iを宣言した。
let num = 0;
// 変数numを宣言。初期値0を設定した。

for(i = 1; i < 12; i++){
 num = num + i;
}
// 変数iの初期値を「1」に設定し、変数iが「11」未満のときは変数iに1を足す（「i++」は「i = i+1」と同じ）変数numに「num+i」を代入
// 変数numに「num+i」を代入

alert('1から10まで足し算した結果は' + num + 'です');
// アラートウィンドウに計算結果を表示