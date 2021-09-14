# saves argument as a variable 
cars = 100
driving_to = "Georgia"
markets = 3
driving = True

# prints string onto console
print "whatever string"

# dynmacally print a variable
print "num of cars: %d" % cars
print "cars per market: %d" % ( cars / markets )
print "all driving to: %s" % markets
print "are we driving? %s" % driving
# %d implicitly converts boolean to int
print "are we driving? %d" % driving
# %r will print the quotations around the string
# %r prints the raw input or some shit
print "%r \n %s" % (
    "drake",
    "drake"
)
# \n prints onto next line

# receive user input from command line
userInput = raw_input("Wassyoname: ")

script, firstArg, secondArg = ''

# if argv: 
#     script, firstArg, secondArg = argv