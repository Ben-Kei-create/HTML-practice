class FukuKau {
  public static void main(String[] args){

    int uniform = 1980;
    double percent = 0.08;

    System.out.println("服の値段が１着" + uniform + "円です。");
    System.out.println("消費税が0.08％なので、合計金額は、" + (uniform * percent) + "円です。");

  }
}

class FukuKau {
  public static void main(String[] args){

    int price = Integer.parseInt(args[0]);
    double rate = 0.08;
    int amount;

    amount = (int)(price * (1 + rate))
    System.out.println("税込金額は、" + amount + "円です。");

  }
}

class FukuKau {
  public static void main(String[] args){

    //服のねだんを入力したらそれをargs[0]が引数となりpriceに代入してくれる。
    int price = Integer.parseInt(args[0]);

　　　　　　　　//０.０８は、浮動小数点数としてdoubleで宣言をし、値を代入しておく。
    double rate = 0.08;

　　　　　　　　//amountという整数型を宣言しておく。
    int amount;

　　　　　　　　/*amountに、税込金額の式を代入する。このとき、double型が64bit,int型が32bitなので、小きな
　　　　　　　　　　　　箱に、大きな箱をむりやり入れることになる。そのため、てこ＝キャストを使う必要がある。
　　　　　　　　　　　　よって、（int）で変換後のデータ型を入れamountに代入している。　　*/

    amount = (int)(price * (1 + rate))
    System.out.println("税込金額は、" + amount + "円です。");

  }
}

class FukuKau2{
  public static void main(String[] args){

    int price = Integer.parseInt(args[0]);
    double rate = 0.08;
    int discount, amount;

　　　　　　　　amount = (int)(price * (1 + rate));

    if(price >= 3000){
       discount = 300;
       System.out.println("割引されるので、金額は"　+ (amount - discount) + "円");

    } else {

       System.out.println("割引はないので、" + amount + "円");

    }
  }
}

class FukuKau2{
  public static void main(String[] args){

    int price = Integer.parseInt(args[0]);
    double rate = 0.10;
    int discount, amount;

    if(price >= 3000){
       discount = 300;
    } else {
       discount = 0;
    }

　　　　　　　　amount = (int)((price-discount) * (1 + rate));
    System.out.println("値引金額:"　+　discount　+　"円");
    System.out.println("税込金額:"　+　amount　+　"円");

  }
}