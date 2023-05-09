// 練習問題 2 - 1
// String 型の変数 s に文字列を入力し、s の値を表示するプログラムを作成しなさい。a

public class sample2
{
  public static void main(String[] args)
  {
    String s = "Java";
    System.out.println(s);
  }
}

class Main {
  public static void main(String[] args) {
    System.out.println("Hello Java");
  }
}

class Main {
  public static void main(String[] args) {

    // この文章をコメントにしてください

    System.out.println("こんにちは、Java");

  }
}

class Main {
  public static void main(String[] args) {
    // 数値の17を出力してください
    System.out.println(17);

    // 5に3を足した値を出力してください
    System.out.println(5 + 3);

    // 「5 + 3」を文字列として出力してください
    System.out.println("5 + 3");

  }
}

class Main {
  public static void main(String[] args) {
    // 12を3で割った値を出力してください
    System.out.println( 12 / 3 );

    // 3に6を掛けた値を出力してください
    System.out.println( 3 * 6 );

    // 8を3で割った時の余りを出力してください
    System.out.println( 8 % 3 );

  }
}

class Main {
  public static void main(String[] args) {
    // "こんにちは"と"世界"を連結して出力してください
    System.out.println("こんにちは"+"世界");

    // "38"と"19"を連結して出力してください
    System.out.println("38"+"39");

    // 38と19を足して出力してください
    System.out.println( 38 + 39 );

  }
}

class Main {
  public static void main(String[] args) {
    // int型の変数numberを定義してください
    int number;

    // 変数numberに3を代入してください
    number = 3;

    // 変数numberを出力してください
    System.out.println(number);

    // String型の変数nameを定義してください
    String name;

    // 変数nameに"Wanko"を代入してください
    name = "Wanko";

    // 変数nameを出力してください
    System.out.println(name);

  }
}


1〜10までの数字のうち偶数のみを昇順で表示させる

public class sample2{
  public static void main(String[] args){
    for(int i= 1; i <= 10; i++){
      // 偶数の判定
      if ( 0 == (i%2) )
        System.out.println(i);
    }
  }
}

1〜10までに偶数が何個あるか、また偶数の合計は幾つになるか表示させる

public class sample2
{
  public static void main(String[] args)
  {
    int count = 0;
    int sum = 0;
    for(int i = 1; i<=10; i++){
      if( (i%2) == 0){
        sum = sum + i;
        count ++;
        System.out.println("1~10までに偶数は"+count+"つあります。また、偶数の合計は"+sum+"です");
      }
    }
  }
}

1〜10までに偶数が何個あるか、また偶数の合計は幾つになるか表示させる


1〜10までの整数をカンマ区切りで横並びで表示させる
(10にはカンマをつけない)

