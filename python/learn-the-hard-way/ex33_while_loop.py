numbers = []

def loop_me(iterations, list, incrementer):
    i = 0
    while i < iterations:
        print "At the top i is %d" % i
        list.append(i)

        i += incrementer
        print "Numbers now: ", list
        print "At the bottom i is %d" % i

loop_me(89, numbers, 7)

print "The numbers: "
for num in numbers:
    print num