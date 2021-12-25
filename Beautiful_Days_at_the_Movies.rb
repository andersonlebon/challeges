
def beautifulDays(i, j, k)
    # Write your code here
    counter = 0;
    (i..j).each do | a |
        reverse = a.to_s.reverse.to_i
        diff = (a - reverse).abs
        if diff % k == 0
        counter +=1
        end
    end
    counter
end
