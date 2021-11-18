def recursive_count(num = 0)
  # type your code in here
  puts num if num<10
  recursive_count(num+1) if num<9
end

if __FILE__ == $PROGRAM_NAME
  recursive_count
end

# OPTIONAL
# Please add your pseudocode to this file
# And a written explanation of your solution
