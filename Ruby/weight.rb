name = "A"
weight = 50
puts "Aさんの体重は50kgです"
puts name + "さんの体重は" + weight.to_s + "kgです"
# Aさんの体重は50kgです
puts "#{name}さんの体重は#{weight}kgです"
puts '#{name}さんの体重は#{weight}kgです'  # この行を追加
