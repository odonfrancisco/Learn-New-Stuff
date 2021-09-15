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

script, firstArg, secondArg = ('', '', '')

from sys import argv
# if receiving more than two arguments to python command, assign
# each to a variable
if len(argv) > 2 : 
    script, firstArg, secondArg = argv

print "First arg: %s" % firstArg
print "Second arg: %s" % secondArg

filename = raw_input("Which file would you like to open? ")
# opens filename and txt is now like a pointer to current position inside file
txt = open(filename)
# reads txt and returns corresponding string.
print txt.read()
# closes the pointer to file
txt.close()
# the 'w' argument allows script to write to file
target = open(filename, 'w');
# target.write() will write whatever argument string onto file
target.write(
    '''
        chreaste
        yeaste
        measte
    '''
)
# "rewinds" file pointer to line passed as argument
target.seek(0)
# reads current line and goes to next line
target.readline()
target.close()

# function definition
def function1():
    print "I am a working function"
# function with return value
def function2():
    return "I will always return the same thing"
# function with parameter
def function3(arg1):
    return arg1*arg1

function1()
print function2()
print function3(3)
user_num = int(raw_input(
    "What number would you like to exponentially increase? "))
print function3(user_num)