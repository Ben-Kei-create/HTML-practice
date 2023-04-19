puts "Hello World!"

puts "I"+"am"   + "Mogi"
puts "I"+"am"   + "  Mogi"

puts "Mogiの年齢は"+ "27" + "です。"
puts "Mogiの年齢は"+ 27.to_s + "です。"

puts "100" + "200"
puts "100".to_i  + "200".to_i
puts "100.to_i" + "200.to_i"

webcamp = "プログラミング学習"
puts "Mogiは、" + webcamp + "をベンキョウしています。"
puts "Mogiは、" + "プログラミング学習" + "をベンキョウしています。"

webcamp = "プログラミング言語"
puts "Mogiは、" + webcamp + "をベンキョウしています。"

Pi = 3.14
puts Pi
puts "Pi"
puts"Pi"
puts Pi.to_s
# 文字列に変換
puts Pi.to_i
# 整数型に変換

Pi = "3.14"
puts Pi
puts "Pi"
puts"Pi"
puts Pi.to_s
# 文字列に変換
puts Pi.to_i
# 整数型に変換

name = "A"
weight = 50

puts name + "さんの体重は、" + weight.to_s + "kgです。"
puts "#{name}" + "さんの体重は、" + "#{weight}" + "kgです。"
puts '#{name}さんの体重は#{weight}kgです'

names = ["Git","HTML","CSS"]
puts names[0]

tall = ["太郎"=>185, "二郎"=>150, "三郎"=>120]
puts tall["太郎"]

tall = {"太郎"=>185, "二郎"=>170, "花子"=>150}
puts tall["太郎"]