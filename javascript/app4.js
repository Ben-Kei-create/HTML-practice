// let alertString;
// alertString = addString("WebCamp");
// alert(alertString);
// function addString(strA){
//  let addStr = "Hello" + strA;
//  return addStr;
// }
// let promptStr = prompt('何か好きな文字を書いてください。');
// alert(promptStr);
// let hand = prompt("ぐー、パー、ちょきから選んでください。");
// alert("あなたの出した手は、" + hand + "ですね。");
// Math.floor( Math.random() * 3 )は、0～2までのランダムな整数値を生成できる。
// 関数内の「3」は、ランダム生成したい整数値の+1を指定しています。
// // function getJShand(){
// //  let js_hand = Math.floor( Math.random() * 3 );
// // }
// //   if(js_hand_num == 0){
// //     js_hand = "グー";
// //   } else if(js_hand_num == 1){
// //     js_hand = "チョキ";
// //   } else if(js_hand_num == 2){
// //     js_hand = "パー";
// //   }
// //   return js_hand;
// // }

// // じゃんけんの手を入力してもらうプロンプト欄を生成
//   let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');

//   while((user_hand != "グー")&&(user_hand != "チョキ")&&(user_hand != "パー")&&(user_hand != null));{
//   alert('グー・チョキ・パーのいずれかを入力して下さい');
//   user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
//   }

// let js_hand = getJShand();
// let judge = winLose(user_hand, js_hand);

// if (user_hand != null){
//   alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');
// } else {
//   alert("またチャレンジしてね")
// }
// function getJShand(){
//   let js_hand_num = Math.floor( Math.random() * 3 );
//   let hand_name;

//   if(js_hand_num == 0){
//     hand_name = "グー";
//   } else if(js_hand_num == 1){
//     hand_name = "チョキ";
//   } else if(js_hand_num == 2){
//     hand_name = "パー";
//   }

//   return hand_name;
// }

// // ユーザの手とJavaScriptのじゃんけんの手を比べる関数
// function winLose(user, js){
//   let winLoseStr;

//   if(user == "グー"){
//     if(js == "グー"){
//       winLoseStr = "あいこ";
//     } else if(js == "チョキ"){
//       winLoseStr = "勝ち";
//     } else if(js == "パー"){
//       winLoseStr = "負け";
//     }

//   } else if(user == "チョキ"){
//     if(js == "グー"){
//       winLoseStr = "負け";
//     } else if(js == "チョキ"){
//       winLoseStr = "あいこ";
//     } else if(js == "パー"){
//       winLoseStr = "勝ち";
//     }

//   } else if(user == "パー"){
//     if(js == "グー"){
//       winLoseStr = "勝ち";
//     } else if(js == "チョキ"){
//       winLoseStr = "負け";
//     } else if(js == "パー"){
//       winLoseStr = "あいこ";
//     }
//   }

//   return winLoseStr;
// }

// // function handAlert(){
// // let handAlertStr

// // 　　if(user_hand !== "グー"){
// // 　　 handAlertStr = "グー・チョキ・パーのいずれかを入力してください";
// // 　　 else if(user_hand !== "チョキ");
// // 　　 handAlertStr = "グー・チョキ・パーのいずれかを入力してください";
// // 　　 else if(user_hand !== "パー");
// // 　　 handAlertStr = "グー・チョキ・パーのいずれかを入力してください";
// //     }

// //   return Alerthand();
// // }


let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
while ((user_hand != "グー") && (user_hand != "チョキ") && (user_hand != "パー") && (user_hand != null)){
  alert('グー・チョキ・パーのいずれかを入力して下さい');
  user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
}
let js_hand = getJShand();
let judge = winLose(user_hand, js_hand);

if (user_hand != null){
  alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');
} else {
  alert("またチャレンジしてね")
}

function getJShand(){
  let js_hand_num = Math.floor(Math.random() * 3);
  let hand;
  if (js_hand_num == 0){
    hand = "グー";
  } else if (js_hand_num == 1){
    hand = "チョキ";
  } else if (js_hand_num == 2){
    hand = "パー";
  }
  return hand;
}

function winLose(user, js){
  let winLoseStr;
  if (user == "グー"){
    if (js == "グー"){
      winLoseStr = "あいこ";
    } else if (js == "チョキ"){
      winLoseStr = "勝ち";
    } else if (js == "パー"){
      winLoseStr = "負け";
    }
  } else if (user == "チョキ"){
    if (js == "グー"){
      winLoseStr = "負け";
    } else if (js == "チョキ"){
      winLoseStr = "あいこ";
    } else if (js == "パー"){
      winLoseStr = "勝ち";
    }
  } else if (user == "パー"){
    if (js == "グー"){
      winLoseStr = "勝ち";
    } else if (js == "チョキ"){
      winLoseStr = "負け";
    } else if (js == "パー"){
      winLoseStr = "あいこ";
    }
  }
  return winLoseStr;
}

