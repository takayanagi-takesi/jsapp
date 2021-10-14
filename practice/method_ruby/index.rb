# def disp_sum
#   price = 2000
#   num = 20

#   return "#{price}円の商品を#{num}個買ったので、合計金額は#{price * num}です"
# end
# puts disp_sum

# def disp_sum
#   price = 2000
#   num = -1

# # 途中で抜けたい時に使う
#   return "商品の購入数は0以上にしてください" if num <= 0

#   "#{price}円の商品を#{num}個買ったので、合計金額は#{price * num}です"
# end
# puts disp_sum

def disp_sum(price = 100, num = 1)#デフォルト値 100 / 1

# 途中で抜けたい時に使う
  return "商品の購入数は0以上にしてください:入力値　#{num}" if num <= 0

  "#{price}円の商品を#{num}個買ったので、合計金額は#{price * num}です"
end

puts disp_sum(2000, 20)
puts disp_sum(1000, 20)
puts disp_sum(2000, -10)
puts disp_sum()

class Car
  def color
    @color
  end

  def color=(color)
    @color = color
  end
end

  car = Car.new

  car.color = "red"
  puts car.color