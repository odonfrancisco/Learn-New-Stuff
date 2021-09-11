# this one is like your scripts with argv
def print_two(*args):
    arg1, arg2 = args
    print "arg1: %r, arg2, %r" % (arg1, arg2)

# but apparents up top is pointless. we can do this insntead
def print_two_again(arg1, arg2):
    print"arg1: %r, arg2: %r" % (arg1, arg2)

# This only takes one argument
def print_one(arg1):
    print "arg1: %r" % arg1

# takes no arguments
def print_none():
    print "i got nuttin"

print_two("zed","shaw")
print_two_again("Chreaste", "Yeaste")
print_one("First!")
print_none()